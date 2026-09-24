import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { CartQuote, CheckoutService } from 'src/app/services/checkout.service';
import { LoginModalService } from 'src/app/services/login-modal.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {


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

  // latest server quote (prices, tax, stock); null until it arrives or when it could not be fetched
  quote: CartQuote | null = null;
  quoteFailed = false;
  private lines: { [productId: string]: any } = {};
  private quoteSub: Subscription;

  showPromoInput = false;
  promoCode = '';
  appliedPromoCode = '';

  constructor(
    public userInfoService: UserInfoService,
    private apiService: ApiService,
    public bizService: BizService,
    public checkoutService: CheckoutService,
    private loginModalService: LoginModalService,
    private messageService: MessageService,
    private router: Router
    ) {
    this.cartItems= this.userInfoService.getCartItems();

    if(this.cartItems.length>=1){
      this.cart_summary.currency=this.cartItems[0].pricing?.currency || this.bizService.get_currency_symbol();
    }
   }

  ngOnInit(): void {
    this.type = this.bizService.getBizType();
    // a catalogue store sells nothing: there is no cart to show
    if(!this.checkoutService.canBuy){
      this.router.navigateByUrl("/"+this.bizService.getBizName());
      return;
    }
    this.calculateCartCost();
  }

  ngOnDestroy(): void {
    this.quoteSub?.unsubscribe();
  }

  reduceProductCount(item: any){
    if(item.product_count>1){
      item.product_count=item.product_count-1;
      this.userInfoService.updateItemCart(item);
      this.calculateCartCost();
    }

  }
  increaseProductCount(item: any){
      // never past the units on hand
      const stock=this.stockFor(item);
      if(item.product_count>=stock){
        this.messageService.add({ severity: 'warn', summary: 'Stock limit', detail: 'Only '+stock+' of "'+item.name+'" in stock.' });
        return;
      }
      item.product_count=item.product_count+1;
      this.userInfoService.updateItemCart(item);
      this.calculateCartCost();

  }

  removeItem(item: any){
      this.userInfoService.removeItemCart(item);
      this.cartItems=this.userInfoService.getCartItems();
      this.calculateCartCost();

  }

  // units on hand: the fresh quote if we have one, else what the product page saw when it was added
  stockFor(item: any): number {
    const line=this.lines[item.id];
    if(line && typeof line.available==='number') return line.available;
    return typeof item.pricing?.stock==='number' ? item.pricing.stock : Infinity;
  }

  // unit price shown on a line: the server's when known, otherwise what was saved with the item
  unitPriceFor(item: any): number {
    const line=this.lines[item.id];
    if(line) return parseFloat(line.unit_price)||0;
    return this.checkoutService.unitPrice(item);
  }

  // 'Out of stock' / 'Only N in stock' when the quantity asked for does not fit
  stockNote(item: any): string {
    const line=this.lines[item.id];
    if(!line || line.in_stock) return '';
    return line.available>0 ? 'Only '+line.available+' in stock' : 'Out of stock';
  }

  get hasStockIssue(): boolean {
    return !!this.quote && this.quote.out_of_stock.length>0;
  }

  // sum of the saved unit prices; shown until the server quote arrives and if it cannot be fetched
  private applyLocalTotals(){
    let subtotal=0;
    for(const item of this.cartItems){
      subtotal+=this.checkoutService.unitPrice(item)*(Number(item.product_count)||0);
    }
    this.cart_summary.subtotal=parseFloat(subtotal.toFixed(2));
    // TODO: freight is not part of the order total; tax comes from the quote
    this.cart_summary.freight_cost=0;
    this.cart_summary.estimated_tax=0;
    this.cart_summary.total_cost=this.cart_summary.subtotal;
  }

  calculateCartCost(){
    this.applyLocalTotals();
    if(!this.checkoutService.showPrices || this.cartItems.length===0){
      this.quote=null;
      this.lines={};
      return;
    }

    this.quoteSub?.unsubscribe();
    this.quoteSub=this.checkoutService.quote(this.cartItems).subscribe(quote=>{
      if(!quote){
        // keep the local sum; tax is worked out at checkout
        this.quote=null;
        this.lines={};
        this.quoteFailed=true;
        return;
      }
      this.quoteFailed=false;

      // products the store cannot sell are dropped before checkout
      if(quote.unpriced.length>0){
        for(const id of quote.unpriced){
          const item=this.cartItems.find(i=>i.id===id);
          if(item){
            this.userInfoService.removeItemCart(item);
            this.messageService.add({ severity: 'warn', summary: 'Removed from cart', detail: '"'+item.name+'" is not available for sale and was removed.', life: 6000 });
          }
        }
        this.cartItems=this.userInfoService.getCartItems();
        this.calculateCartCost();
        return;
      }

      this.quote=quote;
      this.lines={};
      for(const line of quote.lines){
        this.lines[line.product]=line;
      }
      this.cart_summary.currency=quote.currency || this.cart_summary.currency;
      this.cart_summary.subtotal=parseFloat(quote.subtotal)||0;
      this.cart_summary.freight_cost=0;
      this.cart_summary.estimated_tax=parseFloat(quote.tax)||0;
      this.cart_summary.total_cost=parseFloat(quote.total)||0;
    });
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

    if(this.hasStockIssue){
      this.messageService.add({ severity: 'warn', summary: 'Check your cart', detail: 'Lower the quantity or remove the items that are out of stock.', life: 6000 });
      return;
    }

    if(this.userInfoService.isLoggedIn() || this.type===this.customer){
      this.router.navigateByUrl("/"+this.bizService.getBizId()+"/shipping-detail")
    }else{

      this.loginModalService.open();
      // this.router.navigateByUrl("/"+this.bizService.getBizId()+"/login")

    }
  }

}
