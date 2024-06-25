(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/+8M":
/*!*****************************************!*\
  !*** ./src/app/dom-injector.service.ts ***!
  \*****************************************/
/*! exports provided: DomInjectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomInjectorService", function() { return DomInjectorService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DomInjectorService {
    constructor(rendererFactory) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    injectApiKey() {
        const metaTag = this.renderer.createElement('meta');
        this.renderer.setAttribute(metaTag, 'name', 'api-key');
        this.renderer.setAttribute(metaTag, 'content', _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].GOOGLE_API_KEY);
        this.renderer.appendChild(document.head, metaTag);
    }
}
DomInjectorService.ɵfac = function DomInjectorService_Factory(t) { return new (t || DomInjectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"])); };
DomInjectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DomInjectorService, factory: DomInjectorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miguelshinyenyi/workspace/webstore/src/main.ts */"zUnb");


/***/ }),

/***/ "5D85":
/*!*************************************************!*\
  !*** ./src/app/services/login-modal.service.ts ***!
  \*************************************************/
/*! exports provided: LoginModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalService", function() { return LoginModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoginModalService {
    constructor() {
        this.loginModalEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    open() {
        console.log("emmmitng");
        this.loginModalEmitter.emit("open");
    }
    close() {
        this.loginModalEmitter.emit("close");
    }
}
LoginModalService.ɵfac = function LoginModalService_Factory(t) { return new (t || LoginModalService)(); };
LoginModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoginModalService, factory: LoginModalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    GOOGLE_API_KEY: 'AIzaSyAYSk6F_zStBqewtptxnDPMOm6V9CfR-Pk',
};


/***/ }),

/***/ "Epua":
/*!*****************************************!*\
  !*** ./src/app/services/biz.service.ts ***!
  \*****************************************/
