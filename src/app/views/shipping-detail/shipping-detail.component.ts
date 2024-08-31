import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.scss']
})
export class ShippingDetailComponent implements OnInit {
  shippingForm:FormGroup;
  public cartItems:any[]=[]
  customer = "customer";
  business = "business";
  catalog = "catalog";
  type: string;
  cart_summary: any={
    currency:'',
    subtotal:'0',
    freight_cost:'0',
    estimated_tax:'0',
    total_cost:'0'
  };
  countries:any[]=["United States","Germany","United Kingdom"]
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public userInfoService: UserInfoService,
    public bizService: BizService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.shippingForm=this.formBuilder.group({
      contact:['',[Validators.required]],
      phone:['',[Validators.required]],
      country:['',[Validators.required]],
      address:['',[Validators.required]],
      address_2:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required]],
      postal_code:['',[Validators.required]],

    });
 
    this.cartItems=this.userInfoService.getCartItems();

    if(this.cartItems.length>=1){
      this.cart_summary.currency=this.cartItems[0].pricing.currency;
    }

    this.calculateCartCost();

    this.type = this.bizService.getBizType();
  }
  saveShippingDetail(){

    this.cartItems=this.userInfoService.getCartItems();
      var payload={
        customer: this.userInfoService.getCustomerId(),
        products:[],
        new_customer:"No",
        order_channel: "Webstore",
        customer_location_id:"",
        channel:this.cartItems[0].channel,
        "shipping":Object.assign({
          "shipping_method":"FOB",
          "carrier":"FredEx"
        },
        this.shippingForm.value
        ),
      }
      payload["shipping"]
      for(var i=0;i<this.cartItems.length;i++){
        payload.products.push(
          {
            id:this.cartItems[i].id,
            quantity:this.cartItems[i].product_count,
            channel:this.cartItems[i].channel,
            amount:+this.cartItems[i].pricing.first_cost,
            channel_price: 619.4456515037593,
            location: "315c2df1-7362-4af0-9840-d3fdd749cef3"
          }
        )
      }

      // this.processPayment();

      this.apiService.createNewOrder(payload).subscribe(res=>{
        // this.router.navigateByUrl("/"+this.bizService.getBizId()+"/payment-method/"+res.order_id);
        this.processPayment()
      },err=>{})
    // this.apiService.addCustomerLocation(this.shippingForm.value).subscribe(res=>{
    // },err=>{})
  }

  calculateCartCost(){
    this.cart_summary.subtotal=0;
    this.cart_summary.total_cost=0;
    this.cart_summary.freight_cost=0;
    
    for(var i=0;i<this.cartItems.length;i++){
      let item=this.cartItems[i]
      this.cart_summary.subtotal=this.cart_summary.subtotal+parseFloat(item.pricing.first_cost)*item.product_count;
      this.cart_summary.freight_cost=this.cart_summary.freight_cost+parseFloat(item.pricing.freight_cost)*item.product_count;
      this.cart_summary.total_cost=parseFloat(((this.cart_summary.subtotal+this.cart_summary.freight_cost)).toFixed(2));
      this.cart_summary.subtotal=this.cart_summary.total_cost;
    }
    // this.apiService.calculateCartCosts(this.userInfoService.getCartItems()).subscribe(res=>{
    //   this.cart_summary=res;
    // },err=>{});
  }

  processPayment(){
    const payload = {
      webstore_id: this.bizService.get_company_id(),
      payment_data: {},
      cart: [],
      amount: this.cart_summary.total_cost*100,
      // currency: this.cart_summary.currency
      currency: "USD",
      success_url: "https://webstore.globallinkplus.com/globallinkdemo/my-orders",
      cancel_url: "https://webstore.globallinkplus.com/globallinkdemo/cart",
    }

    this.cartItems.forEach(item => {
      payload.cart.push({
        quantity: item.product_count,
        price_data: {
          currency: item.pricing.currency==="$" ? "USD":"",
          unit_amount: +item.pricing.first_cost*100,
          product_data: {
            name: item.name,
            description: item.description,
            images: item.image_urls.url
          }
        }
      })
    })

    this.apiService.processPayment(payload).subscribe(res => {
      window.location.href = res?.checkout_url;
    }, err => {
      console.log(err)
    })
  }


}
