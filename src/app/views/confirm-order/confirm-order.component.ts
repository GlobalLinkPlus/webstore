import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.scss']
})
export class ConfirmOrderComponent implements OnInit {


  public cartItems:any[]=[]

  customer = "customer";
  business = "business";
  catalog = "catalog";
  type: string;

  cart_summary: any={
    currency:'$',
    subtotal:0,
    freight_cost:0,
    estimated_tax:0,
    total_cost:0
  };

  order_detail:any={

  }

  showPromoInput = false;
  promoCode = '';
  appliedPromoCode = '';

  constructor(
    public userInfoService: UserInfoService,
    private apiService: ApiService,
    private bizService: BizService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
    ) {
    this.cartItems= this.userInfoService.getCartItems();
   }

  ngOnInit(): void {
    const orderId = this.route.snapshot.params.order_id;

    // the order that was just placed (saved by the shipping page; the cart is already empty)
    let last: any = null;
    try {
      last = JSON.parse(sessionStorage.getItem('last_order'));
    } catch (e) {}

    if (last && last.order_id === orderId) {
      this.cartItems = last.items || [];
      this.order_detail = { order_no: last.order_no };
      this.cart_summary = {
        currency: last.currency || this.bizService.get_currency_symbol(),
        subtotal: parseFloat(last.subtotal) || 0,
        freight_cost: 0,
        estimated_tax: parseFloat(last.tax) || 0,
        total_cost: parseFloat(last.total) || 0,
      };
    } else {
      // e.g. coming back from a payment page: fall back to whatever is still in the cart
      this.calculateCartCost();
    }
    this.userInfoService.clearCartItems();

    // a logged-in shopper can read the order back; a guest has no token (the summary above is theirs)
    if (this.userInfoService.isLoggedIn()) {
      this.apiService.getOrderInfo({id:orderId}).subscribe(res=>{
        this.order_detail=res;
        if (res && res.total_amount !== undefined && res.total_amount !== null) {
          this.cart_summary.subtotal = parseFloat(res.subtotal_amount) || 0;
          this.cart_summary.estimated_tax = parseFloat(res.tax) || 0;
          this.cart_summary.total_cost = parseFloat(res.total_amount) || 0;
        }
      },err=>{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load order details' });
      });
    }

    this.type = this.bizService.getBizType();
  }
 
  reduceProductCount(item: any){
    if(item.product_count>1){
      item.product_count=item.product_count-1;
      this.userInfoService.updateItemCart(item);
    }
    
  }
  increaseProductCount(item: any){
      item.product_count=item.product_count+1;
      this.userInfoService.updateItemCart(item);
    
  }

  removeItem(item: any){
      this.userInfoService.removeItemCart(item);
      this.cartItems=this.userInfoService.getCartItems();
      this.calculateCartCost();

  }
  calculateCartCost(){
    this.cart_summary.subtotal=0;
    this.cart_summary.total_cost=0;
    this.cart_summary.freight_cost=0;
    if(this.cartItems.length){
      this.cart_summary.currency=this.cartItems[0].pricing?.currency || this.bizService.get_currency_symbol();
    }

    for(var i=0;i<this.cartItems.length;i++){
      let item=this.cartItems[i]
      const unit=parseFloat(String(item.pricing?.price ?? item.pricing?.pricing_details?.total_cost ?? '').replace(/,/g,''))||0;
      this.cart_summary.subtotal=parseFloat((this.cart_summary.subtotal+unit*(Number(item.product_count)||0)).toFixed(2));
      // TODO: freight is not part of the order total
      this.cart_summary.total_cost=this.cart_summary.subtotal;
    }
    // this.apiService.calculateCartCosts(this.cartItems).subscribe(res=>{
    //   this.cart_summary=res;
    // },err=>{});
  }
  checkout(){
    if(this.userInfoService.isLoggedIn()){
      this.router.navigateByUrl("/"+this.bizService.getBizId()+"/shipping-detail")
    }else{
      this.router.navigateByUrl("/"+this.bizService.getBizId()+"/login")
    }
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

}