/*! exports provided: BizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizService", function() { return BizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BizService {
    constructor() { }
    setBizId(id) {
        sessionStorage.setItem("biz_id", id);
    }
    getBizId() {
        return sessionStorage.getItem("biz_id");
    }
    setBizName(name) {
        sessionStorage.setItem("name", name);
    }
    getBizName() {
        return sessionStorage.getItem("name");
    }
    getBizType() {
        return sessionStorage.getItem("type");
    }
    setBizDetail(data) {
        sessionStorage.setItem("company_id", data.id);
        sessionStorage.setItem("company_logo", data.company_logo);
        sessionStorage.setItem("background_color", data.background_color);
        sessionStorage.setItem("left_header", data.left_header);
        sessionStorage.setItem("right_header", data.right_header);
        sessionStorage.setItem("left_link", data.left_link);
        sessionStorage.setItem("right_link", data.right_link);
        sessionStorage.setItem("meta_title", data.meta_title);
        sessionStorage.setItem("meta_description", data.meta_description);
        sessionStorage.setItem("mid_banner_image", data.mid_banner_image);
        sessionStorage.setItem("mid_banner_link", data.mid_banner_link);
        sessionStorage.setItem("mid_banner_first_line", data.mid_banner_first_line);
        sessionStorage.setItem("mid_banner_second_line", data.mid_banner_second_line);
        sessionStorage.setItem("name", data.name);
        sessionStorage.setItem("favicon_image", data.favicon_image);
        sessionStorage.setItem("webstore_link", data.webstore_link);
        sessionStorage.setItem("company", data.company);
        sessionStorage.setItem("footer_data", JSON.stringify(data.footer_data.footer_data));
        sessionStorage.setItem("sliders", JSON.stringify(data.sliders));
        if (data.type === "b2b")
            sessionStorage.setItem("type", "business");
        if (data.type === "b2c")
            sessionStorage.setItem("type", "customer");
        if (data.type === "catalogue")
            sessionStorage.setItem("type", "catalog");
    }
    get_company_logo() {
        // return "assets/img/logo.png"
        // if(sessionStorage.getItem("company_logo")==null){
        //   return "assets/img/logo.png"
        // }
        return sessionStorage.getItem("company_logo");
    }
    set_company_logo(logo) {
        sessionStorage.setItem("company_logo", logo);
    }
    get_background_color() {
        return sessionStorage.getItem("background_color");
    }
    get_footer_data() {
        return JSON.parse(sessionStorage.getItem("footer_data"));
    }
    get_company_id() {
        return sessionStorage.getItem("company_id");
    }
    get_left_header() {
        return sessionStorage.getItem("left_header");
    }
    get_right_header() {
        return sessionStorage.getItem("right_header");
    }
    get_left_link() {
        return sessionStorage.getItem("left_link");
    }
    get_right_link() {
        return sessionStorage.getItem("right_link");
    }
    get_meta_title() {
        return sessionStorage.getItem("meta_title");
    }
    get_meta_description() {
        return sessionStorage.getItem("meta_description");
    }
    get_mid_banner_image() {
        return sessionStorage.getItem("mid_banner_image");
    }
    get_mid_banner_link() {
        return sessionStorage.getItem("mid_banner_link");
    }
    get_mid_banner_second_line() {
        return sessionStorage.getItem("mid_banner_second_line");
    }
    get_mid_banner_first_line() {
        return sessionStorage.getItem("mid_banner_first_line");
    }
    get_name() {
        return sessionStorage.getItem("name");
    }
    get_favicon_image() {
        return sessionStorage.getItem("favicon_image");
    }
    get_webstore_link() {
        return sessionStorage.getItem("webstore_link");
    }
    get_company() {
        return sessionStorage.getItem("company");
    }
    get_sliders() {
        return JSON.parse(sessionStorage.getItem("sliders"));
    }
}
BizService.ɵfac = function BizService_Factory(t) { return new (t || BizService)(); };
BizService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BizService, factory: BizService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: BASE_URL, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// export const BASE_URL='https://testapi.io/api/antonymwangig/'
// export const BASE_URL='https://81c7-3-87-245-245.ngrok.io/api/';
const BASE_URL = 'https://backend.globallinkplus.com/api/';
class ApiService {
    constructor(http, backend) {
        this.http = http;
        this.backend = backend;
    }
    extractData(res) {
        const body = res;
        return body || {};
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    }
    getBizInfo(name) {
        return this.http.get(BASE_URL + 'webstore/?name=' + name);
    }
    getAboutUsDetails(id) {
        return this.http.get(BASE_URL + 'about-us/?webstore_id=' + id);
    }
    getProductVariations(id) {
        return this.http.get(BASE_URL + 'variations/?product=' + id);
    }
    getReturnPolicyDetails(id) {
        return this.http.get(BASE_URL + 'return-policy/?webstore_id=' + id);
    }
    getFaqsDetails(id) {
        return this.http.get(BASE_URL + 'faqs/?webstore_id=' + id);
    }
    validateCustomerEmail(data) {
        return this.http.post(BASE_URL + 'webstore/password/reset/email', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    resetPassword(data) {
        return this.http.put(BASE_URL + 'webstore/password/reset', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getHomeSectionItems(id) {
        return this.http.post(BASE_URL + 'webstore_sections/', { 'id': id });
    }
    login(data) {
        return this.http.post(BASE_URL + 'login/', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getCustomerDetail(id) {
        return this.http.post(BASE_URL + 'customer_detail/', { id: id }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getProductCategory(search) {
        return this.http.get(BASE_URL + 'category/' + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getProductSubCategory(search) {
        return this.http.get(BASE_URL + 'subcategory/' + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getProducts(search) {
        return this.http.get(BASE_URL + 'channel_products/' + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getProductDetail(id) {
        return this.http.get(BASE_URL + 'channel_products/' + id + "/").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getProductVideo(search) {
        return this.http.get(BASE_URL + 'product/video/' + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getPartnerDetails(id) {
        return this.http.get(BASE_URL + 'partner/' + id + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getPartners(search) {
        return this.http.get(BASE_URL + 'partner/' + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getChannels(search) {
        return this.http.get(BASE_URL + 'channels/' + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getChannelsDetails(id) {
        return this.http.get(BASE_URL + 'product/channels/' + id + '/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getCollections(search) {
        return this.http.get(BASE_URL + 'collections/' + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    addCustomerLocation(data) {
        return this.http.post(BASE_URL + 'customer/location/', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    contactUs(data) {
        return this.http.post(BASE_URL + 'contact-us/', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getTopSellers() {
        return this.http.get(BASE_URL + 'channels/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getTopProducts() {
        return this.http.get(BASE_URL + 'channel_products/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getProductPricing(search) {
        return this.http.get(BASE_URL + 'product/pricing/' + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getVariations(search) {
        return this.http.get(BASE_URL + 'variations/' + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    calculateCartCosts(data) {
        return this.http.post(BASE_URL + 'cart-calculation/', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    createNewOrder(data) {
        return this.http.post(BASE_URL + 'orders/', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getOrderInfo(data) {
        return this.http.post(BASE_URL + 'order_details/', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getOrders(data) {
        return this.http.post(BASE_URL + 'customers_order/', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    addOrderShippingDetails(data) {
        return this.http.post(BASE_URL + 'order-shipping-detail/', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    addOrderPaymentMethod(data) {
        return this.http.post(BASE_URL + 'order_payment/', data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getPaymentMethods() {
        return this.http.get(BASE_URL + 'payment_methods/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getCreditCardTypes() {
        return this.http.get(BASE_URL + 'payment_methods/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    getTemplateLocation() {
        return this.http.get(BASE_URL + 'template-location').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpBackend"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "JssX":
/*!***********************************************!*\
  !*** ./src/app/services/biz-info-resolver.ts ***!
  \***********************************************/
