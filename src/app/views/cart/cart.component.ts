import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { LoginModalService } from 'src/app/services/login-modal.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  public cartItems:any[]=[]
  customer = "customer";
  business = "business";
  catalog = "catalog";
  type: string;

  cart_summary: any={
    currency:'',
    subtotal:0,
    freight_cost:0,
    estimated_tax:0,
    total_cost:0
  };

  showPromoInput = false;
  promoCode = '';
  appliedPromoCode = '';

  constructor(
    public userInfoService: UserInfoService,
    private apiService: ApiService,
    public bizService: BizService,
    private loginModalService: LoginModalService,
    private router: Router
    ) {
    this.cartItems= this.userInfoService.getCartItems();

    if(this.cartItems.length>=1){
      this.cart_summary.currency=this.cartItems[0].pricing.currency;
    }
   }

  ngOnInit(): void {
    this.calculateCartCost();
    this.type = this.bizService.getBizType();
  }
 
  reduceProductCount(item: any){
    if(item.product_count>1){
      item.product_count=item.product_count-1;
      this.userInfoService.updateItemCart(item);
      this.calculateCartCost();
    }
    
  }
  increaseProductCount(item: any){
      item.product_count=item.product_count+1;
      this.userInfoService.updateItemCart(item);
      this.calculateCartCost();

  }

  removeItem(item: any){
      this.userInfoService.removeItemCart(item);
      this.cartItems=this.userInfoService.getCartItems();
      this.calculateCartCost();

  }
  calculateCartCost(){
    let subtotal=0;
    // TODO: re-add freight and estimated tax to the totals later
    // let freight=0;

    for(const item of this.cartItems){
      const count=Number(item.product_count)||0;
      // price fields may be strings like "1,299.00"; strip separators before parsing
      const unitPrice=parseFloat(String(item.pricing?.pricing_details?.total_cost ?? '').replace(/,/g,''))||0;
      // const unitFreight=parseFloat(String(item.pricing?.freight_cost ?? '').replace(/,/g,''))||0;
      subtotal+=unitPrice*count;
      // freight+=unitFreight*count;
    }

    this.cart_summary.subtotal=parseFloat(subtotal.toFixed(2));
    this.cart_summary.freight_cost=0;
    this.cart_summary.estimated_tax=0;
    this.cart_summary.total_cost=this.cart_summary.subtotal;
    // this.apiService.calculateCartCosts(this.cartItems).subscribe(res=>{
    //   this.cart_summary=res;
    // },err=>{});
  }
  togglePromoInput(){
    this.showPromoInput = !this.showPromoInput;
  }

  applyPromoCode(){
    if(!this.promoCode.trim()) return;
    this.appliedPromoCode = this.promoCode.trim();
  }

  removePromoCode(){
    this.appliedPromoCode = '';
    this.promoCode = '';
    this.showPromoInput = false;
  }

  openLogin(){
    this.loginModalService.open();
  }

  checkout(){
    if(this.cartItems.length<1)
    return
  
    if(this.userInfoService.isLoggedIn() || this.type===this.customer){
      this.router.navigateByUrl("/"+this.bizService.getBizId()+"/shipping-detail")
    }else{
     
      this.loginModalService.open();
      // this.router.navigateByUrl("/"+this.bizService.getBizId()+"/login")

    }
  }

}
