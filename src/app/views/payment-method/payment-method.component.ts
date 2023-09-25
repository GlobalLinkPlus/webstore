import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  paymentForm:FormGroup;
  public cartItems:any[]=[]
  payment_methods:any[]=[{
    id:"1",
    name:"Credit Card"
  }]
  credit_card_types:any[]=[{
    id:"1",
    name:"America Express"
  }]

  cart_summary: any={
    currency:'$',
    subtotal:'0',
    freight_cost:'0',
    estimated_tax:'0',
    total_cost:'0'
  };
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public  userInfoService: UserInfoService,
    public bizService: BizService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    
    this.paymentForm=this.formBuilder.group({
      order_id:['',[Validators.required]],
      payment_method:['',[Validators.required]],
      credit_card_type:['',[Validators.required]],
      card_number:['',[Validators.required]],
      card_owner:['',[Validators.required]],
      expiration_date:['',[Validators.required]],
      cvc:['',[Validators.required]],

    });

    this.cartItems=this.userInfoService.getCartItems();
    
    this.paymentForm.patchValue({order_id:this.route.snapshot.params.order_id})
    this.calculateCartCost();

    this.apiService.getPaymentMethods().subscribe(res=>{this.payment_methods=res},err=>{});
    this.apiService.getCreditCardTypes().subscribe(res=>{this.credit_card_types=res},err=>{});
  }
  submitForm(){
    this.apiService.addOrderPaymentMethod(this.paymentForm.value).subscribe(res=>{
      this.router.navigateByUrl("/"+this.bizService.getBizId()+'/confirm-order/'+this.route.snapshot.params.order_id);
    },err=>{})
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

}