/*! exports provided: BizInfoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizInfoResolver", function() { return BizInfoResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ "H+bZ");
/* harmony import */ var _biz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./biz.service */ "Epua");



class BizInfoResolver {
    constructor(apiService, bizService) {
        this.apiService = apiService;
        this.bizService = bizService;
    }
    resolve(route) {
        // if(this.bizService.get_company_id()==null){
        return this.apiService.getBizInfo(route.params.biz_id);
        // }else{
        //    return true
        // }
    }
}
BizInfoResolver.ɵfac = function BizInfoResolver_Factory(t) { return new (t || BizInfoResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_biz_service__WEBPACK_IMPORTED_MODULE_2__["BizService"])); };
BizInfoResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BizInfoResolver, factory: BizInfoResolver.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "M4rG":
/*!*****************************************!*\
  !*** ./src/app/services/interceptor.ts ***!
  \*****************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-info.service */ "lg7r");
/* harmony import */ var _biz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./biz.service */ "Epua");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class TokenInterceptor {
    constructor(userInfoService, bizService, router) {
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.router = router;
    }
    intercept(request, next) {
        const user_info = this.userInfoService.getUserInfo();
        var token = user_info.token;
        // if (token) {
        //     request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        // }
        if (request.url.toString().indexOf("/api/order_payment") > -1
            || request.url.toString().indexOf("/api/order-shipping-detail") > -1
            || request.url.toString().indexOf("/api/customer/location") > -1
            || request.url.toString().indexOf("/api/customers_order/") > -1
            || request.url.toString().indexOf("/api/customer_detail") > -1
            || request.url.toString().indexOf("/api/orders") > -1) {
            if (token) {
                request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
            }
            else {
                this.router.navigateByUrl("/" + this.bizService.getBizId() + "/login");
            }
        }
        else if (this.bizService.get_company()) {
            request = request.clone({ headers: request.headers.set('Authorization', this.bizService.get_company()) });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
            }
            return event;
        }));
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_biz_service__WEBPACK_IMPORTED_MODULE_4__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_biz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/biz.service */ "Epua");
/* harmony import */ var angular_favicon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-favicon */ "l7sf");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _dom_injector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom-injector.service */ "/+8M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor(bizService, ngxFavicon, titleService, metaService, domInjectorService) {
        this.bizService = bizService;
        this.ngxFavicon = ngxFavicon;
        this.titleService = titleService;
        this.metaService = metaService;
        this.domInjectorService = domInjectorService;
        this.title = 'ecommerce';
    }
    ngOnInit() {
        this.titleService.setTitle(this.bizService.get_meta_title());
        this.metaService.addTags([
            { name: 'keywords', content: 'your keywords content' },
            { name: 'description', content: this.bizService.get_meta_description() },
        ]);
        this.ngxFavicon.setFavicon(this.bizService.get_favicon_image());
        // this.ngxFavicon.setFavicon("https://static.vecteezy.com/system/resources/thumbnails/003/171/355/small/objective-lens-icon-with-six-rainbow-colors-vector.jpg");
        this.domInjectorService.injectApiKey();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_biz_service__WEBPACK_IMPORTED_MODULE_1__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_favicon__WEBPACK_IMPORTED_MODULE_2__["AngularFaviconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dom_injector_service__WEBPACK_IMPORTED_MODULE_4__["DomInjectorService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[2, "min-height", "100vh"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"sofia\" !important;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40px;\n  overflow-y: auto;\n  display: flex;\n  align-items: center;\n  color: white;\n  font-weight: 600;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n@media (max-width: 991.98px) {\n  .toolbar[_ngcontent-%COMP%] {\n    height: 0px;\n  }\n}\n\n@media (min-width: 991.98px) {\n  .toolbar[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .promotion-text[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    font-size: medium;\n    text-decoration: none;\n    color: white;\n  }\n\n  .promotion-text-right[_ngcontent-%COMP%] {\n    padding-right: 40px;\n    font-size: medium;\n    text-decoration: none;\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLCtCQUFBO0FBQUY7O0FBR0E7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJRTtFQUNFLFlBQUE7QUFESjs7QUFLRTtFQUNFLE9BQUE7QUFGSjs7QUFNRTtFQUNFO0lBQ0ksV0FBQTtFQUhOO0FBQ0Y7O0FBT0E7RUFDRTtJQUNNLGtCQUFBO0VBTE47O0VBU0U7SUFDRSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0VBTko7O0VBUUU7SUFDRSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0VBTEo7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbip7XG4gIGZvbnQtZmFtaWx5OiAnc29maWEnICFpbXBvcnRhbnQ7XG59XG5cbi50b29sYmFyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuXG4gIC5jb250ZW50IHtcbiAgICBwYWRkaW5nOjBweDtcbiAgfVxuXG5cbiAgLnNwYWNlciB7XG4gICAgZmxleDogMTtcbiAgfVxuXG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7IFxuICAgIC50b29sYmFye1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICB9XG5cbiBcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCkgeyBcbiAgLnRvb2xiYXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICB9XG4gICAgXG4gICAgLnByb21vdGlvbi10ZXh0e1xuICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIC5wcm9tb3Rpb24tdGV4dC1yaWdodHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAgd2hpdGU7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_routing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.component */ "eFdM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/interceptor */ "M4rG");
/* harmony import */ var _services_biz_info_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/biz-info-resolver */ "JssX");
/* harmony import */ var _services_login_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/login-modal.service */ "5D85");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        _services_biz_info_resolver__WEBPACK_IMPORTED_MODULE_7__["BizInfoResolver"],
        _services_login_modal_service__WEBPACK_IMPORTED_MODULE_8__["LoginModalService"],
        primeng_api__WEBPACK_IMPORTED_MODULE_11__["MessageService"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_12__["DialogService"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_13__["ToastModule"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _services_interceptor__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_routing_component__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]] }); })();


