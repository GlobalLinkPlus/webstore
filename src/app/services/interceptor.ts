import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInfoService } from './user-info.service';
import { BizService } from './biz.service';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
  })
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private userInfoService: UserInfoService,
    private bizService: BizService,
    private router: Router
    ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user_info: any = this.userInfoService.getUserInfo();
   
    var token =user_info.token;
    // if (token) {

    //     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    // }
    if(request.url.toString().indexOf("/api/order_payment")>-1 
    || request.url.toString().indexOf("/api/order-shipping-detail")>-1
    || request.url.toString().indexOf("/api/customer/location")>-1
    || request.url.toString().indexOf("/api/customers_order/")>-1
    || request.url.toString().indexOf("/api/customer_detail")>-1
    || request.url.toString().indexOf("/api/orders")>-1){
      if(token){
        request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
      }else{
        this.router.navigateByUrl("/"+this.bizService.getBizId()+"/login")
      }
    }else if (this.bizService.get_company()) {
      request = request.clone({ headers: request.headers.set('Authorization',  this.bizService.get_company()) });
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
        }));
}
}
