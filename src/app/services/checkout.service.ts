import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { BizService } from './biz.service';
import { UserInfoService } from './user-info.service';

export type StoreType = 'customer' | 'business' | 'catalog';

// what the cart-calculation endpoint answers
export interface CartQuote {
  store_type: string;
  currency: string;
  lines: {
    product: string;
    name: string;
    sku: string;
    quantity: string;
    unit_price: string;
    line_subtotal: string;
    tax_rate: string;
    tax_amount: string;
    line_total: string;
    available: number;
    in_stock: boolean;
  }[];
  unpriced: string[];
  out_of_stock: string[];
  subtotal: string;
  tax: string;
  total: string;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(
    private apiService: ApiService,
    private bizService: BizService,
    private userInfoService: UserInfoService
  ) {}

  // b2b -> 'business', b2c -> 'customer', catalogue -> 'catalog' (mapped in BizService)
  get storeType(): string {
    return this.bizService.getBizType();
  }

  // catalogue stores sell nothing: no cart, no checkout
  get canBuy(): boolean {
    return this.storeType !== 'catalog';
  }

  // b2b shows prices to logged-in shoppers only, b2c to everyone, catalogue never
  get showPrices(): boolean {
    switch (this.storeType) {
      case 'customer':
        return true;
      case 'business':
        return this.userInfoService.isLoggedIn();
      default:
        return false;
    }
  }

  // b2c shoppers may check out without an account (guest checkout); b2b must log in
  get canGuestCheckout(): boolean {
    return this.storeType === 'customer';
  }

  // priced and taxed by the backend, exactly what the order will be raised at.
  // null when the quote could not be fetched (the caller falls back to its own sum)
  quote(cartItems: any[]): Observable<CartQuote | null> {
    const products = (cartItems || [])
      .filter(item => item && item.id && Number(item.product_count) > 0)
      .map(item => ({ id: item.id, quantity: Number(item.product_count) }));
    if (products.length === 0) {
      return of(null);
    }
    return this.apiService.calculateCartCosts({ products }).pipe(
      catchError(() => of(null))
    );
  }

  // unit price kept on the cart item when it was added; only used if the quote is unavailable
  unitPrice(item: any): number {
    const raw = item?.pricing?.price ?? item?.pricing?.pricing_details?.total_cost;
    return parseFloat(String(raw ?? '').replace(/,/g, '')) || 0;
  }

  // a sentence to show when logging in fails (codes: see the API reference, section 2)
  loginErrorMessage(err: any): string {
    const body = err && err.error && typeof err.error === 'object' ? err.error : {};
    switch (body.code) {
      case 'EMAIL_NOT_VERIFIED':
        return 'Please verify your email address before logging in.';
      case 'PASSWORD_CHANGE_REQUIRED':
        return 'You need to reset your password before logging in.';
      default:
        // a refused login answers 400 or 401 with the sentence to show in `message`; `error` on a
        // 400 says whether the account exists, which is not for visitors to see
        if (err && (err.status === 400 || err.status === 401)) {
          return (typeof body.message === 'string' && body.message)
            || (err.status === 401 && typeof body.error === 'string' && body.error)
            || 'Incorrect username or password';
        }
        return 'We could not log you in right now. Please try again.';
    }
  }

  // a sentence to show the shopper for a refused order (codes: see the API reference, section 8/9)
  orderErrorMessage(err: any, cartItems: any[] = []): string {
    const body = err && err.error && typeof err.error === 'object' ? err.error : {};
    const nameOf = (id: string) => {
      const item = cartItems.find(i => i.id === id);
      return item ? item.name : 'a product';
    };

    switch (body.code) {
      case 'PRICING_NOT_FOUND': {
        const names = (body.unpriced || []).map(u => u.product_name || u.sku).filter(Boolean);
        return names.length
          ? 'These products have no price and cannot be ordered: ' + names.join(', ') + '. Remove them from your cart to continue.'
          : 'Some products in your cart have no price. Remove them to continue.';
      }
      case 'INSUFFICIENT_STOCK': {
        const d = body.details || {};
        const available = Math.max(Math.floor(parseFloat(d.available) || 0), 0);
        return available > 0
          ? 'Only ' + available + ' of "' + nameOf(d.product) + '" in stock. Lower the quantity to ' + available + ' to continue.'
          : '"' + nameOf(d.product) + '" is out of stock. Remove it from your cart to continue.';
      }
      case 'STORE_HAS_NO_PRICING':
        return 'Nothing is for sale in this store.';
      case 'CUSTOMER_NOT_FOUND':
        return 'We could not find your customer record. Please contact the seller.';
      case 'CUSTOMER_REQUIRED':
        return 'Please enter your name and a valid email address.';
      case 'LOGIN_REQUIRED':
        return 'Please log in to place an order.';
      case 'LOGIN_PRESENT':
        return 'You are logged in. Please place the order from your account.';
      default:
        if (err && err.status === 401) {
          return 'Your session has expired. Please log in again.';
        }
        return (typeof body.error === 'string' && body.error) || 'Order Not Placed';
    }
  }
}
