import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { CartQuote, CheckoutService } from 'src/app/services/checkout.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.scss'],
})
export class ShippingDetailComponent implements OnInit, OnDestroy {
  @ViewChild('alert') alertComponent!: AlertComponent;

  shippingForm: FormGroup;
  public cartItems: any[] = [];
  customer = 'customer';
  business = 'business';
  catalog = 'catalog';
  mpesa = 'mpesa';
  stripe = 'stripe';
  paymentOption = new FormControl('');
  paymentOptions = ['mpesa', 'stripe'];
  mpesaPhoneNumber = new FormControl('');
  // guests (b2c, not logged in) also leave an email so the order can be raised for them
  guestEmail = new FormControl('', [Validators.required, Validators.email]);
  type: string;
  submitting = false;
  quote: CartQuote | null = null;
  quoteFailed = false;
  cart_summary: any = {
    currency: '',
    subtotal: '0',
    freight_cost: '0',
    estimated_tax: '0',
    total_cost: '0',
  };
  countries: any[] = ['United States', 'Germany', 'United Kingdom'];
  private quoteSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public userInfoService: UserInfoService,
    public bizService: BizService,
    public checkoutService: CheckoutService,
    private messageService: MessageService,
    private router: Router
  ) {}

  // a b2c shopper who is not logged in checks out as a guest
  get isGuest(): boolean {
    return !this.userInfoService.isLoggedIn() && this.checkoutService.canGuestCheckout;
  }

  ngOnInit(): void {
    this.type = this.bizService.getBizType();
    this.shippingForm = this.formBuilder.group({
      contact: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: ['', [Validators.required]],
      address_2: [''],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      postal_code: ['', [Validators.required]],
    });

    // catalogue stores sell nothing; b2b shoppers must be logged in to order
    if (!this.checkoutService.canBuy) {
      this.router.navigateByUrl('/' + this.bizService.getBizName());
      return;
    }
    if (!this.userInfoService.isLoggedIn() && !this.checkoutService.canGuestCheckout) {
      this.router.navigateByUrl('/' + this.bizService.getBizName() + '/cart');
      return;
    }

    this.cartItems = this.userInfoService.getCartItems();

    if (this.cartItems.length >= 1) {
      this.cart_summary.currency = this.cartItems[0].pricing?.currency || this.bizService.get_currency_symbol();
    }

    this.calculateCartCost();
  }

  ngOnDestroy(): void {
    this.quoteSub?.unsubscribe();
  }

  // the fields still missing, by label, for one clear message
  private missingFields(): string[] {
    const labels = {
      contact: 'Full Name',
      phone: 'Phone Number',
      country: 'Country',
      address: 'Address',
      city: 'City',
      state: 'State/Region',
      postal_code: 'Postal Code',
    };
    const missing = Object.keys(labels)
      .filter((key) => this.shippingForm.get(key).invalid)
      .map((key) => labels[key]);
    if (this.isGuest && this.guestEmail.invalid) {
      missing.push('a valid Email');
    }
    return missing;
  }

  saveShippingDetail() {
    if (this.submitting) return;

    this.cartItems = this.userInfoService.getCartItems();
    if (this.cartItems.length < 1) {
      this.messageService.add({ severity: 'warn', summary: 'Cart is empty', detail: 'Add a product to your cart first.' });
      return;
    }

    const missing = this.missingFields();
    if (missing.length > 0) {
      this.shippingForm.markAllAsTouched();
      this.guestEmail.markAsTouched();
      this.messageService.add({ severity: 'warn', summary: 'Missing details', detail: 'Please fill in: ' + missing.join(', ') + '.' });
      return;
    }

    if (this.quote && this.quote.out_of_stock.length > 0) {
      this.messageService.add({ severity: 'warn', summary: 'Check your cart', detail: 'Some items are out of stock. Lower the quantity or remove them in your cart.', life: 6000 });
      return;
    }

    // customer, channel, prices and warehouse are all worked out by the backend
    const shipping = Object.assign(
      {
        shipping_method: 'FOB',
        carrier: 'FedEx',
      },
      this.shippingForm.value
    );
    const payload: any = {
      products: this.cartItems.map((item) => ({
        id: item.id,
        quantity: Number(item.product_count) || 1,
      })),
      shipping,
      order_channel: 'Webstore',
    };

    let request;
    if (this.isGuest) {
      payload.customer = {
        name: shipping.contact,
        email: String(this.guestEmail.value).trim(),
        phone: shipping.phone,
      };
      request = this.apiService.createGuestOrder(payload);
    } else {
      request = this.apiService.createNewOrder(payload);
    }

    this.submitting = true;
    request.subscribe(
      (res) => {
        this.submitting = false;
        this.orderPlaced(res);
      },
      (err) => {
        this.submitting = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Order Not Placed',
          detail: this.checkoutService.orderErrorMessage(err, this.cartItems),
          life: 8000,
        });
        // the refusal usually means the cart changed under us: show the current prices and stock
        if (err && err.error && ['PRICING_NOT_FOUND', 'INSUFFICIENT_STOCK'].indexOf(err.error.code) > -1) {
          this.calculateCartCost();
        }
      }
    );
  }

  // res: { order_id, order_no, subtotal, tax, total }
  private orderPlaced(res: any) {
    const items = this.cartItems;
    // what the confirmation page shows; guests have no token to read the order back with
    sessionStorage.setItem(
      'last_order',
      JSON.stringify({
        order_id: res.order_id,
        order_no: res.order_no,
        subtotal: res.subtotal,
        tax: res.tax,
        total: res.total,
        currency: this.cart_summary.currency,
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          sku: item.sku,
          product_count: item.product_count,
        })),
      })
    );

    this.messageService.add({ severity: 'success', summary: 'Order Placed', detail: 'Order ' + (res.order_no || '') + ' placed successfully.' });

    if (this.type === 'customer' && this.paymentOption.value === 'stripe') {
      this.processPayment(res, items);
    } else if (this.type === 'customer' && this.paymentOption.value === 'mpesa') {
      this.processMpesaPayment(res);
    } else {
      this.finish(res.order_id);
    }
  }

  // the order is in: empty the cart and show the confirmation
  private finish(orderId: string) {
    this.userInfoService.clearCartItems();
    this.router.navigateByUrl('/' + this.bizService.getBizName() + '/confirm-order/' + orderId);
  }

  // the server's priced and taxed total; falls back to our own sum only if the quote is unavailable
  calculateCartCost() {
    this.applyLocalTotals();
    if (!this.checkoutService.showPrices || this.cartItems.length === 0) {
      this.quote = null;
      return;
    }

    this.quoteSub?.unsubscribe();
    this.quoteSub = this.checkoutService.quote(this.cartItems).subscribe((quote) => {
      if (!quote) {
        this.quote = null;
        this.quoteFailed = true;
        return;
      }
      this.quoteFailed = false;

      // products the store cannot sell are dropped before checkout
      if (quote.unpriced.length > 0) {
        for (const id of quote.unpriced) {
          const item = this.cartItems.find((i) => i.id === id);
          if (item) {
            this.userInfoService.removeItemCart(item);
            this.messageService.add({ severity: 'warn', summary: 'Removed from cart', detail: '"' + item.name + '" is not available for sale and was removed.', life: 6000 });
          }
        }
        this.cartItems = this.userInfoService.getCartItems();
        if (this.cartItems.length === 0) {
          this.router.navigateByUrl('/' + this.bizService.getBizName() + '/cart');
          return;
        }
        this.calculateCartCost();
        return;
      }

      this.quote = quote;
      this.cart_summary.currency = quote.currency || this.cart_summary.currency;
      this.cart_summary.subtotal = parseFloat(quote.subtotal) || 0;
      this.cart_summary.freight_cost = 0;
      this.cart_summary.estimated_tax = parseFloat(quote.tax) || 0;
      this.cart_summary.total_cost = parseFloat(quote.total) || 0;
    });
  }

  private applyLocalTotals() {
    let subtotal = 0;
    for (const item of this.cartItems) {
      subtotal += this.checkoutService.unitPrice(item) * (Number(item.product_count) || 0);
    }
    this.cart_summary.subtotal = parseFloat(subtotal.toFixed(2));
    // TODO: freight is not part of the order total; tax comes from the quote
    this.cart_summary.freight_cost = 0;
    this.cart_summary.estimated_tax = 0;
    this.cart_summary.total_cost = this.cart_summary.subtotal;
  }

  processMpesaPayment(order: any) {
    const payload = {
      identifier: '174379',
      amount: parseFloat(order.total) || this.cart_summary.total_cost,
      phone: this.mpesaPhoneNumber.value,
      reference: order.order_id,
      description: 'Payment for order ' + order.order_id,
    };

    this.apiService.processMpesaPayment(payload).subscribe(
      (res) => {
        if (res?.status === 'success') {
          this.messageService.add({ severity: 'success', summary: 'Payment Successful', detail: 'Your M-Pesa payment was received.' });
        }
        this.finish(order.order_id);
      },
      (err) => {
        this.messageService.add({ severity: 'error', summary: 'Payment Failed', detail: 'Your order was placed but the M-Pesa payment failed.', life: 8000 });
        this.finish(order.order_id);
      }
    );
  }

  processPayment(order: any, items: any[]) {
    const total = parseFloat(order.total) || this.cart_summary.total_cost;
    const payload = {
      webstore_id: this.bizService.get_company_id(),
      payment_data: {},
      cart: [],
      amount: Math.round(total * 100),
      // currency: this.cart_summary.currency
      currency: 'USD',
      success_url:
        'https://webstore.globallinkplus.com/globallinkdemo/my-orders',
      cancel_url: 'https://webstore.globallinkplus.com/globallinkdemo/cart',
    };

    items.forEach((item) => {
      this.userInfoService.removeItemCart(item);
      payload.cart.push({
        quantity: item.product_count,
        price_data: {
          currency: item.pricing?.currency === '$' ? 'USD' : '',
          unit_amount: Math.round(this.checkoutService.unitPrice(item) * 100),
          product_data: {
            name: item.name,
            description: item.description,
            images: (item.image_urls || []).map((image) => image.url),
          },
        },
      });
    });

    this.apiService.processPayment(payload).subscribe(
      (res) => {
        window.location.href = res?.checkout_url;
      },
      (err) => {
        console.log(err);
        this.messageService.add({ severity: 'error', summary: 'Payment Failed', detail: 'Your order was placed but the card payment could not be started.', life: 8000 });
        this.finish(order.order_id);
      }
    );
  }
}
