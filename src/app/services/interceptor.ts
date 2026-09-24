import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,

  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserInfoService } from './user-info.service';
import { BizService } from './biz.service';
import { Router } from '@angular/router';

// calls that only make sense for a logged-in shopper: no token means send them to login
const LOGIN_REQUIRED_URLS = [
  '/api/order_payment',
  '/api/customers_order/',
  '/api/customer_detail',
  '/api/orders',
];

// calls whose answer depends on who is asking (customer price chain, tax exemption, own orders).
// They send the token when there is one and fall back to the company id for guests.
const SHOPPER_AWARE_URLS = [
  '/api/channel_products',
  '/api/webstore_sections',
  '/api/cart-calculation',
  '/api/variations',
  '/api/product/video',
  '/api/collections',
  '/api/order_details',
];

@Injectable({
    providedIn: 'root'
  })
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private userInfoService: UserInfoService,
    private bizService: BizService,
    private router: Router
    ) {}

  private matches(request: HttpRequest<any>, urls: string[]): boolean {
    const url = request.url.toString();
    return urls.some(u => url.indexOf(u) > -1);
  }

  private withCompany(request: HttpRequest<any>): HttpRequest<any> {
    const company = this.bizService.get_company();
    return company ? request.clone({ headers: request.headers.set('Authorization', company) }) : request;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user_info: any = this.userInfoService.getUserInfo();

    var token =user_info.token;
    // if (token) {

    //     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    // }
    const loginRequired = this.matches(request, LOGIN_REQUIRED_URLS);
    const shopperAware = this.matches(request, SHOPPER_AWARE_URLS);
    let sentToken = false;

    if(loginRequired){
      if(token){
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        sentToken = true;
      }else{
        this.router.navigateByUrl("/"+this.bizService.getBizId()+"/login")
      }
    }else if (shopperAware && token) {
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
      sentToken = true;
    }else if (this.bizService.get_company()) {
      request = this.withCompany(request);
    }

    if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

    return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
            return event;
        }),
        catchError((error: any) => {
          // the token lasts 10 hours; an expired one must not break the public pages
          if (sentToken && error instanceof HttpErrorResponse && error.status === 401) {
            this.userInfoService.signOut();
            if (loginRequired) {
              this.router.navigateByUrl("/"+this.bizService.getBizId()+"/login");
            } else {
              return next.handle(this.withCompany(request));
            }
          }
          return throwError(error);
        })
    );
}
}