/***/ }),

/***/ "eFdM":
/*!*******************************************!*\
  !*** ./src/app/home-routing.component.ts ***!
  \*******************************************/
/*! exports provided: HomeRoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingComponent", function() { return HomeRoutingComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/biz.service */ "Epua");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");
/* harmony import */ var _services_user_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user-info.service */ "lg7r");
/* harmony import */ var _services_login_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/login-modal.service */ "5D85");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function (a0) { return { "color": a0 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
class HomeRoutingComponent {
    constructor(formBuilder, route, bizService, apiService, userInfoService, renderer, loginModalService, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.bizService = bizService;
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.renderer = renderer;
        this.loginModalService = loginModalService;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
        this.bizService.setBizId(this.route.snapshot.params.biz_id);
        this.route.data.subscribe(res => {
            console.log(res);
            this.bizService.setBizDetail(res.bizInfo[0]);
        });
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            webstore: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.loginModalService.loginModalEmitter.subscribe(res => {
            console.log("emitted", res);
            if (res == "open") {
                this.openModal();
            }
            else if (res == "close") {
                this.closeModal();
            }
            else {
            }
        });
    }
    openModal() {
        const modalElement = document.getElementById('loginModal');
        if (modalElement) {
            this.renderer.addClass(modalElement, 'show');
            // Show the modal
            document.body.style.overflow = 'hidden'; // Prevent body scrolling
            this.renderer.addClass(document.body, 'modal-open');
        }
        const backPropElement = document.getElementById('backprop');
        if (backPropElement) {
            this.renderer.addClass(backPropElement, 'modal-backprop-show');
            this.renderer.removeClass(backPropElement, 'fade');
            // Show the modal
            document.body.style.overflow = 'hidden'; // Prevent body scrolling
        }
    }
    closeModalClicked(event) {
        const clickedElement = event.target;
        if (clickedElement.classList.contains('modal')) {
            this.closeModal();
        }
    }
    modalContentClicked(event) {
        event.stopPropagation();
    }
    closeModal() {
        console.log("close");
        const modalElement = document.getElementById('loginModal');
        if (modalElement) {
            this.renderer.removeClass(modalElement, 'show'); // Hide the modal
            document.body.style.overflow = ''; // Restore body scrolling
            this.renderer.removeClass(document.body, 'modal-open');
        }
        const backPropElement = document.getElementById('backprop');
        if (backPropElement) {
            this.renderer.removeClass(backPropElement, 'modal-backprop-show');
            this.renderer.addClass(backPropElement, 'fade');
            // Show the modal
            document.body.style.overflow = ''; // Prevent body scrolling
        }
    }
    forgotPassword() {
        this.router.navigateByUrl("/" + this.bizService.getBizName() + "/resetpassword/1");
        this.closeModal();
    }
    submitLogin() {
        this.loginForm.get('webstore').setValue(this.bizService.get_company_id());
        this.submitted = true;
        this.apiService.login(this.loginForm.value).subscribe(res => {
            this.submitted = false;
            if (res.token) {
                this.userInfoService.saveUserInfo(res);
                this.closeModal();
            }
        }, err => {
            this.submitted = false;
        });
    }
}
HomeRoutingComponent.ɵfac = function HomeRoutingComponent_Factory(t) { return new (t || HomeRoutingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_login_modal_service__WEBPACK_IMPORTED_MODULE_6__["LoginModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeRoutingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeRoutingComponent, selectors: [["app-root"]], decls: 39, vars: 16, consts: [["id", "loginModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade", 3, "click"], ["role", "document", 1, "modal-dialog"], [1, "modal-content", 3, "click"], [1, "modal-body"], [2, "padding", "0px"], [1, "row", 2, "justify-content", "center", "margin-top", "30px !important"], [2, "max-width", "500px"], [1, "card", 2, "width", "100%", "border", "none"], ["href", "javascript:void(0);", 1, "logo", 2, "text-align", "center"], ["height", "60px", 3, "src"], [1, "card-body"], [3, "formGroup"], [1, "row", 2, "margin-top", "20px"], [1, "form-group"], ["formControlName", "email", "type", "email", "placeholder", "Email Address", 1, "round-input"], ["formControlName", "password", "type", "password", "placeholder", "Enter your password", 1, "round-input"], [1, "row", 2, "margin-top", "20px", "display", "block"], [2, "cursor", "pointer"], [1, "fa-regular", "fa-circle", 3, "ngStyle"], [2, "padding-left", "10px"], [2, "float", "right", "width", "fit-content", "cursor", "pointer", 3, "ngStyle", "click"], [1, "row", 2, "margin-top", "30px", "padding-left", "10px", "padding-right", "10px"], [1, "btn", "login-button", 3, "ngStyle", "click"], [2, "float", "right", "width", "fit-content", 3, "ngStyle"], ["id", "backprop", 1, "modal-backdrop", "fade"]], template: function HomeRoutingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeRoutingComponent_Template_div_click_1_listener($event) { return ctx.closeModalClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeRoutingComponent_Template_div_click_3_listener($event) { return ctx.modalContentClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeRoutingComponent_Template_span_click_28_listener() { return ctx.forgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeRoutingComponent_Template_button_click_31_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Don't have an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Request to Become a Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 24);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.bizService.get_company_logo(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.submitted ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c1, ctx.bizService.get_background_color()) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.bizService.get_background_color()));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"]], styles: [".show[_ngcontent-%COMP%]{\n    display:block;\n    display: flex !important;\n    align-items: center;\n    justify-content: center;\n  }\n  .modal[_ngcontent-%COMP%]{\n    z-index:1072;\n    \n    \n  }\n  .form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%]{\n        border-radius: 10px !important;\n        height: 50px;\n        padding-left: 20px;\n        border: 1px solid grey;\n    \n  }\n  \n  .form-group[_ngcontent-%COMP%]{\n    display: grid;\n  }\n  \n  .login-button[_ngcontent-%COMP%]{\n      width:100%;\n      height: 50px;\n      background: #f68b1e;\n      border-color: grey !important;\n      color: #fff;\n      font-size: large;\n      padding: auto;\n      font-weight: 500;\n      border-radius: 10px;\n  \n  \n  }\n  label[_ngcontent-%COMP%]{\n    font-weight: 600;\n  }\n\n\n  .modal-backdrop[_ngcontent-%COMP%] {\n    z-index: 1071;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    display:none;\n    height: 100vh;\n    background-color: #000;\n  }\n  .fade[_ngcontent-%COMP%] {\n    transition: opacity .15s linear;\n  }\n  .modal-backprop-show[_ngcontent-%COMP%]{\n    opacity: .5;\n    display:block;\n  }\n  .modal-backdrop.fade[_ngcontent-%COMP%] {\n    opacity: 0;\n  }"] });


/***/ }),

