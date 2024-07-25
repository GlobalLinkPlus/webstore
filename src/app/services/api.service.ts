import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpBackend } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


// export const BASE_URL='https://testapi.io/api/antonymwangig/'
// export const BASE_URL='https://81c7-3-87-245-245.ngrok.io/api/';
export const BASE_URL = 'https://backend.globallinkplus.com/api/'
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient, public backend: HttpBackend) {
  }
  private extractData(res: any) {
    const body = res;
    return body || {};
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }


  getBizInfo(name): Observable<any> {
    return this.http.get(BASE_URL + 'webstore/?name=' + name);
  }



  getAboutUsDetails(id): Observable<any> {
    return this.http.get(BASE_URL + 'about-us/?webstore_id=' + id);
  }

  getSocialsDetails(id): Observable<any> {
    return this.http.get(BASE_URL + 'socials/?webstore_id=' + id);
  }

  getProductVariations(id): Observable<any> {
    return this.http.get(BASE_URL + 'variations/?product=' + id);
  }

  getReturnPolicyDetails(id): Observable<any> {
    return this.http.get(BASE_URL + 'return-policy/?webstore_id=' + id);
  }

  getFaqsDetails(id): Observable<any> {
    return this.http.get(BASE_URL + 'faqs/?webstore_id=' + id);
  }

  validateCustomerEmail(data: any): Observable<any> {
    return this.http.post(BASE_URL + 'webstore/password/reset/email', data).pipe(
      map(this.extractData));
  }

  processPayment(data: any): Observable<any> {
    return this.http.post(BASE_URL + 'webstore_payment/payment_stripe/', data).pipe(
      map(this.extractData));
  }

  resetPassword(data: any): Observable<any> {
    return this.http.put(BASE_URL + 'webstore/password/reset', data).pipe(
      map(this.extractData));
  }

  getHomeSectionItems(id): Observable<any> {
    return this.http.post(BASE_URL + 'webstore_sections/', { 'id': id });
  }


  login(data: any): Observable<any> {
    return this.http.post(BASE_URL + 'login/', data).pipe(
      map(this.extractData));
  }


  getCustomerDetail(id): Observable<any> {
    return this.http.post(BASE_URL + 'customer_detail/', { id: id }).pipe(
      map(this.extractData));
  }
  getProductCategory(search): Observable<any> {
    return this.http.get(BASE_URL + 'category/' + search).pipe(
      map(this.extractData));
  }

  getProductSubCategory(search): Observable<any> {
    return this.http.get(BASE_URL + 'subcategory/' + search).pipe(
      map(this.extractData));
  }
  getProducts(search): Observable<any> {
    return this.http.get(BASE_URL + 'channel_products/' + search).pipe(
      map(this.extractData));
  }

  getProductDetail(id: any): Observable<any> {
    return this.http.get(BASE_URL + 'channel_products/' + id + "/").pipe(
      map(this.extractData));
  }

  getProductVideo(search): Observable<any> {
    return this.http.get(BASE_URL + 'product/video/' + search).pipe(
      map(this.extractData));
  }

  getPartnerDetails(id: string): Observable<any> {
    return this.http.get(BASE_URL + 'partner/' + id + '/').pipe(
      map(this.extractData));
  }
  getPartners(search: string): Observable<any> {
    return this.http.get(BASE_URL + 'partner/' + search).pipe(
      map(this.extractData));
  }
  getChannels(search): Observable<any> {
    return this.http.get(BASE_URL + 'channels/' + search).pipe(
      map(this.extractData));
  }
  getChannelsDetails(id: string): Observable<any> {
    return this.http.get(BASE_URL + 'product/channels/' + id + '/').pipe(
      map(this.extractData));
  }
  getCollections(search): Observable<any> {
    return this.http.get(BASE_URL + 'collections/' + search).pipe(
      map(this.extractData));
  }
  addCustomerLocation(data): Observable<any> {
    return this.http.post(BASE_URL + 'customer/location/', data).pipe(
      map(this.extractData));
  }

  contactUs(data): Observable<any> {
    return this.http.post(BASE_URL + 'contact-us/', data).pipe(
      map(this.extractData));
  }

  getTopSellers(): Observable<any> {
    return this.http.get(BASE_URL + 'channels/').pipe(
      map(this.extractData));
  }

  getTopProducts(): Observable<any> {
    return this.http.get(BASE_URL + 'channel_products/').pipe(
      map(this.extractData));
  }
  getProductPricing(search): Observable<any> {
    return this.http.get(BASE_URL + 'product/pricing/' + search).pipe(
      map(this.extractData));
  }
  getVariations(search): Observable<any> {
    return this.http.get(BASE_URL + 'variations/' + search).pipe(
      map(this.extractData));
  }
  calculateCartCosts(data: any): Observable<any> {
    return this.http.post(BASE_URL + 'cart-calculation/', data).pipe(
      map(this.extractData));
  }
  createNewOrder(data: any): Observable<any> {
    return this.http.post(BASE_URL + 'orders/', data).pipe(
      map(this.extractData));
  }
  getOrderInfo(data): Observable<any> {
    return this.http.post(BASE_URL + 'order_details/', data).pipe(
      map(this.extractData));
  }
  getOrders(data): Observable<any> {
    return this.http.post(BASE_URL + 'customers_order/', data).pipe(
      map(this.extractData));
  }

  addOrderShippingDetails(data: any): Observable<any> {
    return this.http.post(BASE_URL + 'order-shipping-detail/', data).pipe(
      map(this.extractData));
  }

  addOrderPaymentMethod(data: any): Observable<any> {
    return this.http.post(BASE_URL + 'order_payment/', data).pipe(
      map(this.extractData));
  }

  getPaymentMethods(): Observable<any> {
    return this.http.get(BASE_URL + 'payment_methods/').pipe(
      map(this.extractData));
  }
  getCreditCardTypes(): Observable<any> {
    return this.http.get(BASE_URL + 'payment_methods/').pipe(
      map(this.extractData));
  }
  getTemplateLocation(): Observable<any> {
    return this.http.get(BASE_URL + 'template-location').pipe(
      map(this.extractData));
  }



}