/***/ "lg7r":
/*!***********************************************!*\
  !*** ./src/app/services/user-info.service.ts ***!
  \***********************************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserInfoService {
    constructor() { }
    signOut() {
        sessionStorage.removeItem("user_info");
    }
    saveUserInfo(user) {
        sessionStorage.setItem("user_info", JSON.stringify(user));
    }
    getUserId() {
        const user = sessionStorage.getItem("user_info");
        if (user) {
            var info = JSON.parse(user);
            return info.id;
        }
    }
    getCustomerId() {
        const user = sessionStorage.getItem("user_info");
        if (user) {
            var info = JSON.parse(user);
            return info.customer;
        }
    }
    getUserInfo() {
        const user = sessionStorage.getItem("user_info");
        if (user) {
            return JSON.parse(user);
        }
        return { name: "", email: "" };
    }
    isLoggedIn() {
        const user = sessionStorage.getItem("user_info");
        if (user) {
            var user_data = JSON.parse(user);
            if (user_data["token"]) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }
    addItemCart(item) {
        const cart = sessionStorage.getItem("cart");
        if (cart) {
            let items = JSON.parse(cart);
            items.push(item);
            sessionStorage.setItem("cart", JSON.stringify(items));
        }
        else {
            let items = [];
            items.push(item);
            sessionStorage.setItem("cart", JSON.stringify(items));
        }
    }
    getCartItems() {
        const cart = sessionStorage.getItem("cart");
        if (cart) {
            return JSON.parse(cart);
        }
        else {
            return [];
        }
    }
    clearCartItems() {
        sessionStorage.setItem("cart", "[]");
    }
    updateItemCart(item) {
        const cart = sessionStorage.getItem("cart");
        if (cart) {
            let temp = JSON.parse(cart);
            var items = [];
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].id == item.id) {
                    items.push(item);
                }
                else {
                    items.push(temp[i]);
                }
            }
            sessionStorage.setItem("cart", JSON.stringify(items));
        }
        else {
            let items = [];
            items.push(item);
            sessionStorage.setItem("cart", JSON.stringify(items));
        }
    }
    isItemInCart(item) {
        const cart = sessionStorage.getItem("cart");
        if (cart) {
            let items = JSON.parse(cart);
            for (var i = 0; i < items.length; i++) {
                if (items[i].id == item.id) {
                    return true;
                }
            }
            return false;
        }
        else {
            return false;
        }
    }
    removeItemCart(item) {
        const cart = sessionStorage.getItem("cart");
        if (cart) {
            let temp = JSON.parse(cart);
            var items = [];
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].id == item.id) {
                }
                else {
                    items.push(temp[i]);
                }
            }
            sessionStorage.setItem("cart", JSON.stringify(items));
        }
        else {
            let items = [];
            sessionStorage.setItem("cart", JSON.stringify(items));
        }
    }
}
UserInfoService.ɵfac = function UserInfoService_Factory(t) { return new (t || UserInfoService)(); };
UserInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserInfoService, factory: UserInfoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_routing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.component */ "eFdM");
/* harmony import */ var _services_biz_info_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/biz-info-resolver */ "JssX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: ':biz_id',
        component: _home_routing_component__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingComponent"],
        data: {
            title: ''
        },
        resolve: {
            bizInfo: _services_biz_info_resolver__WEBPACK_IMPORTED_MODULE_2__["BizInfoResolver"]
        },
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | home-module */ "home-module").then(__webpack_require__.bind(null, /*! ./home.module */ "nDZ3")).then(m => m.HomeModule),
                data: { preload: true }
            }
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map