(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-module"],{

/***/ "1zey":
/*!********************************************************************!*\
  !*** ./src/app/views/customer-footer/customer-footer.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerFooterComponent", function() { return CustomerFooterComponent; });
/* harmony import */ var _contact_us_modal_contact_us_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contact-us-modal/contact-us-modal.component */ "Kxzt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function CustomerFooterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerFooterComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const cat_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.changeCategory(cat_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r2.name);
} }
function CustomerFooterComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerFooterComponent_div_8_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Log In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerFooterComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomerFooterComponent_div_8_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Log Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerFooterComponent_div_8_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerFooterComponent_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerFooterComponent_div_8_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Order History");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CustomerFooterComponent_div_8_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx_r10.bizService.getBizId(), "/my-orders");
} }
function CustomerFooterComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CustomerFooterComponent_div_8_div_3_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CustomerFooterComponent_div_8_div_4_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomerFooterComponent_div_8_div_5_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CustomerFooterComponent_div_8_div_6_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CustomerFooterComponent_div_8_div_7_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CustomerFooterComponent_div_8_div_8_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.type === ctx_r1.customer && !ctx_r1.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.userInfoService.isLoggedIn());
} }
class CustomerFooterComponent {
    constructor(router, bizService, apiService, userInfoService, dialogService) {
        this.router = router;
        this.bizService = bizService;
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.dialogService = dialogService;
        this.categories = [];
        this.customer = "customer";
        this.business = "business";
        this.catalog = "catalog";
    }
    ngOnInit() {
        this.apiService.getProductCategory('').subscribe(res => {
            if (res)
                this.categories = res.splice(0, 7);
        }, err => { });
        this.type = this.bizService.getBizType();
    }
    openContactUsModal() {
        const ref = this.dialogService.open(_contact_us_modal_contact_us_modal_component__WEBPACK_IMPORTED_MODULE_0__["ContactUsModalComponent"], {
            header: 'Contact Us',
            width: '410px',
            modal: true,
            closable: true,
        });
    }
    changeCategory(category) {
        this.router.navigateByUrl("/" + this.bizService.getBizName() + "/products/" + category);
    }
    logout() {
        this.userInfoService.signOut();
        this.router.navigateByUrl(this.bizService.getBizId());
    }
    login() {
        this.router.navigateByUrl(this.bizService.getBizId() + "/login");
    }
}
CustomerFooterComponent.ɵfac = function CustomerFooterComponent_Factory(t) { return new (t || CustomerFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_6__["DialogService"])); };
CustomerFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CustomerFooterComponent, selectors: [["app-customer-footer"]], decls: 54, vars: 7, consts: [[2, "display", "flex", "flex-direction", "column", "padding-left", "30px", "padding-right", "30px", "background-color", "#F5F5F5"], [2, "display", "flex", "padding-bottom", "20px", "padding-top", "20px"], [2, "flex", "1"], [2, "font-weight", "bold"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer"], ["style", "flex: 1;", 4, "ngIf"], [2, "cursor", "pointer", 3, "routerLink"], [2, "flex", "4", "display", "flex", "justify-content", "flex-end", "align-items", "flex-end"], [2, "margin-left", "10px", "cursor", "pointer"], ["width", "30", "height", "30", "viewBox", "0 0 30 30", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M20.7502 7.275C19.8957 6.29953 19.4248 5.04679 19.4252 3.75H15.5627V19.25C15.5329 20.0888 15.1788 20.8833 14.5749 21.4662C13.971 22.0491 13.1645 22.3749 12.3252 22.375C10.5502 22.375 9.0752 20.925 9.0752 19.125C9.0752 16.975 11.1502 15.3625 13.2877 16.025V12.075C8.9752 11.5 5.2002 14.85 5.2002 19.125C5.2002 23.2875 8.6502 26.25 12.3127 26.25C16.2377 26.25 19.4252 23.0625 19.4252 19.125V11.2625C20.9914 12.3873 22.8719 12.9908 24.8002 12.9875V9.125C24.8002 9.125 22.4502 9.2375 20.7502 7.275Z", "fill", "black"], ["d", "M17.2437 13.1663L25.85 2.5H22.0088L15.44 10.6462L9.6125 2.5H1.25L11.0075 16.1375L1.8375 27.5H5.68L12.8112 18.6625L19.1375 27.5H27.5L17.2437 13.1663ZM14.2688 16.8538L12.4625 14.33L5.45 4.53375H8.3375L13.9975 12.43L15.8012 14.955L23.3237 25.4662H20.4363L14.2688 16.8538Z", "fill", "black"], ["d", "M17.5 16.875H20.625L21.875 11.875H17.5V9.375C17.5 8.0875 17.5 6.875 20 6.875H21.875V2.675C21.4675 2.62125 19.9287 2.5 18.3037 2.5C14.91 2.5 12.5 4.57125 12.5 8.375V11.875H8.75V16.875H12.5V27.5H17.5V16.875Z", "fill", "black"], ["d", "M15.0013 11.25C14.0067 11.25 13.0529 11.6451 12.3496 12.3483C11.6463 13.0516 11.2513 14.0054 11.2513 15C11.2513 15.9946 11.6463 16.9484 12.3496 17.6517C13.0529 18.3549 14.0067 18.75 15.0013 18.75C15.9958 18.75 16.9496 18.3549 17.6529 17.6517C18.3562 16.9484 18.7513 15.9946 18.7513 15C18.7513 14.0054 18.3562 13.0516 17.6529 12.3483C16.9496 11.6451 15.9958 11.25 15.0013 11.25ZM15.0013 8.75C16.6589 8.75 18.2486 9.40848 19.4207 10.5806C20.5928 11.7527 21.2512 13.3424 21.2512 15C21.2512 16.6576 20.5928 18.2473 19.4207 19.4194C18.2486 20.5915 16.6589 21.25 15.0013 21.25C13.3436 21.25 11.7539 20.5915 10.5818 19.4194C9.40973 18.2473 8.75125 16.6576 8.75125 15C8.75125 13.3424 9.40973 11.7527 10.5818 10.5806C11.7539 9.40848 13.3436 8.75 15.0013 8.75ZM23.1262 8.4375C23.1262 8.8519 22.9616 9.24933 22.6686 9.54235C22.3756 9.83538 21.9781 10 21.5637 10C21.1493 10 20.7519 9.83538 20.4589 9.54235C20.1659 9.24933 20.0012 8.8519 20.0012 8.4375C20.0012 8.0231 20.1659 7.62567 20.4589 7.33265C20.7519 7.03962 21.1493 6.875 21.5637 6.875C21.9781 6.875 22.3756 7.03962 22.6686 7.33265C22.9616 7.62567 23.1262 8.0231 23.1262 8.4375ZM15.0013 5C11.9088 5 11.4038 5.00875 9.965 5.0725C8.985 5.11875 8.3275 5.25 7.7175 5.4875C7.20702 5.67492 6.74552 5.97533 6.3675 6.36625C5.97626 6.74425 5.67544 7.20573 5.4875 7.71625C5.25 8.32875 5.11875 8.985 5.07375 9.96375C5.00875 11.3438 5 11.8263 5 15C5 18.0938 5.00875 18.5975 5.0725 20.0362C5.11875 21.015 5.25 21.6737 5.48625 22.2825C5.69875 22.8263 5.94875 23.2175 6.36375 23.6325C6.785 24.0525 7.17625 24.3037 7.71375 24.5112C8.33125 24.75 8.98875 24.8825 9.96375 24.9275C11.3438 24.9925 11.8263 25 15 25C18.0938 25 18.5975 24.9912 20.0362 24.9275C21.0138 24.8812 21.6712 24.75 22.2825 24.5138C22.7925 24.3254 23.2538 24.0251 23.6325 23.635C24.0538 23.215 24.305 22.8237 24.5125 22.285C24.75 21.67 24.8825 21.0125 24.9275 20.035C24.9925 18.6562 25 18.1725 25 15C25 11.9075 24.9912 11.4025 24.9275 9.96375C24.8812 8.98625 24.7488 8.32625 24.5125 7.71625C24.3241 7.20627 24.0238 6.74498 23.6337 6.36625C23.2559 5.97481 22.7944 5.67396 22.2837 5.48625C21.6712 5.24875 21.0138 5.1175 20.0362 5.0725C18.6575 5.0075 18.175 5 15 5M15 2.5C18.3962 2.5 18.82 2.5125 20.1537 2.575C21.4837 2.6375 22.3912 2.84625 23.1875 3.15625C24.0125 3.47375 24.7075 3.90375 25.4025 4.5975C26.0381 5.22237 26.5299 5.97824 26.8438 6.8125C27.1525 7.60875 27.3625 8.51625 27.425 9.8475C27.4838 11.18 27.5 11.6038 27.5 15C27.5 18.3962 27.4875 18.82 27.425 20.1525C27.3625 21.4837 27.1525 22.39 26.8438 23.1875C26.5308 24.0222 26.0389 24.7782 25.4025 25.4025C24.7775 26.0379 24.0216 26.5297 23.1875 26.8438C22.3912 27.1525 21.4837 27.3625 20.1537 27.425C18.82 27.4838 18.3962 27.5 15 27.5C11.6038 27.5 11.18 27.4875 9.84625 27.425C8.51625 27.3625 7.61 27.1525 6.8125 26.8438C5.97791 26.5306 5.22191 26.0387 4.5975 25.4025C3.96179 24.7777 3.46995 24.0218 3.15625 23.1875C2.84625 22.3912 2.6375 21.4837 2.575 20.1525C2.515 18.82 2.5 18.3962 2.5 15C2.5 11.6038 2.5125 11.18 2.575 9.8475C2.6375 8.51625 2.84625 7.61 3.15625 6.8125C3.46905 5.97772 3.961 5.22165 4.5975 4.5975C5.22209 3.96154 5.97804 3.46966 6.8125 3.15625C7.60875 2.84625 8.515 2.6375 9.84625 2.575C11.1812 2.51625 11.605 2.5 15.0013 2.5", "fill", "black"], ["width", "23", "height", "30", "viewBox", "0 0 23 30", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_11873_529)"], ["d", "M11.9531 0.382812C5.94141 0.382812 0 4.39063 0 10.877C0 15.002 2.32031 17.3457 3.72656 17.3457C4.30664 17.3457 4.64062 15.7285 4.64062 15.2715C4.64062 14.7266 3.25195 13.5664 3.25195 11.2988C3.25195 6.58789 6.83789 3.24805 11.4785 3.24805C15.4688 3.24805 18.4219 5.51562 18.4219 9.68164C18.4219 12.793 17.1738 18.6289 13.1309 18.6289C11.6719 18.6289 10.4238 17.5742 10.4238 16.0625C10.4238 13.8477 11.9707 11.7031 11.9707 9.41797C11.9707 5.53906 6.46875 6.24219 6.46875 10.9297C6.46875 11.9141 6.5918 13.0039 7.03125 13.9004C6.22266 17.3809 4.57031 22.5664 4.57031 26.1523C4.57031 27.2598 4.72852 28.3496 4.83398 29.457C5.0332 29.6797 4.93359 29.6562 5.23828 29.5449C8.19141 25.502 8.08594 24.7109 9.42188 19.4199C10.1426 20.791 12.0059 21.5293 13.4824 21.5293C19.7051 21.5293 22.5 15.4648 22.5 9.99805C22.5 4.17969 17.4727 0.382812 11.9531 0.382812Z", "fill", "black"], ["id", "clip0_11873_529"], ["width", "22.5", "height", "30", "fill", "white"], [2, "display", "flex", "justify-content", "space-between", "padding-bottom", "20px", "border-top", "#C1C7D6 1px solid", "padding-top", "15px"], [2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", 3, "click", 4, "ngIf"], ["style", "cursor: pointer;", 4, "ngIf"], ["style", "cursor: pointer;", 3, "routerLink", 4, "ngIf"]], template: function CustomerFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CustomerFooterComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "& More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CustomerFooterComponent_div_8_Template, 9, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Returns");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Warranty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Shipping Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "clipPath", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "rect", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Terms of Use | Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.type !== ctx.catalog);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizId(), "/about");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizId(), "/faqs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizId(), "/contact-us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bizService.getBizName());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizId(), "/policies");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "2art":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-galleria.js ***!
  \************************************************************************/
/*! exports provided: Galleria, GalleriaContent, GalleriaItem, GalleriaItemSlot, GalleriaModule, GalleriaThumbnails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Galleria", function() { return Galleria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaContent", function() { return GalleriaContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaItem", function() { return GalleriaItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaItemSlot", function() { return GalleriaItemSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaModule", function() { return GalleriaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleriaThumbnails", function() { return GalleriaThumbnails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/utils */ "t2ka");
/* harmony import */ var primeng_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dom */ "YyRF");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");











const _c0 = ["mask"];
const _c1 = function (a1) { return { "p-galleria-mask p-component-overlay": true, "p-galleria-visible": a1 }; };
const _c2 = function (a0) { return { "zIndex": a0 }; };
function Galleria_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p-galleriaContent", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("maskHide", function Galleria_div_0_div_1_Template_p_galleriaContent_maskHide_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.onMaskHide(); })("activeItemChange", function Galleria_div_0_div_1_Template_p_galleriaContent_activeItemChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onActiveItemChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.maskClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r3.visible))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r3.zIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("ngStyle", ctx_r3.containerStyle);
} }
function Galleria_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Galleria_div_0_div_1_Template, 3, 11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.visible);
} }
function Galleria_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaContent", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onActiveItemChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex);
} }
function GalleriaContent_div_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.maskHide.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GalleriaContent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r2.galleria.templates);
} }
function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p-galleriaThumbnails", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onActiveIndexChange($event); })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.stopSlideShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("containerId", ctx_r3.id)("value", ctx_r3.value)("activeIndex", ctx_r3.activeIndex)("templates", ctx_r3.galleria.templates)("numVisible", ctx_r3.galleria.numVisible)("responsiveOptions", ctx_r3.galleria.responsiveOptions)("circular", ctx_r3.galleria.circular)("isVertical", ctx_r3.isVertical())("contentHeight", ctx_r3.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r3.galleria.showThumbnailNavigators)("slideShowActive", ctx_r3.slideShowActive);
} }
function GalleriaContent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("templates", ctx_r4.galleria.templates);
} }
const _c3 = function (a1, a2, a3) { return { "p-galleria p-component": true, "p-galleria-fullscreen": a1, "p-galleria-indicator-onitem": a2, "p-galleria-item-nav-onhover": a3 }; };
const _c4 = function () { return {}; };
function GalleriaContent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaContent_div_0_button_1_Template, 2, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaContent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p-galleriaItem", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onActiveIndexChange($event); })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.startSlideShow(); })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.stopSlideShow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaContent_div_0_div_6_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.galleriaClass());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](20, _c3, ctx_r0.galleria.fullScreen, ctx_r0.galleria.showIndicatorsOnItem, ctx_r0.galleria.showItemNavigatorsOnHover && !ctx_r0.galleria.fullScreen))("ngStyle", !ctx_r0.galleria.fullScreen ? ctx_r0.galleria.containerStyle : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.fullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.headerFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.value)("activeIndex", ctx_r0.activeIndex)("circular", ctx_r0.galleria.circular)("templates", ctx_r0.galleria.templates)("showIndicators", ctx_r0.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r0.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r0.galleria.indicatorFacet)("captionFacet", ctx_r0.galleria.captionFacet)("showItemNavigators", ctx_r0.galleria.showItemNavigators)("autoPlay", ctx_r0.galleria.autoPlay)("slideShowActive", ctx_r0.slideShowActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.showThumbnails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.galleria.templates && ctx_r0.galleria.footerFacet);
} }
function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function GalleriaItemSlot_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
} }
const _c5 = function (a1) { return { "p-galleria-item-prev p-galleria-item-nav p-link": true, "p-disabled": a1 }; };
function GalleriaItem_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.navBackward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c5, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
} }
const _c6 = function (a1) { return { "p-galleria-item-next p-galleria-item-nav p-link": true, "p-disabled": a1 }; };
function GalleriaItem_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.navForward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx_r1.isNavForwardDisabled()))("disabled", ctx_r1.isNavForwardDisabled());
} }
function GalleriaItem_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p-galleriaItemSlot", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r2.activeItem)("templates", ctx_r2.templates);
} }
function GalleriaItem_ul_6_li_1_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 16);
} }
const _c7 = function (a1) { return { "p-galleria-indicator": true, "p-highlight": a1 }; };
function GalleriaItem_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaItem_ul_6_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const index_r10 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onIndicatorClick(index_r10); })("mouseenter", function GalleriaItem_ul_6_li_1_Template_li_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const index_r10 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.onIndicatorMouseEnter(index_r10); })("keydown.enter", function GalleriaItem_ul_6_li_1_Template_li_keydown_enter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const index_r10 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.onIndicatorKeyDown(index_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_6_li_1_button_1_Template, 1, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, ctx_r8.isIndicatorItemActive(index_r10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r8.indicatorFacet);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", index_r10)("templates", ctx_r8.templates);
} }
function GalleriaItem_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GalleriaItem_ul_6_li_1_Template, 3, 6, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.value);
} }
const _c8 = ["itemsContainer"];
const _c9 = function (a1) { return { "p-galleria-thumbnail-prev p-link": true, "p-disabled": a1 }; };
const _c10 = function (a1, a2) { return { "p-galleria-thumbnail-prev-icon pi": true, "pi-chevron-left": a1, "pi-chevron-up": a2 }; };
function GalleriaThumbnails_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.navBackward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c9, ctx_r0.isNavBackwardDisabled()))("disabled", ctx_r0.isNavBackwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c10, !ctx_r0.isVertical, ctx_r0.isVertical));
} }
const _c11 = function (a1, a2, a3, a4) { return { "p-galleria-thumbnail-item": true, "p-galleria-thumbnail-item-current": a1, "p-galleria-thumbnail-item-active": a2, "p-galleria-thumbnail-item-start": a3, "p-galleria-thumbnail-item-end": a4 }; };
function GalleriaThumbnails_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const index_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onItemClick(index_r7); })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const index_r7 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onItemClick(index_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p-galleriaItemSlot", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](4, _c11, ctx_r2.activeIndex === index_r7, ctx_r2.isItemActive(index_r7), ctx_r2.firstItemAciveIndex() === index_r7, ctx_r2.lastItemActiveIndex() === index_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx_r2.getTabIndex(index_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r6)("templates", ctx_r2.templates);
} }
const _c12 = function (a1) { return { "p-galleria-thumbnail-next p-link": true, "p-disabled": a1 }; };
const _c13 = function (a1, a2) { return { "p-galleria-thumbnail-next-icon pi": true, "pi-chevron-right": a1, "pi-chevron-down": a2 }; };
function GalleriaThumbnails_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.navForward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c12, ctx_r3.isNavForwardDisabled()))("disabled", ctx_r3.isNavForwardDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c13, !ctx_r3.isVertical, ctx_r3.isVertical));
} }
const _c14 = function (a0) { return { "height": a0 }; };
class Galleria {
    constructor(element, cd) {
        this.element = element;
        this.cd = cd;
        this.fullScreen = false;
        this.numVisible = 3;
        this.showItemNavigators = false;
        this.showThumbnailNavigators = true;
        this.showItemNavigatorsOnHover = false;
        this.changeItemOnIndicatorHover = false;
        this.circular = false;
        this.autoPlay = false;
        this.transitionInterval = 4000;
        this.showThumbnails = true;
        this.thumbnailsPosition = "bottom";
        this.verticalThumbnailViewPortHeight = "300px";
        this.showIndicators = false;
        this.showIndicatorsOnItem = false;
        this.indicatorsPosition = "bottom";
        this.baseZIndex = 0;
        this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._visible = false;
        this._activeIndex = 0;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
    }
    get visible() {
        return this._visible;
    }
    ;
    set visible(visible) {
        this._visible = visible;
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerFacet = item.template;
                    break;
                case 'footer':
                    this.footerFacet = item.template;
                    break;
                case 'indicator':
                    this.indicatorFacet = item.template;
                    break;
                case 'caption':
                    this.captionFacet = item.template;
                    break;
            }
        });
    }
    ngOnChanges(simpleChanges) {
        if (this.fullScreen && simpleChanges.visible) {
            if (simpleChanges.visible.currentValue) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(document.body, 'p-overflow-hidden');
                this.zIndex = String(this.baseZIndex + ++primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].zindex);
            }
            else {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
            }
        }
    }
    onMaskHide() {
        this.visible = false;
        this.visibleChange.emit(false);
    }
    onActiveItemChange(index) {
        if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.activeIndexChange.emit(index);
        }
    }
    ngOnDestroy() {
        if (this.fullScreen) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(document.body, 'p-overflow-hidden');
        }
    }
}
Galleria.ɵfac = function Galleria_Factory(t) { return new (t || Galleria)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Galleria.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Galleria, selectors: [["p-galleria"]], contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    } }, viewQuery: function Galleria_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mask = _t.first);
    } }, inputs: { fullScreen: "fullScreen", numVisible: "numVisible", showItemNavigators: "showItemNavigators", showThumbnailNavigators: "showThumbnailNavigators", showItemNavigatorsOnHover: "showItemNavigatorsOnHover", changeItemOnIndicatorHover: "changeItemOnIndicatorHover", circular: "circular", autoPlay: "autoPlay", transitionInterval: "transitionInterval", showThumbnails: "showThumbnails", thumbnailsPosition: "thumbnailsPosition", verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight", showIndicators: "showIndicators", showIndicatorsOnItem: "showIndicatorsOnItem", indicatorsPosition: "indicatorsPosition", baseZIndex: "baseZIndex", activeIndex: "activeIndex", visible: "visible", id: "id", value: "value", responsiveOptions: "responsiveOptions", maskClass: "maskClass", containerClass: "containerClass", containerStyle: "containerStyle" }, outputs: { activeIndexChange: "activeIndexChange", visibleChange: "visibleChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["windowed", ""], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["mask", ""], [3, "value", "activeIndex", "ngStyle", "maskHide", "activeItemChange"], [3, "value", "activeIndex", "activeItemChange"]], template: function Galleria_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Galleria_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Galleria_ng_template_1_Template, 1, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fullScreen)("ngIfElse", _r1);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], GalleriaContent]; }, styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:flex;height:100%;position:relative}.p-galleria-item-nav{align-items:center;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-grid-row-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{align-items:center;display:flex;justify-content:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{align-items:center;cursor:pointer;display:flex;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{align-items:center;display:flex;justify-content:center}.p-galleria-indicator>button{align-items:center;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:flex;position:absolute;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:transparent;height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{align-items:center;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"], encapsulation: 2, changeDetection: 0 });
Galleria.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
Galleria.propDecorators = {
    activeIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fullScreen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    responsiveOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showItemNavigators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showThumbnailNavigators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showItemNavigatorsOnHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    changeItemOnIndicatorHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    circular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    transitionInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showThumbnails: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    thumbnailsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    verticalThumbnailViewPortHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicatorsOnItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorsPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    baseZIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maskClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    containerStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    mask: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['mask', { static: false },] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    visibleChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Galleria, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-galleria',
                template: `
        <div *ngIf="fullScreen;else windowed">
            <div *ngIf="visible" #mask [ngClass]="{'p-galleria-mask p-component-overlay':true, 'p-galleria-visible': this.visible}" [class]="maskClass" [ngStyle]="{'zIndex':zIndex}">
                <p-galleriaContent [value]="value" [activeIndex]="activeIndex" (maskHide)="onMaskHide()" (activeItemChange)="onActiveItemChange($event)" [ngStyle]="containerStyle"></p-galleriaContent>
            </div>
        </div>

        <ng-template #windowed>
            <p-galleriaContent [value]="value" [activeIndex]="activeIndex" (activeItemChange)="onActiveItemChange($event)"></p-galleriaContent>
        </ng-template>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".p-galleria-content,.p-galleria-item-wrapper{display:flex;flex-direction:column}.p-galleria-item-wrapper{position:relative}.p-galleria-item-container{display:flex;height:100%;position:relative}.p-galleria-item-nav{align-items:center;display:inline-flex;justify-content:center;margin-top:-.5rem;overflow:hidden;position:absolute;top:50%}.p-galleria-item-prev{border-bottom-left-radius:0;border-top-left-radius:0;left:0}.p-galleria-item-next{border-bottom-right-radius:0;border-top-right-radius:0;right:0}.p-galleria-item{align-items:center;display:flex;height:100%;justify-content:center;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{opacity:0;pointer-events:none;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{opacity:1;pointer-events:all}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{bottom:0;left:0;position:absolute;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;flex-shrink:0;overflow:auto}.p-galleria-thumbnail-next,.p-galleria-thumbnail-prev{-ms-grid-row-align:center;align-self:center;flex:0 0 auto;overflow:hidden;position:relative}.p-galleria-thumbnail-next,.p-galleria-thumbnail-next span,.p-galleria-thumbnail-prev,.p-galleria-thumbnail-prev span{align-items:center;display:flex;justify-content:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{align-items:center;cursor:pointer;display:flex;justify-content:center;opacity:.5;overflow:auto}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{align-items:center;display:flex;justify-content:center}.p-galleria-indicator>button{align-items:center;display:inline-flex}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{align-items:center;flex-direction:row}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{display:flex;position:absolute;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{align-items:flex-start;left:0;top:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{align-items:flex-end;height:100%;right:0;top:0}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{align-items:flex-end;bottom:0;left:0;width:100%}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{align-items:flex-start;height:100%;left:0;top:0}.p-galleria-mask{background-color:transparent;height:100%;left:0;position:fixed;transition-property:background-color;width:100%}.p-galleria-close,.p-galleria-mask{align-items:center;display:flex;justify-content:center;top:0}.p-galleria-close{overflow:hidden;position:absolute;right:0}.p-galleria-mask .p-galleria-item-nav{margin-top:-.5rem;position:fixed;top:50%}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { fullScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showItemNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showThumbnailNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showItemNavigatorsOnHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeItemOnIndicatorHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], circular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transitionInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showThumbnails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbnailsPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], verticalThumbnailViewPortHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicatorsOnItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indicatorsPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], baseZIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], visibleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], responsiveOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maskClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], mask: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mask', { static: false }]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"]]
        }] }); })();
class GalleriaContent {
    constructor(galleria, cd) {
        this.galleria = galleria;
        this.cd = cd;
        this.value = [];
        this.maskHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = this.galleria.id || Object(primeng_utils__WEBPACK_IMPORTED_MODULE_3__["UniqueComponentId"])();
        this.slideShowActicve = false;
        this._activeIndex = 0;
        this.slideShowActive = true;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
    }
    galleriaClass() {
        const thumbnailsPosClass = this.galleria.showThumbnails && this.getPositionClass('p-galleria-thumbnails', this.galleria.thumbnailsPosition);
        const indicatorPosClass = this.galleria.showIndicators && this.getPositionClass('p-galleria-indicators', this.galleria.indicatorsPosition);
        return (this.galleria.containerClass ? this.galleria.containerClass + " " : '') + (thumbnailsPosClass ? thumbnailsPosClass + " " : '') + (indicatorPosClass ? indicatorPosClass + " " : '');
    }
    startSlideShow() {
        this.interval = setInterval(() => {
            let activeIndex = (this.galleria.circular && (this.value.length - 1) === this.activeIndex) ? 0 : (this.activeIndex + 1);
            this.onActiveIndexChange(activeIndex);
            this.activeIndex = activeIndex;
        }, this.galleria.transitionInterval);
        this.slideShowActive = true;
    }
    stopSlideShow() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.slideShowActive = false;
    }
    getPositionClass(preClassName, position) {
        const positions = ['top', 'left', 'bottom', 'right'];
        const pos = positions.find(item => item === position);
        return pos ? `${preClassName}-${pos}` : '';
    }
    isVertical() {
        return this.galleria.thumbnailsPosition === 'left' || this.galleria.thumbnailsPosition === 'right';
    }
    onActiveIndexChange(index) {
        if (this.activeIndex !== index) {
            this.activeIndex = index;
            this.activeItemChange.emit(this.activeIndex);
        }
    }
}
GalleriaContent.ɵfac = function GalleriaContent_Factory(t) { return new (t || GalleriaContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Galleria), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
GalleriaContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaContent, selectors: [["p-galleriaContent"]], inputs: { value: "value", activeIndex: "activeIndex" }, outputs: { maskHide: "maskHide", activeItemChange: "activeItemChange" }, decls: 1, vars: 1, consts: [[3, "ngClass", "ngStyle", "class", 4, "ngIf"], [3, "ngClass", "ngStyle"], ["type", "button", "class", "p-galleria-close p-link", "pRipple", "", 3, "click", 4, "ngIf"], ["class", "p-galleria-header", 4, "ngIf"], [1, "p-galleria-content"], [3, "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive", "onActiveIndexChange", "startSlideShow", "stopSlideShow"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["class", "p-galleria-footer", 4, "ngIf"], ["type", "button", "pRipple", "", 1, "p-galleria-close", "p-link", 3, "click"], [1, "p-galleria-close-icon", "pi", "pi-times"], [1, "p-galleria-header"], ["type", "header", 3, "templates"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow"], [1, "p-galleria-footer"], ["type", "footer", 3, "templates"]], template: function GalleriaContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaContent_div_0_Template, 7, 25, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value && ctx.value.length > 0);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], GalleriaItem, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], GalleriaItemSlot, GalleriaThumbnails]; }, encapsulation: 2, changeDetection: 0 });
GalleriaContent.ctorParameters = () => [
    { type: Galleria },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
GalleriaContent.propDecorators = {
    activeIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maskHide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activeItemChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-galleriaContent',
                template: `
        <div [attr.id]="id" *ngIf="value && value.length > 0" [ngClass]="{'p-galleria p-component': true, 'p-galleria-fullscreen': this.galleria.fullScreen, 
            'p-galleria-indicator-onitem': this.galleria.showIndicatorsOnItem, 'p-galleria-item-nav-onhover': this.galleria.showItemNavigatorsOnHover && !this.galleria.fullScreen}"
            [ngStyle]="!galleria.fullScreen ? galleria.containerStyle : {}" [class]="galleriaClass()">
            <button *ngIf="galleria.fullScreen" type="button" class="p-galleria-close p-link" (click)="maskHide.emit()" pRipple>
                <span class="p-galleria-close-icon pi pi-times"></span>
            </button>
            <div *ngIf="galleria.templates && galleria.headerFacet" class="p-galleria-header">
                <p-galleriaItemSlot type="header" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
            <div class="p-galleria-content">
                <p-galleriaItem [value]="value" [activeIndex]="activeIndex" [circular]="galleria.circular" [templates]="galleria.templates" (onActiveIndexChange)="onActiveIndexChange($event)" 
                    [showIndicators]="galleria.showIndicators" [changeItemOnIndicatorHover]="galleria.changeItemOnIndicatorHover" [indicatorFacet]="galleria.indicatorFacet"
                    [captionFacet]="galleria.captionFacet" [showItemNavigators]="galleria.showItemNavigators" [autoPlay]="galleria.autoPlay" [slideShowActive]="slideShowActive"
                    (startSlideShow)="startSlideShow()" (stopSlideShow)="stopSlideShow()"></p-galleriaItem>

                <p-galleriaThumbnails *ngIf="galleria.showThumbnails" [containerId]="id" [value]="value" (onActiveIndexChange)="onActiveIndexChange($event)" [activeIndex]="activeIndex" [templates]="galleria.templates"
                    [numVisible]="galleria.numVisible" [responsiveOptions]="galleria.responsiveOptions" [circular]="galleria.circular"
                    [isVertical]="isVertical()" [contentHeight]="galleria.verticalThumbnailViewPortHeight" [showThumbnailNavigators]="galleria.showThumbnailNavigators"
                    [slideShowActive]="slideShowActive" (stopSlideShow)="stopSlideShow()"></p-galleriaThumbnails>
            </div>
            <div *ngIf="galleria.templates && galleria.footerFacet" class="p-galleria-footer">
                <p-galleriaItemSlot type="footer" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
        </div>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: Galleria }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maskHide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeItemChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class GalleriaItemSlot {
    get item() {
        return this._item;
    }
    ;
    set item(item) {
        this._item = item;
        if (this.templates) {
            this.templates.forEach((item) => {
                if (item.getType() === this.type) {
                    switch (this.type) {
                        case 'item':
                        case 'caption':
                        case 'thumbnail':
                            this.context = { $implicit: this.item };
                            this.contentTemplate = item.template;
                            break;
                    }
                }
            });
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            if (item.getType() === this.type) {
                switch (this.type) {
                    case 'item':
                    case 'caption':
                    case 'thumbnail':
                        this.context = { $implicit: this.item };
                        this.contentTemplate = item.template;
                        break;
                    case 'indicator':
                        this.context = { $implicit: this.index };
                        this.contentTemplate = item.template;
                        break;
                    default:
                        this.context = {};
                        this.contentTemplate = item.template;
                        break;
                }
            }
        });
    }
}
GalleriaItemSlot.ɵfac = function GalleriaItemSlot_Factory(t) { return new (t || GalleriaItemSlot)(); };
GalleriaItemSlot.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaItemSlot, selectors: [["p-galleriaItemSlot"]], inputs: { item: "item", templates: "templates", index: "index", type: "type" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function GalleriaItemSlot_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
GalleriaItemSlot.propDecorators = {
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaItemSlot, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-galleriaItemSlot',
                template: `
        <ng-container *ngIf="contentTemplate">
            <ng-container *ngTemplateOutlet="contentTemplate; context: context"></ng-container>
        </ng-container>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class GalleriaItem {
    constructor() {
        this.circular = false;
        this.showItemNavigators = false;
        this.showIndicators = true;
        this.slideShowActive = true;
        this.changeItemOnIndicatorHover = true;
        this.autoPlay = false;
        this.startSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._activeIndex = 0;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._activeIndex = activeIndex;
        this.activeItem = this.value[this._activeIndex];
    }
    ngOnInit() {
        if (this.autoPlay) {
            this.startSlideShow.emit();
        }
    }
    next() {
        let nextItemIndex = this.activeIndex + 1;
        let activeIndex = this.circular && this.value.length - 1 === this.activeIndex
            ? 0
            : nextItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
    }
    prev() {
        let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
        let activeIndex = this.circular && this.activeIndex === 0
            ? this.value.length - 1
            : prevItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
    }
    stopTheSlideShow() {
        if (this.slideShowActive && this.stopSlideShow) {
            this.stopSlideShow.emit();
        }
    }
    navForward(e) {
        this.stopTheSlideShow();
        this.next();
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e) {
        this.stopTheSlideShow();
        this.prev();
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    onIndicatorClick(index) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
    }
    onIndicatorMouseEnter(index) {
        if (this.changeItemOnIndicatorHover) {
            this.stopTheSlideShow();
            this.onActiveIndexChange.emit(index);
        }
    }
    onIndicatorKeyDown(index) {
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
    }
    isNavForwardDisabled() {
        return !this.circular && this.activeIndex === (this.value.length - 1);
    }
    isNavBackwardDisabled() {
        return !this.circular && this.activeIndex === 0;
    }
    isIndicatorItemActive(index) {
        return this.activeIndex === index;
    }
}
GalleriaItem.ɵfac = function GalleriaItem_Factory(t) { return new (t || GalleriaItem)(); };
GalleriaItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaItem, selectors: [["p-galleriaItem"]], inputs: { circular: "circular", showItemNavigators: "showItemNavigators", showIndicators: "showIndicators", slideShowActive: "slideShowActive", changeItemOnIndicatorHover: "changeItemOnIndicatorHover", autoPlay: "autoPlay", activeIndex: "activeIndex", value: "value", templates: "templates", indicatorFacet: "indicatorFacet", captionFacet: "captionFacet" }, outputs: { startSlideShow: "startSlideShow", stopSlideShow: "stopSlideShow", onActiveIndexChange: "onActiveIndexChange" }, decls: 7, vars: 6, consts: [[1, "p-galleria-item-wrapper"], [1, "p-galleria-item-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], ["type", "item", 1, "p-galleria-item", 3, "item", "templates"], ["class", "p-galleria-caption", 4, "ngIf"], ["class", "p-galleria-indicators p-reset", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [1, "p-galleria-item-prev-icon", "pi", "pi-chevron-left"], [1, "p-galleria-item-next-icon", "pi", "pi-chevron-right"], [1, "p-galleria-caption"], ["type", "caption", 3, "item", "templates"], [1, "p-galleria-indicators", "p-reset"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "ngClass", "click", "mouseenter", "keydown.enter"], ["type", "button", "tabIndex", "-1", "class", "p-link", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1", 1, "p-link"]], template: function GalleriaItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaItem_button_2_Template, 2, 4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p-galleriaItemSlot", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GalleriaItem_button_4_Template, 2, 4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GalleriaItem_div_5_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaItem_ul_6_Template, 2, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx.activeItem)("templates", ctx.templates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showItemNavigators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.captionFacet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], GalleriaItemSlot, primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
GalleriaItem.propDecorators = {
    circular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showItemNavigators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slideShowActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    changeItemOnIndicatorHover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoPlay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorFacet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    captionFacet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startSlideShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    stopSlideShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onActiveIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activeIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaItem, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-galleriaItem',
                template: `
        <div class="p-galleria-item-wrapper">
            <div class="p-galleria-item-container">
                <button *ngIf="showItemNavigators" type="button" [ngClass]="{'p-galleria-item-prev p-galleria-item-nav p-link': true, 'p-disabled': this.isNavBackwardDisabled()}" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <span class="p-galleria-item-prev-icon pi pi-chevron-left"></span>
                </button>
                <p-galleriaItemSlot type="item" [item]="activeItem" [templates]="templates" class="p-galleria-item"></p-galleriaItemSlot>
                <button *ngIf="showItemNavigators" type="button" [ngClass]="{'p-galleria-item-next p-galleria-item-nav p-link': true,'p-disabled': this.isNavForwardDisabled()}" (click)="navForward($event)"  [disabled]="isNavForwardDisabled()" pRipple>
                    <span class="p-galleria-item-next-icon pi pi-chevron-right"></span>
                </button>
                <div class="p-galleria-caption" *ngIf="captionFacet">
                    <p-galleriaItemSlot type="caption" [item]="activeItem" [templates]="templates"></p-galleriaItemSlot>
                </div>
            </div>
            <ul *ngIf="showIndicators" class="p-galleria-indicators p-reset">
                <li *ngFor="let item of value; let index = index;" tabindex="0"
                    (click)="onIndicatorClick(index)" (mouseenter)="onIndicatorMouseEnter(index)" (keydown.enter)="onIndicatorKeyDown(index)"
                    [ngClass]="{'p-galleria-indicator': true,'p-highlight': isIndicatorItemActive(index)}">
                    <button type="button" tabIndex="-1" class="p-link" *ngIf="!indicatorFacet">
                    </button>
                    <p-galleriaItemSlot type="indicator" [index]="index" [templates]="templates"></p-galleriaItemSlot>
                </li>
            </ul>
        </div>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { circular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showItemNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slideShowActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeItemOnIndicatorHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoPlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startSlideShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stopSlideShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onActiveIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indicatorFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], captionFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class GalleriaThumbnails {
    constructor(cd) {
        this.cd = cd;
        this.isVertical = false;
        this.slideShowActive = false;
        this.circular = false;
        this.contentHeight = "300px";
        this.showThumbnailNavigators = true;
        this.onActiveIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopSlideShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.startPos = null;
        this.thumbnailsStyle = null;
        this.sortedResponsiveOptions = null;
        this.totalShiftedItems = 0;
        this.page = 0;
        this._numVisible = 0;
        this.d_numVisible = 0;
        this._oldNumVisible = 0;
        this._activeIndex = 0;
        this._oldactiveIndex = 0;
    }
    get numVisible() {
        return this._numVisible;
    }
    ;
    set numVisible(numVisible) {
        this._numVisible = numVisible;
        this._oldNumVisible = this.d_numVisible;
        this.d_numVisible = numVisible;
    }
    get activeIndex() {
        return this._activeIndex;
    }
    ;
    set activeIndex(activeIndex) {
        this._oldactiveIndex = this._activeIndex;
        this._activeIndex = activeIndex;
    }
    ngOnInit() {
        this.createStyle();
        if (this.responsiveOptions) {
            this.bindDocumentListeners();
        }
    }
    ngAfterContentChecked() {
        let totalShiftedItems = this.totalShiftedItems;
        if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
            if (this._activeIndex <= this.getMedianItemIndex()) {
                totalShiftedItems = 0;
            }
            else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
            else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
                totalShiftedItems = (this._activeIndex * -1) + this.getMedianItemIndex() + 1;
            }
            else {
                totalShiftedItems = (this._activeIndex * -1) + this.getMedianItemIndex();
            }
            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }
            if (this.itemsContainer && this.itemsContainer.nativeElement) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
            }
            if (this._oldactiveIndex !== this._activeIndex) {
                primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
                this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
            }
            this._oldactiveIndex = this._activeIndex;
            this._oldNumVisible = this.d_numVisible;
        }
    }
    ngAfterViewInit() {
        this.calculatePosition();
    }
    createStyle() {
        if (!this.thumbnailsStyle) {
            this.thumbnailsStyle = document.createElement('style');
            this.thumbnailsStyle.type = 'text/css';
            document.body.appendChild(this.thumbnailsStyle);
        }
        let innerHTML = `
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${(100 / this.d_numVisible)}%
            }
        `;
        if (this.responsiveOptions) {
            this.sortedResponsiveOptions = [...this.responsiveOptions];
            this.sortedResponsiveOptions.sort((data1, data2) => {
                const value1 = data1.breakpoint;
                const value2 = data2.breakpoint;
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return -1 * result;
            });
            for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                let res = this.sortedResponsiveOptions[i];
                innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${(100 / res.numVisible)}%
                        }
                    }
                `;
            }
        }
        this.thumbnailsStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
        if (this.itemsContainer && this.sortedResponsiveOptions) {
            let windowWidth = window.innerWidth;
            let matchedResponsiveData = {
                numVisible: this._numVisible
            };
            for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
                let res = this.sortedResponsiveOptions[i];
                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                    matchedResponsiveData = res;
                }
            }
            if (this.d_numVisible !== matchedResponsiveData.numVisible) {
                this.d_numVisible = matchedResponsiveData.numVisible;
                this.cd.markForCheck();
            }
        }
    }
    getTabIndex(index) {
        return this.isItemActive(index) ? 0 : null;
    }
    navForward(e) {
        this.stopTheSlideShow();
        let nextItemIndex = this._activeIndex + 1;
        if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1 || this.circular)) {
            this.step(-1);
        }
        let activeIndex = this.circular && (this.value.length - 1) === this._activeIndex ? 0 : nextItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e) {
        this.stopTheSlideShow();
        let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
        let diff = prevItemIndex + this.totalShiftedItems;
        if ((this.d_numVisible - diff - 1) > this.getMedianItemIndex() && ((-1 * this.totalShiftedItems) !== 0 || this.circular)) {
            this.step(1);
        }
        let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
        this.onActiveIndexChange.emit(activeIndex);
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onItemClick(index) {
        this.stopTheSlideShow();
        let selectedItemIndex = index;
        if (selectedItemIndex !== this._activeIndex) {
            const diff = selectedItemIndex + this.totalShiftedItems;
            let dir = 0;
            if (selectedItemIndex < this._activeIndex) {
                dir = (this.d_numVisible - diff - 1) - this.getMedianItemIndex();
                if (dir > 0 && (-1 * this.totalShiftedItems) !== 0) {
                    this.step(dir);
                }
            }
            else {
                dir = this.getMedianItemIndex() - diff;
                if (dir < 0 && (-1 * this.totalShiftedItems) < this.getTotalPageNumber() - 1) {
                    this.step(dir);
                }
            }
            this.activeIndex = selectedItemIndex;
            this.onActiveIndexChange.emit(this.activeIndex);
        }
    }
    step(dir) {
        let totalShiftedItems = this.totalShiftedItems + dir;
        if (dir < 0 && (-1 * totalShiftedItems) + this.d_numVisible > (this.value.length - 1)) {
            totalShiftedItems = this.d_numVisible - this.value.length;
        }
        else if (dir > 0 && totalShiftedItems > 0) {
            totalShiftedItems = 0;
        }
        if (this.circular) {
            if (dir < 0 && this.value.length - 1 === this._activeIndex) {
                totalShiftedItems = 0;
            }
            else if (dir > 0 && this._activeIndex === 0) {
                totalShiftedItems = this.d_numVisible - this.value.length;
            }
        }
        if (this.itemsContainer) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].removeClass(this.itemsContainer.nativeElement, 'p-items-hidden');
            this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
            this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
        }
        this.totalShiftedItems = totalShiftedItems;
    }
    stopTheSlideShow() {
        if (this.slideShowActive && this.stopSlideShow) {
            this.stopSlideShow.emit();
        }
    }
    changePageOnTouch(e, diff) {
        if (diff < 0) { // left
            this.navForward(e);
        }
        else { // right
            this.navBackward(e);
        }
    }
    getTotalPageNumber() {
        return this.value.length > this.d_numVisible ? (this.value.length - this.d_numVisible) + 1 : 0;
    }
    getMedianItemIndex() {
        let index = Math.floor(this.d_numVisible / 2);
        return (this.d_numVisible % 2) ? index : index - 1;
    }
    onTransitionEnd() {
        if (this.itemsContainer && this.itemsContainer.nativeElement) {
            primeng_dom__WEBPACK_IMPORTED_MODULE_4__["DomHandler"].addClass(this.itemsContainer.nativeElement, 'p-items-hidden');
            this.itemsContainer.nativeElement.style.transition = '';
        }
    }
    onTouchEnd(e) {
        let touchobj = e.changedTouches[0];
        if (this.isVertical) {
            this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
        }
        else {
            this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
        }
    }
    onTouchMove(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onTouchStart(e) {
        let touchobj = e.changedTouches[0];
        this.startPos = {
            x: touchobj.pageX,
            y: touchobj.pageY
        };
    }
    isNavBackwardDisabled() {
        return (!this.circular && this._activeIndex === 0) || (this.value.length <= this.d_numVisible);
    }
    isNavForwardDisabled() {
        return (!this.circular && this._activeIndex === (this.value.length - 1)) || (this.value.length <= this.d_numVisible);
    }
    firstItemAciveIndex() {
        return this.totalShiftedItems * -1;
    }
    lastItemActiveIndex() {
        return this.firstItemAciveIndex() + this.d_numVisible - 1;
    }
    isItemActive(index) {
        return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
    }
    bindDocumentListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = () => {
                this.calculatePosition();
            };
            window.addEventListener('resize', this.documentResizeListener);
        }
    }
    unbindDocumentListeners() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    ngOnDestroy() {
        if (this.responsiveOptions) {
            this.unbindDocumentListeners();
        }
        if (this.thumbnailsStyle) {
            this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle);
        }
    }
}
GalleriaThumbnails.ɵfac = function GalleriaThumbnails_Factory(t) { return new (t || GalleriaThumbnails)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
GalleriaThumbnails.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleriaThumbnails, selectors: [["p-galleriaThumbnails"]], viewQuery: function GalleriaThumbnails_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
    } }, inputs: { isVertical: "isVertical", slideShowActive: "slideShowActive", circular: "circular", contentHeight: "contentHeight", showThumbnailNavigators: "showThumbnailNavigators", numVisible: "numVisible", activeIndex: "activeIndex", containerId: "containerId", value: "value", responsiveOptions: "responsiveOptions", templates: "templates" }, outputs: { onActiveIndexChange: "onActiveIndexChange", stopSlideShow: "stopSlideShow" }, decls: 8, vars: 6, consts: [[1, "p-galleria-thumbnail-wrapper"], [1, "p-galleria-thumbnail-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-galleria-thumbnail-items-container", 3, "ngStyle"], [1, "p-galleria-thumbnail-items", 3, "transitionend", "touchstart", "touchmove", "touchend"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [3, "ngClass"], [1, "p-galleria-thumbnail-item-content", 3, "click", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"]], template: function GalleriaThumbnails_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GalleriaThumbnails_button_2_Template, 2, 8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() { return ctx.onTransitionEnd(); })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) { return ctx.onTouchStart($event); })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) { return ctx.onTouchMove($event); })("touchend", function GalleriaThumbnails_Template_div_touchend_4_listener($event) { return ctx.onTouchEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GalleriaThumbnails_div_6_Template, 3, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GalleriaThumbnails_button_7_Template, 2, 8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c14, ctx.isVertical ? ctx.contentHeight : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showThumbnailNavigators);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["Ripple"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], GalleriaItemSlot], encapsulation: 2, changeDetection: 0 });
GalleriaThumbnails.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
GalleriaThumbnails.propDecorators = {
    containerId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isVertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    slideShowActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    circular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    responsiveOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    contentHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showThumbnailNavigators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onActiveIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    stopSlideShow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['itemsContainer',] }],
    numVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaThumbnails, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-galleriaThumbnails',
                template: `
        <div class="p-galleria-thumbnail-wrapper">
            <div class="p-galleria-thumbnail-container">
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{'p-galleria-thumbnail-prev p-link': true, 'p-disabled': this.isNavBackwardDisabled()}" (click)="navBackward($event)" [disabled]="isNavBackwardDisabled()" pRipple>
                    <span [ngClass]="{'p-galleria-thumbnail-prev-icon pi': true, 'pi-chevron-left': !this.isVertical, 'pi-chevron-up': this.isVertical}"></span>
                </button>
                <div class="p-galleria-thumbnail-items-container" [ngStyle]="{'height': isVertical ? contentHeight : ''}">
                    <div #itemsContainer class="p-galleria-thumbnail-items" (transitionend)="onTransitionEnd()"
                        (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" (touchend)="onTouchEnd($event)">
                        <div *ngFor="let item of value; let index = index;" [ngClass]="{'p-galleria-thumbnail-item': true, 'p-galleria-thumbnail-item-current': activeIndex === index, 'p-galleria-thumbnail-item-active': isItemActive(index),
                            'p-galleria-thumbnail-item-start': firstItemAciveIndex() === index, 'p-galleria-thumbnail-item-end': lastItemActiveIndex() === index }">
                            <div class="p-galleria-thumbnail-item-content" [attr.tabindex]="getTabIndex(index)" (click)="onItemClick(index)" (keydown.enter)="onItemClick(index)">
                                <p-galleriaItemSlot type="thumbnail" [item]="item" [templates]="templates"></p-galleriaItemSlot>
                            </div>
                        </div>
                    </div>
                </div>
                <button *ngIf="showThumbnailNavigators" type="button" [ngClass]="{'p-galleria-thumbnail-next p-link': true, 'p-disabled': this.isNavForwardDisabled()}" (click)="navForward($event)" [disabled]="isNavForwardDisabled()" pRipple>
                    <span [ngClass]="{'p-galleria-thumbnail-next-icon pi': true, 'pi-chevron-right': !this.isVertical, 'pi-chevron-down': this.isVertical}"></span>
                </button>
            </div>
        </div>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { isVertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], slideShowActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], circular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showThumbnailNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onActiveIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stopSlideShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], numVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], responsiveOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemsContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemsContainer']
        }] }); })();
class GalleriaModule {
}
GalleriaModule.ɵfac = function GalleriaModule_Factory(t) { return new (t || GalleriaModule)(); };
GalleriaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GalleriaModule });
GalleriaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GalleriaModule, { declarations: function () { return [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]]; }, exports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleriaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_5__["RippleModule"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, primeng_api__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
                declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=primeng-galleria.js.map

/***/ }),

/***/ "7Cea":
/*!**********************************************!*\
  !*** ./src/app/views/faqs/faqs.component.ts ***!
  \**********************************************/
/*! exports provided: FaqsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqsComponent", function() { return FaqsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");




function FaqsComponent_i_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function FaqsComponent_i_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
} }
function FaqsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FaqsComponent_i_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function FaqsComponent_i_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 14);
} }
function FaqsComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FaqsComponent {
    constructor() {
        this.show_features = 1;
    }
    ngOnInit() {
    }
    setShowFeatures(value) {
        this.show_features = value;
    }
}
FaqsComponent.ɵfac = function FaqsComponent_Factory(t) { return new (t || FaqsComponent)(); };
FaqsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqsComponent, selectors: [["app-faqs"]], decls: 29, vars: 6, consts: [[2, "min-height", "100vh", "display", "flex", "flex-direction", "column", "max-width", "100vw", "overflow-x", "hidden"], [1, "row", "main-content", 2, "margin-top", "180px"], [1, "col-sm-12", "mt-3", 2, "padding-left", "100px", "padding-right", "100px"], [2, "font-size", "24px", "font-weight", "bold"], [1, "row"], [1, "col-sm-8", 2, "cursor", "pointer", "margin-top", "10px", 3, "click"], [2, "font-weight", "700"], [1, "col-sm-4", 2, "text-align", "right", 3, "click"], ["class", "fa-solid fa-plus", "style", "font-family: fontAwesome;font-size: larger;cursor: pointer;", 4, "ngIf"], ["class", "fa-solid fa-minus", "style", "font-family: fontAwesome;font-size: larger;cursor: pointer;", 4, "ngIf"], [1, "col-sm-12"], ["class", "col-sm-12", 4, "ngIf"], [2, "padding-top", "20px", "bottom", "0", "width", "100%"], [1, "fa-solid", "fa-plus", 2, "font-family", "fontAwesome", "font-size", "larger", "cursor", "pointer"], [1, "fa-solid", "fa-minus", 2, "font-family", "fontAwesome", "font-size", "larger", "cursor", "pointer"]], template: function FaqsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Freaquently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqsComponent_Template_div_click_8_listener() { return ctx.setShowFeatures(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Why Should I use Global Link Plus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqsComponent_Template_div_click_11_listener() { return ctx.setShowFeatures(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FaqsComponent_i_12_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FaqsComponent_i_13_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FaqsComponent_div_16_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqsComponent_Template_div_click_18_listener() { return ctx.setShowFeatures(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Why Should I use Global Link Plus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqsComponent_Template_div_click_21_listener() { return ctx.setShowFeatures(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, FaqsComponent_i_22_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, FaqsComponent_i_23_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, FaqsComponent_div_26_Template, 2, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "footer", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features !== 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features !== 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features === 2);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXFzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "7LiV":
/*!*************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-accordion.js ***!
  \*************************************************************************/
/*! exports provided: Accordion, AccordionModule, AccordionTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionTab", function() { return AccordionTab; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "GS7A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "7zfz");








function AccordionTab_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.header, " ");
} }
function AccordionTab_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AccordionTab_ng_content_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 1, ["*ngIf", "hasHeaderFacet"]);
} }
function AccordionTab_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function AccordionTab_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccordionTab_ng_container_10_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.contentTemplate);
} }
const _c0 = ["*", [["p-header"]]];
const _c1 = function (a0) { return { "p-accordion-tab-active": a0 }; };
const _c2 = function (a0, a1) { return { "p-highlight": a0, "p-disabled": a1 }; };
const _c3 = function (a0) { return { transitionParams: a0 }; };
const _c4 = function (a1) { return { value: "visible", params: a1 }; };
const _c5 = function (a1) { return { value: "hidden", params: a1 }; };
const _c6 = ["*", "p-header"];
const _c7 = ["*"];
let idx = 0;
class AccordionTab {
    constructor(accordion, changeDetector) {
        this.changeDetector = changeDetector;
        this.cache = true;
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.transitionOptions = '400ms cubic-bezier(0.86, 0, 0.07, 1)';
        this.id = `p-accordiontab-${idx++}`;
        this.accordion = accordion;
    }
    get selected() {
        return this._selected;
    }
    set selected(val) {
        this._selected = val;
        if (!this.loaded) {
            if (this._selected && this.cache) {
                this.loaded = true;
            }
            this.changeDetector.detectChanges();
        }
    }
    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'content':
                    this.contentTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }
    toggle(event) {
        if (this.disabled) {
            return false;
        }
        let index = this.findTabIndex();
        if (this.selected) {
            this.selected = false;
            this.accordion.onClose.emit({ originalEvent: event, index: index });
        }
        else {
            if (!this.accordion.multiple) {
                for (var i = 0; i < this.accordion.tabs.length; i++) {
                    this.accordion.tabs[i].selected = false;
                    this.accordion.tabs[i].selectedChange.emit(false);
                    this.accordion.tabs[i].changeDetector.markForCheck();
                }
            }
            this.selected = true;
            this.loaded = true;
            this.accordion.onOpen.emit({ originalEvent: event, index: index });
        }
        this.selectedChange.emit(this.selected);
        this.accordion.updateActiveIndex();
        this.changeDetector.markForCheck();
        event.preventDefault();
    }
    findTabIndex() {
        let index = -1;
        for (var i = 0; i < this.accordion.tabs.length; i++) {
            if (this.accordion.tabs[i] == this) {
                index = i;
                break;
            }
        }
        return index;
    }
    get hasHeaderFacet() {
        return this.headerFacet && this.headerFacet.length > 0;
    }
    onKeydown(event) {
        if (event.which === 32 || event.which === 13) {
            this.toggle(event);
            event.preventDefault();
        }
    }
    ngOnDestroy() {
        this.accordion.tabs.splice(this.findTabIndex(), 1);
    }
}
AccordionTab.ɵfac = function AccordionTab_Factory(t) { return new (t || AccordionTab)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => Accordion)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AccordionTab.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccordionTab, selectors: [["p-accordionTab"]], contentQueries: function AccordionTab_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__["Header"], 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"], 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    } }, inputs: { cache: "cache", transitionOptions: "transitionOptions", selected: "selected", header: "header", disabled: "disabled" }, outputs: { selectedChange: "selectedChange" }, ngContentSelectors: _c6, decls: 11, vars: 28, consts: [[1, "p-accordion-tab", 3, "ngClass"], [1, "p-accordion-header", 3, "ngClass"], ["role", "tab", 1, "p-accordion-header-link", 3, "click", "keydown"], [1, "p-accordion-toggle-icon", 3, "ngClass"], ["class", "p-accordion-header-text", 4, "ngIf"], [4, "ngTemplateOutlet"], [4, "ngIf"], ["role", "region", 1, "p-toggleable-content"], [1, "p-accordion-content"], [1, "p-accordion-header-text"]], template: function AccordionTab_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionTab_Template_a_click_2_listener($event) { return ctx.toggle($event); })("keydown", function AccordionTab_Template_a_keydown_2_listener($event) { return ctx.onKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccordionTab_span_4_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccordionTab_ng_container_5_Template, 1, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AccordionTab_ng_content_6_Template, 1, 0, "ng-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccordionTab_ng_container_10_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.selected));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c2, ctx.selected, ctx.disabled));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : 0)("id", ctx.id)("aria-controls", ctx.id + "-content")("aria-expanded", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.selected ? ctx.accordion.collapseIcon : ctx.accordion.expandIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hasHeaderFacet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasHeaderFacet);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@tabContent", ctx.selected ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c3, ctx.transitionOptions)) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c3, ctx.transitionOptions)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id + "-content")("aria-hidden", !ctx.selected)("aria-labelledby", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contentTemplate && (ctx.cache ? ctx.loaded : ctx.selected));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], styles: [".p-accordion-header-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;position:relative;text-decoration:none;user-select:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}"], encapsulation: 2, data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('tabContent', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: '0',
                    overflow: 'hidden'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: '*'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible <=> hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ overflow: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transitionParams}}')]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(0))
            ])
        ] }, changeDetection: 0 });
AccordionTab.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => Accordion),] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
AccordionTab.propDecorators = {
    header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cache: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    transitionOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerFacet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["Header"],] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"],] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionTab, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-accordionTab',
                template: `
        <div class="p-accordion-tab" [ngClass]="{'p-accordion-tab-active': selected}">
            <div class="p-accordion-header" [ngClass]="{'p-highlight': selected, 'p-disabled': disabled}">
                <a role="tab" class="p-accordion-header-link" (click)="toggle($event)" (keydown)="onKeydown($event)" [attr.tabindex]="disabled ? null : 0"
                    [attr.id]="id" [attr.aria-controls]="id + '-content'" [attr.aria-expanded]="selected">
                    <span class="p-accordion-toggle-icon" [ngClass]="selected ? accordion.collapseIcon : accordion.expandIcon"></span>
                    <span class="p-accordion-header-text" *ngIf="!hasHeaderFacet">
                        {{header}}
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                    <ng-content select="p-header" *ngIf="hasHeaderFacet"></ng-content>
                </a>
            </div>
            <div [attr.id]="id + '-content'" class="p-toggleable-content" [@tabContent]="selected ? {value: 'visible', params: {transitionParams: transitionOptions}} : {value: 'hidden', params: {transitionParams: transitionOptions}}"
                role="region" [attr.aria-hidden]="!selected" [attr.aria-labelledby]="id">
                <div class="p-accordion-content">
                    <ng-content></ng-content>
                    <ng-container *ngIf="contentTemplate && (cache ? loaded : selected)">
                        <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                    </ng-container>
                </div>
            </div>
        </div>
    `,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('tabContent', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: '0',
                            overflow: 'hidden'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: '*'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible <=> hidden', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ overflow: 'hidden' }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('{{transitionParams}}')]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(0))
                    ])
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".p-accordion-header-link{-ms-user-select:none;-webkit-user-select:none;align-items:center;cursor:pointer;display:flex;position:relative;text-decoration:none;user-select:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => Accordion)]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { cache: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], transitionOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["Header"]]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["PrimeTemplate"]]
        }] }); })();
class Accordion {
    constructor(el, changeDetector) {
        this.el = el;
        this.changeDetector = changeDetector;
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.expandIcon = 'pi pi-fw pi-chevron-right';
        this.collapseIcon = 'pi pi-fw pi-chevron-down';
        this.activeIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabs = [];
    }
    ngAfterContentInit() {
        this.initTabs();
        this.tabListSubscription = this.tabList.changes.subscribe(_ => {
            this.initTabs();
        });
    }
    initTabs() {
        this.tabs = this.tabList.toArray();
        this.updateSelectionState();
        this.changeDetector.markForCheck();
    }
    getBlockableElement() {
        return this.el.nativeElement.children[0];
    }
    get activeIndex() {
        return this._activeIndex;
    }
    set activeIndex(val) {
        this._activeIndex = val;
        if (this.preventActiveIndexPropagation) {
            this.preventActiveIndexPropagation = false;
            return;
        }
        this.updateSelectionState();
    }
    updateSelectionState() {
        if (this.tabs && this.tabs.length && this._activeIndex != null) {
            for (let i = 0; i < this.tabs.length; i++) {
                let selected = this.multiple ? this._activeIndex.includes(i) : (i === this._activeIndex);
                let changed = selected !== this.tabs[i].selected;
                if (changed) {
                    this.tabs[i].selected = selected;
                    this.tabs[i].selectedChange.emit(selected);
                    this.tabs[i].changeDetector.markForCheck();
                }
            }
        }
    }
    updateActiveIndex() {
        let index = this.multiple ? [] : null;
        this.tabs.forEach((tab, i) => {
            if (tab.selected) {
                if (this.multiple) {
                    index.push(i);
                }
                else {
                    index = i;
                    return;
                }
            }
        });
        this.preventActiveIndexPropagation = true;
        this.activeIndexChange.emit(index);
    }
    ngOnDestroy() {
        if (this.tabListSubscription) {
            this.tabListSubscription.unsubscribe();
        }
    }
}
Accordion.ɵfac = function Accordion_Factory(t) { return new (t || Accordion)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Accordion.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Accordion, selectors: [["p-accordion"]], contentQueries: function Accordion_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, AccordionTab, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabList = _t);
    } }, inputs: { expandIcon: "expandIcon", collapseIcon: "collapseIcon", activeIndex: "activeIndex", multiple: "multiple", style: "style", styleClass: "styleClass" }, outputs: { onClose: "onClose", onOpen: "onOpen", activeIndexChange: "activeIndexChange" }, ngContentSelectors: _c7, decls: 2, vars: 4, consts: [["role", "tablist", 3, "ngClass", "ngStyle"]], template: function Accordion_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-accordion p-component")("ngStyle", ctx.style);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], encapsulation: 2, changeDetection: 0 });
Accordion.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
Accordion.propDecorators = {
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    styleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expandIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    collapseIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activeIndexChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tabList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [AccordionTab,] }],
    activeIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Accordion, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-accordion',
                template: `
        <div [ngClass]="'p-accordion p-component'" [ngStyle]="style" [class]="styleClass" role="tablist">
            <ng-content></ng-content>
        </div>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], expandIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], collapseIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activeIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [AccordionTab]
        }] }); })();
class AccordionModule {
}
AccordionModule.ɵfac = function AccordionModule_Factory(t) { return new (t || AccordionModule)(); };
AccordionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AccordionModule });
AccordionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccordionModule, { declarations: function () { return [Accordion, AccordionTab]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [Accordion, AccordionTab, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [Accordion, AccordionTab, primeng_api__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
                declarations: [Accordion, AccordionTab]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=primeng-accordion.js.map

/***/ }),

/***/ "7wzR":
/*!************************************************!*\
  !*** ./src/app/views/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");





const _c0 = function (a0) { return { "background-color": a0 }; };
class AboutComponent {
    constructor(bizService) {
        this.bizService = bizService;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_1__["BizService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 27, vars: 3, consts: [[2, "min-height", "100vh", "display", "flex", "flex-direction", "column", "max-width", "100vw", "overflow-x", "hidden"], [1, "row", "main-content", 2, "margin-top", "220px", "margin-bottom", "50px"], [2, "padding-left", "100px", "padding-right", "100px", "display", "flex", "flex-direction", "column"], [2, "display", "flex", "column-gap", "30px"], [2, "flex", "1"], [2, "font-size", "32px", "font-weight", "bold", "margin-bottom", "20px"], [2, "margin-bottom", "50px"], [2, "font-size", "16px", "font-weight", "bold"], [2, "border", "1px solid #C1C7D6"], [2, "display", "flex", "justify-content", "center"], ["type", "submit", 1, "", 2, "border-radius", "20px", "width", "300px", "border", "none", "color", "white", "padding", "5px", 3, "ngStyle"], [2, "padding-top", "20px", "bottom", "0", "width", "100%"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About the top of the line furniture distributor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About the top of the line furniture distributor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Join Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.bizService.get_background_color()));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_4__["CustomerFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "BT2B":
/*!******************************************************!*\
  !*** ./src/app/directives/dynamic-size.directive.ts ***!
  \******************************************************/
/*! exports provided: DynamicSizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicSizeDirective", function() { return DynamicSizeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DynamicSizeDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onLoad() {
        const container = this.el.nativeElement.parentElement;
        const image = this.el.nativeElement;
        this.renderer.setStyle(image, 'width', `${container.clientWidth}px`);
        this.renderer.setStyle(image, 'height', `${container.clientWidth}px`);
    }
    onResize() {
        const container = this.el.nativeElement.parentElement;
        const image = this.el.nativeElement;
        this.renderer.setStyle(image, 'width', `${container.clientWidth}px`);
        this.renderer.setStyle(image, 'height', `${container.clientWidth}px`);
    }
}
DynamicSizeDirective.ɵfac = function DynamicSizeDirective_Factory(t) { return new (t || DynamicSizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
DynamicSizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DynamicSizeDirective, selectors: [["", "appDynamicSize", ""]], hostBindings: function DynamicSizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function DynamicSizeDirective_load_HostBindingHandler() { return ctx.onLoad(); })("resize", function DynamicSizeDirective_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } } });


/***/ }),

/***/ "CsZ6":
/*!****************************************************************!*\
  !*** ./src/app/directives/mouse-out-hide-navmenu.directive.ts ***!
  \****************************************************************/
/*! exports provided: MouseOutHideNavMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseOutHideNavMenuDirective", function() { return MouseOutHideNavMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MouseOutHideNavMenuDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onMouseOver(evt) {
        console.log("ou");
        this.mouseover = true;
    }
    onMouseOut(evt) {
        this.mouseover = false;
    }
}
MouseOutHideNavMenuDirective.ɵfac = function MouseOutHideNavMenuDirective_Factory(t) { return new (t || MouseOutHideNavMenuDirective)(); };
MouseOutHideNavMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MouseOutHideNavMenuDirective, selectors: [["", "mouseOutHideNavMenu", ""]], hostVars: 2, hostBindings: function MouseOutHideNavMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MouseOutHideNavMenuDirective_mouseover_HostBindingHandler($event) { return ctx.onMouseOver($event); })("mouseout", function MouseOutHideNavMenuDirective_mouseout_HostBindingHandler($event) { return ctx.onMouseOut($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-hide", ctx.mouseover);
    } }, outputs: { fileDropped: "fileDropped" } });


/***/ }),

/***/ "FPq/":
/*!**************************************************!*\
  !*** ./src/app/views/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


class FooterComponent {
    constructor() {
        this.name = "";
        this.name = sessionStorage.getItem("name");
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 17, vars: 3, consts: [[1, "container-fluid", "footer-main"], [1, "row", "footer-top", 2, "padding-top", "30px"], [1, "col-sm-1", "col-lg-1"], [1, "col-sm-3", "col-lg-3"], [1, "col-sm-8", "col-lg-8"], [1, "row"], [2, "font-weight", "700", "font-size", "large"], [1, "row", 2, "margin-top", "10px"], [2, "font-size", "medium"], ["type", "email", "placeholder", "Enter Email Address", 2, "height", "50px", "border-radius", "2px", "font-size", "large", "padding-left", "10px", "padding-right", "10px"], [2, "background-color", "#313133", "border", "1px solid white", "color", "white", "border-radius", "2px", "margin-left", "10px", "min-width", "80px", "height", "50px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Subscribe to our newsletter to get updates on our latest offers!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 1, ctx.name), " SUBSCRIPTION");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"sofia\" !important;\n}\n\n.footer-main[_ngcontent-%COMP%] {\n  background-color: #535357;\n  color: white;\n  padding-bottom: 20px;\n}\n\n.footer-top[_ngcontent-%COMP%] {\n  background-color: #313133;\n  padding-bottom: 20px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBmb250LWZhbWlseTogJ3NvZmlhJyAhaW1wb3J0YW50O1xuICB9XG4gIFxuLmZvb3Rlci1tYWlue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzUzNTc7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5cbi5mb290ZXItdG9we1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMTMxMzM7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ "Ffdx":
/*!*****************************************!*\
  !*** ./src/app/pipe/title-case.pipe.ts ***!
  \*****************************************/
/*! exports provided: TitleCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCasePipe", function() { return TitleCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TitleCasePipe {
    transform(value) {
        if (!value)
            return value;
        let r = value.toLowerCase().split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
        console.log(value, r);
        return r;
    }
}
TitleCasePipe.ɵfac = function TitleCasePipe_Factory(t) { return new (t || TitleCasePipe)(); };
TitleCasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "titleCase", type: TitleCasePipe, pure: true });


/***/ }),

/***/ "HBHD":
/*!************************************************************!*\
  !*** ./src/app/views/item-detail/item-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ItemDetailComponent {
    constructor() { }
    ngOnInit() {
        this.currentSlide(1);
    }
    currentSlide(n) {
        this.showSlides(this.slideIndex = n);
    }
    showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
    }
}
ItemDetailComponent.ɵfac = function ItemDetailComponent_Factory(t) { return new (t || ItemDetailComponent)(); };
ItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemDetailComponent, selectors: [["app-item-detail"]], decls: 485, vars: 0, consts: [[1, "navbar", "navbar-expand", "fixed-top", "bg-white", "shadow"], [1, "container-fluid"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], ["routerLink", "/", 1, "btn"], [1, "bi", "bi-chevron-left"], [1, "navbar-nav", "ms-auto", "me-3", "gap-2", "align-items-center"], [1, "nav-item"], [1, "btn"], [1, "bi", "bi-heart"], [1, "bi", "bi-share"], ["type", "button", 1, "nav-link", "btn", "position-relative"], [1, "bi", "bi-bag", "fs-5"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "mt-2", "badge", "bg-danger"], [1, "visually-hidden"], ["id", "items-gallery", 1, "items-gallery", "container-fluid"], [1, "mySlides"], [1, "numbertext"], ["src", "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "jacket 1"], ["src", "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "jacket 2"], ["src", "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "jacket 3"], ["src", "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "jacket 4"], [1, "row"], [1, "column"], ["src", "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "The Woods", 1, "demo", "cursor", 3, "click"], ["src", "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "Cinque Terre", 1, "demo", "cursor", 3, "click"], ["src", "https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "Mountains and fjords", 1, "demo", "cursor", 3, "click"], ["src", "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "alt", "Northern Lights", 1, "demo", "cursor", 3, "click"], [1, "container-fluid", "mb-5", "pb-5"], [1, "card", "mt-3", "border-0"], [1, "card-body", "px-0"], [1, "d-flex", "align-items-center", "gap-2"], [1, "bi", "bi-shop"], [1, "mb-0", "small", "text-muted", "text-capitalize"], [1, "fw-bold", "h5", "my-3"], [1, "d-flex", "align-items-center", "justify-content-evenly"], [1, "d-flex", "gap-1"], [1, "bi", "bi-star-fill", "text-warning"], [1, "mb-0", "text-muted"], [1, "mb-2"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "nav-item"], ["id", "about-tab", "data-bs-toggle", "tab", "data-bs-target", "#home-tab-pane", "type", "button", "role", "tab", "aria-controls", "about-tab-pane", "aria-selected", "true", 1, "nav-link", "active"], ["id", "reviews-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile-tab-pane", "type", "button", "role", "tab", "aria-controls", "reviews-tab-pane", "aria-selected", "false", 1, "nav-link"], ["id", "item-tab-content", 1, "tab-content", "pt-3"], ["id", "about-tab-pane", "role", "tabpanel", "aria-labelledby", "about-tab", "tabindex", "0", 1, "tab-pane", "fade", "show", "active"], [1, "row", "g-3"], [1, "col-6", "d-flex", "gap-1"], [1, "mb-0"], [1, "mb-0", "fw-bold"], ["id", "description", 1, "collapse", "show"], [1, "divider"], [1, "fw-bold"], [1, "small"], ["data-bs-toggle", "collapse", "href", "#description", "role", "button", "aria-expanded", "true", "aria-controls", "description", 1, "btn", "btn-sm", "btn-light", "mt-3"], [1, "bi", "bi-chevron-up", "ms-2"], [1, "d-flex", "gap-2"], [1, "d-flex", "mt-2", "gap-2"], [1, "d-flex", "align-items-center", "gap-3"], ["src", "https://images.unsplash.com/photo-1435575653489-b0873ec954e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", "alt", "seller title", "height", "72", "width", "72", 1, "object-fit-cover", "rounded-circle"], [1, "vstack", "align-items-start", "gap-2"], [1, "fw-bold", "mb-0"], [1, "btn", "btn-sm", "btn-primary"], [1, "bi", "bi-box-arrow-up-right", "me-2"], [1, "row", "align-items-center"], [1, "col-4", "text-center"], [1, "display-3", "fw-normal"], [1, "d-flex", "mt-2", "justify-content-center", "gap-1"], [1, "bi", "bi-star-half", "text-warning"], [1, "mb-0", "mt-2", "small", "text-muted"], [1, "col-8", "vstack", "gap-1"], ["role", "progressbar", "aria-label", "Basic example", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", ".65rem", "width", "100%", "max-width", "136px"], [1, "progress-bar", 2, "width", "75%"], ["role", "progressbar", "aria-label", "Basic example", "aria-valuenow", "40", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", ".65rem", "width", "100%", "max-width", "136px"], [1, "progress-bar", 2, "width", "40%"], ["role", "progressbar", "aria-label", "Basic example", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", ".65rem", "width", "100%", "max-width", "136px"], [1, "progress-bar", 2, "width", "25%"], ["role", "progressbar", "aria-label", "Basic example", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", ".65rem", "width", "100%", "max-width", "136px"], [1, "progress-bar", 2, "width", "20%"], ["role", "progressbar", "aria-label", "Basic example", "aria-valuenow", "2", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress", 2, "height", ".65rem", "width", "100%", "max-width", "136px"], [1, "progress-bar", 2, "width", "2%"], [1, "d-flex", "justify-content-between", "align-items-center", "gap-2"], ["src", "https://images.unsplash.com/photo-1548126032-079a0fb0099d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "alt", "", "height", "72", "width", "72", 1, "object-fit-cover", "rounded-3"], ["src", "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "alt", "", "height", "72", "width", "72", 1, "object-fit-cover", "rounded-3"], ["src", "https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "alt", "", "height", "72", "width", "72", 1, "object-fit-cover", "rounded-3"], [1, "position-relative"], ["src", "https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "alt", "", "height", "72", "width", "72", 1, "object-fit-cover", "rounded-3"], [1, "img-overlay"], [1, "centered", "text-white", "fw-bold", "text-white"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "fw-bold", "mb-1"], [1, "small", "mb-0"], [1, "dropdown"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm", "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "list-group", "list-group-flush", "mt-3"], [1, "list-group-item", "list-group-item-action", "px-0"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], ["src", "https://images.unsplash.com/photo-1557418669-db3f781a58c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "alt", "", "height", "36", "width", "36", 1, "object-fit-cover", "rounded-circle"], [1, "btn", "btn-sm"], [1, "bi", "bi-three-dots"], [1, "d-flex", "gap-2", "tag", "mb-2"], [1, "btn", "btn-sm", "btn-outline-dark", "rounded-pill"], [1, "small", "my-3"], [1, "btn", "btn-light", "btn-sm"], [1, "bi", "bi-hand-thumbs-up", "me-2"], [1, "mb-0", "small"], [1, "d-flex", "align-items-center", "justify-content-between", "mt-3"], ["aria-label", "Page navigation example"], [1, "pagination", "mb-0"], [1, "page-item"], ["href", "#", "aria-label", "Previous", 1, "page-link"], ["aria-hidden", "true"], ["href", "#", 1, "page-link"], ["href", "#", "aria-label", "Next", 1, "page-link"], [1, "btn", "btn-light"], [1, "bi", "bi-three-dots", "ms-2"], [1, "cart-items-wrapper"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "mb-0", "h5", "fw-bold"], [1, "btn", "text-success", "text-capitalize"], [1, "row", "row-cols-2", "row-cols-md-4", "g-2"], [1, "col"], [1, "card", "h-100", "border-0", "cart-item"], ["src", "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80", "height", "136", "alt", "item image", 1, "card-img-top", "object-fit-cover"], [1, "btn", "btn-light", "position-absolute", "end-0"], [1, "card-body", "px-2"], [1, "small", "text-muted", "mb-1"], [1, "fw-normal", "mb-2", "small", "fw-bold"], [1, "ratings"], [1, "text-muted"], [1, "h5", "text-success", "mb-0", "fw-bold"], ["id", "reviews-tab-pane", "role", "tabpanel", "aria-labelledby", "reviews-tab", "tabindex", "0", 1, "tab-pane", "fade"], [1, "bottom-nav", "container-fluid"], [1, "mb-1"], [1, "h4", "mb-0", "fw-bold"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-primary", "btn-lg"], [1, "bi", "bi-bag"], [1, "fs-5", "ms-1"], ["type", "button", 1, "btn", "btn-dark", "btn-lg"]], template: function ItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "unread messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "1 / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "2 / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "3 / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "4 / 6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailComponent_Template_img_click_39_listener() { return ctx.currentSlide(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailComponent_Template_img_click_41_listener() { return ctx.currentSlide(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailComponent_Template_img_click_43_listener() { return ctx.currentSlide(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailComponent_Template_img_click_45_listener() { return ctx.currentSlide(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "tokobaju.id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Fashion Jacket Men Bomber Jacket Coat Two Side Double Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "4.9 ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "2.3k+ Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "2.9k+ Sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "About Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Reviews ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Brand:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Checkers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Aprikot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Casual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Material:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Polyester");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Condition:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Heavy:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "200g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Bibendum ut tristique et egestas quis ipsum. Eget egestas purus viverra accumsan in nisl nisi scelerisque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "show less");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Shipping information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Delivery:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Shipping from Jakarta, Indonesia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Shipping:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Free international shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Delivery date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "25/04/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Seller information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Thrift Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Visit store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Reviews & Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "4.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "/ 5.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "2.3k+ reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "1.45k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "710");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Reviews with images and videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "132+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Top Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Show 3 out of 2.3k+ reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, " Popular ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "ul", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Relevant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "5.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "button", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Dolor sit amet consectetur adipiscing elit. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet dictum sit amet justo donec enim diam vulputate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Helpful?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](288, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "5.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "button", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Dolor sit amet consectetur adipiscing elit. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet dictum sit amet justo donec enim diam vulputate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Helpful?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](311, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "5.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "button", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "button", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Tag 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "p", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Dolor sit amet consectetur adipiscing elit. Eget est lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet dictum sit amet justo donec enim diam vulputate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "button", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](332, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Helpful?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Yesterday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "nav", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "ul", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "a", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "span", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "li", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "a", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "span", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "button", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "load more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "i", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "hr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "p", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "Recommended");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "button", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "see more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](403, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](420, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](444, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](451, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](454, "img", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "button", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, "Shirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "p", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, "Fashion Jacket Coat-Men Bomber Jacket");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "small", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, "4.9 | 2912");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "p", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "$12.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "div", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "p", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Total price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "p", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "$18.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](479, "button", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](480, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "span", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](482, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "button", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](484, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "IV1m":
/*!*****************************************************************!*\
  !*** ./src/app/directives/hover-activated-navmenu.directive.ts ***!
  \*****************************************************************/
/*! exports provided: HoverActivatedNavMenuDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverActivatedNavMenuDirective", function() { return HoverActivatedNavMenuDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HoverActivatedNavMenuDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onMouseOver(evt) {
        this.mouseover = true;
    }
    onMouseOut(evt) {
        this.mouseover = false;
    }
}
HoverActivatedNavMenuDirective.ɵfac = function HoverActivatedNavMenuDirective_Factory(t) { return new (t || HoverActivatedNavMenuDirective)(); };
HoverActivatedNavMenuDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HoverActivatedNavMenuDirective, selectors: [["", "hoverActivatedNavMenu", ""]], hostVars: 2, hostBindings: function HoverActivatedNavMenuDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HoverActivatedNavMenuDirective_mouseover_HostBindingHandler($event) { return ctx.onMouseOver($event); })("mouseout", function HoverActivatedNavMenuDirective_mouseout_HostBindingHandler($event) { return ctx.onMouseOut($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-show", ctx.mouseover);
    } }, outputs: { fileDropped: "fileDropped" } });


/***/ }),

/***/ "Kxzt":
/*!**********************************************************************!*\
  !*** ./src/app/views/contact-us-modal/contact-us-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactUsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModalComponent", function() { return ContactUsModalComponent; });
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ContactUsModalComponent_small_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactUsModalComponent_small_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactUsModalComponent_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Invalid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ContactUsModalComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " message is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "width": "410px", "border-radius": "10px" }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
class ContactUsModalComponent {
    constructor(messageService, formBuilder, ref, bizService, apiService) {
        this.messageService = messageService;
        this.formBuilder = formBuilder;
        this.ref = ref;
        this.bizService = bizService;
        this.apiService = apiService;
        this.contactUsForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: ['', []],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    ngOnInit() {
        this.contactUsForm.markAsUntouched();
    }
    submitForm() {
        if (this.contactUsForm.valid) {
            this.apiService.contactUs(this.contactUsForm.value).subscribe(res => {
                if (res) {
                    this.showSuccessAlert();
                    this.ref.close();
                }
            }, err => {
                this.ref.close();
                this.showErrorAlert();
            });
        }
    }
    showSuccessAlert() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent successfully' });
    }
    showErrorAlert() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message' });
    }
}
ContactUsModalComponent.ɵfac = function ContactUsModalComponent_Factory(t) { return new (t || ContactUsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_3__["DynamicDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
ContactUsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactUsModalComponent, selectors: [["app-contact-us-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([primeng_api__WEBPACK_IMPORTED_MODULE_0__["MessageService"]])], decls: 26, vars: 12, consts: [["header", "Contact Us", 3, "modal"], [3, "formGroup", "ngSubmit"], ["contactForm", "ngForm"], [1, "form-group"], ["for", "name"], ["placeholder", "Enter Name", "type", "text", "id", "name", "formControlName", "name", 1, "form-control", 2, "border-radius", "15px"], ["style", "color: red; font-size: 12px; padding-left: 15px;", 4, "ngIf"], ["for", "email"], ["placeholder", "Enter Email", "type", "email", "id", "email", "formControlName", "email", 1, "form-control", 2, "border-radius", "15px"], ["for", "phone"], ["placeholder", "Enter Phone Number", "type", "tel", "id", "phone", "formControlName", "phone", 1, "form-control", 2, "border-radius", "15px"], ["for", "message"], ["placeholder", "Enter Message", "id", "message", "rows", "4", "formControlName", "message", 1, "form-control", 2, "border-radius", "15px"], [2, "display", "flex", "justify-content", "center"], ["type", "submit", 1, "", 2, "border-radius", "20px", "width", "150px", "border", "none", "color", "white", 3, "ngStyle"], [2, "color", "red", "font-size", "12px", "padding-left", "15px"]], template: function ContactUsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ContactUsModalComponent_Template_form_ngSubmit_1_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ContactUsModalComponent_small_7_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ContactUsModalComponent_small_12_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ContactUsModalComponent_small_13_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ContactUsModalComponent_small_22_Template, 2, 0, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.contactUsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactUsForm.get("name").hasError("required") && ctx.contactUsForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactUsForm.get("email").hasError("required") && ctx.contactUsForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactUsForm.get("email").hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.contactUsForm.get("message").hasError("required") && ctx.contactUsForm.get("message").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, ctx.bizService.get_background_color()));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], encapsulation: 2 });


/***/ }),

/***/ "LwO5":
/*!************************************************************************!*\
  !*** ./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-carousel.js ***!
  \************************************************************************/
/*! exports provided: Carousel, CarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/ripple */ "Q4Mo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/utils */ "t2ka");










const _c0 = ["itemsContainer"];
function Carousel_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function Carousel_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_div_1_ng_container_2_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate);
} }
const _c1 = function (a1) { return { "p-carousel-prev p-link": true, "p-disabled": a1 }; };
const _c2 = function (a1, a2) { return { "p-carousel-prev-icon pi": true, "pi-chevron-left": a1, "pi-chevron-up": a2 }; };
function Carousel_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_button_4_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.navBackward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r1.isBackwardNavDisabled()))("disabled", ctx_r1.isBackwardNavDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c2, !ctx_r1.isVertical(), ctx_r1.isVertical()));
} }
function Carousel_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c3 = function (a1, a2, a3) { return { "p-carousel-item p-carousel-item-cloned": true, "p-carousel-item-active": a1, "p-carousel-item-start": a2, "p-carousel-item-end": a3 }; };
const _c4 = function (a0) { return { $implicit: a0 }; };
function Carousel_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_8_ng_container_1_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c3, ctx_r3.totalShiftedItems * -1 === ctx_r3.value.length, 0 === index_r13, ctx_r3.clonedItemsForStarting.length - 1 === index_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, item_r12));
} }
function Carousel_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c5 = function (a1, a2, a3) { return { "p-carousel-item": true, "p-carousel-item-active": a1, "p-carousel-item-start": a2, "p-carousel-item-end": a3 }; };
function Carousel_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_9_ng_container_1_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c5, ctx_r4.firstIndex() <= index_r16 && ctx_r4.lastIndex() >= index_r16, ctx_r4.firstIndex() === index_r16, ctx_r4.lastIndex() === index_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, item_r15));
} }
function Carousel_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function Carousel_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_10_ng_container_1_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const index_r19 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c3, ctx_r5.totalShiftedItems * -1 === ctx_r5.numVisible, 0 === index_r19, ctx_r5.clonedItemsForFinishing.length - 1 === index_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c4, item_r18));
} }
const _c6 = function (a1) { return { "p-carousel-next p-link": true, "p-disabled": a1 }; };
const _c7 = function (a1, a2) { return { "p-carousel-prev-icon pi": true, "pi-chevron-right": a1, "pi-chevron-down": a2 }; };
function Carousel_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_button_11_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.navForward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c6, ctx_r6.isForwardNavDisabled()))("disabled", ctx_r6.isForwardNavDisabled());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c7, !ctx_r6.isVertical(), ctx_r6.isVertical()));
} }
const _c8 = function (a1) { return { "p-carousel-indicator": true, "p-highlight": a1 }; };
function Carousel_ul_12_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Carousel_ul_12_li_1_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r25 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.onDotClick($event, i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c8, ctx_r23._page === i_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r23.indicatorStyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-link")("ngStyle", ctx_r23.indicatorStyle);
} }
function Carousel_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_ul_12_li_1_Template, 2, 7, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.indicatorsContentClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-carousel-indicators p-reset")("ngStyle", ctx_r7.indicatorsContentStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.totalDotsArray());
} }
function Carousel_div_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function Carousel_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Carousel_div_13_ng_container_2_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.footerTemplate);
} }
const _c9 = [[["p-header"]], [["p-footer"]]];
const _c10 = function (a1, a2) { return { "p-carousel p-component": true, "p-carousel-vertical": a1, "p-carousel-horizontal": a2 }; };
const _c11 = function (a0) { return { "height": a0 }; };
const _c12 = ["p-header", "p-footer"];
class Carousel {
    constructor(el, zone, cd) {
        this.el = el;
        this.zone = zone;
        this.cd = cd;
        this.orientation = "horizontal";
        this.verticalViewPortHeight = "300px";
        this.contentClass = "";
        this.indicatorsContentClass = "";
        this.indicatorStyleClass = "";
        this.circular = false;
        this.showIndicators = true;
        this.showNavigators = true;
        this.autoplayInterval = 0;
        this.onPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._numVisible = 1;
        this._numScroll = 1;
        this._oldNumScroll = 0;
        this.prevState = {
            numScroll: 0,
            numVisible: 0,
            value: []
        };
        this.defaultNumScroll = 1;
        this.defaultNumVisible = 1;
        this._page = 0;
        this.isRemainingItemsAdded = false;
        this.remainingItems = 0;
        this.swipeThreshold = 20;
        this.totalShiftedItems = this.page * this.numScroll * -1;
    }
    get page() {
        return this._page;
    }
    set page(val) {
        if (this.isCreated && val !== this._page) {
            if (this.autoplayInterval) {
                this.stopAutoplay();
                this.allowAutoplay = false;
            }
            if (val > this._page && val <= (this.totalDots() - 1)) {
                this.step(-1, val);
            }
            else if (val < this._page) {
                this.step(1, val);
            }
        }
        this._page = val;
    }
    get numVisible() {
        return this._numVisible;
    }
    set numVisible(val) {
        this._numVisible = val;
    }
    get numScroll() {
        return this._numVisible;
    }
    set numScroll(val) {
        this._numScroll = val;
    }
    get value() {
        return this._value;
    }
    ;
    set value(val) {
        this._value = val;
    }
    ngOnChanges(simpleChange) {
        if (simpleChange.value) {
            if (this.circular && this._value) {
                this.setCloneItems();
            }
        }
        if (this.isCreated) {
            if (simpleChange.numVisible) {
                if (this.responsiveOptions) {
                    this.defaultNumVisible = this.numVisible;
                }
                if (this.isCircular()) {
                    this.setCloneItems();
                }
                this.createStyle();
                this.calculatePosition();
            }
            if (simpleChange.numScroll) {
                if (this.responsiveOptions) {
                    this.defaultNumScroll = this.numScroll;
                }
            }
        }
    }
    ngAfterContentInit() {
        this.id = Object(primeng_utils__WEBPACK_IMPORTED_MODULE_4__["UniqueComponentId"])();
        this.allowAutoplay = !!this.autoplayInterval;
        if (this.circular) {
            this.setCloneItems();
        }
        if (this.responsiveOptions) {
            this.defaultNumScroll = this._numScroll;
            this.defaultNumVisible = this._numVisible;
        }
        this.createStyle();
        this.calculatePosition();
        if (this.responsiveOptions) {
            this.bindDocumentListeners();
        }
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'item':
                    this.itemTemplate = item.template;
                    break;
                case 'header':
                    this.headerTemplate = item.template;
                    break;
                case 'footer':
                    this.footerTemplate = item.template;
                    break;
                default:
                    this.itemTemplate = item.template;
                    break;
            }
        });
    }
    ngAfterContentChecked() {
        const isCircular = this.isCircular();
        let totalShiftedItems = this.totalShiftedItems;
        if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
            if (this.autoplayInterval) {
                this.stopAutoplay();
            }
            this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
            let page = this._page;
            if (this.totalDots() !== 0 && page >= this.totalDots()) {
                page = this.totalDots() - 1;
                this._page = page;
                this.onPage.emit({
                    page: this.page
                });
            }
            totalShiftedItems = (page * this._numScroll) * -1;
            if (isCircular) {
                totalShiftedItems -= this._numVisible;
            }
            if (page === (this.totalDots() - 1) && this.remainingItems > 0) {
                totalShiftedItems += (-1 * this.remainingItems) + this._numScroll;
                this.isRemainingItemsAdded = true;
            }
            else {
                this.isRemainingItemsAdded = false;
            }
            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }
            this._oldNumScroll = this._numScroll;
            this.prevState.numScroll = this._numScroll;
            this.prevState.numVisible = this._numVisible;
            this.prevState.value = [...this._value];
            if (this.totalDots() > 0 && this.itemsContainer.nativeElement) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
            }
            this.isCreated = true;
            if (this.autoplayInterval && this.isAutoplay()) {
                this.startAutoplay();
            }
        }
        if (isCircular) {
            if (this.page === 0) {
                totalShiftedItems = -1 * this._numVisible;
            }
            else if (totalShiftedItems === 0) {
                totalShiftedItems = -1 * this.value.length;
                if (this.remainingItems > 0) {
                    this.isRemainingItemsAdded = true;
                }
            }
            if (totalShiftedItems !== this.totalShiftedItems) {
                this.totalShiftedItems = totalShiftedItems;
            }
        }
    }
    createStyle() {
        if (!this.carouselStyle) {
            this.carouselStyle = document.createElement('style');
            this.carouselStyle.type = 'text/css';
            document.body.appendChild(this.carouselStyle);
        }
        let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${(100 / this.numVisible)}%
			}
        `;
        if (this.responsiveOptions) {
            this.responsiveOptions.sort((data1, data2) => {
                const value1 = data1.breakpoint;
                const value2 = data2.breakpoint;
                let result = null;
                if (value1 == null && value2 != null)
                    result = -1;
                else if (value1 != null && value2 == null)
                    result = 1;
                else if (value1 == null && value2 == null)
                    result = 0;
                else if (typeof value1 === 'string' && typeof value2 === 'string')
                    result = value1.localeCompare(value2, undefined, { numeric: true });
                else
                    result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                return -1 * result;
            });
            for (let i = 0; i < this.responsiveOptions.length; i++) {
                let res = this.responsiveOptions[i];
                innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${(100 / res.numVisible)}%
                        }
                    }
                `;
            }
        }
        this.carouselStyle.innerHTML = innerHTML;
    }
    calculatePosition() {
        if (this.responsiveOptions) {
            let windowWidth = window.innerWidth;
            let matchedResponsiveData = {
                numVisible: this.defaultNumVisible,
                numScroll: this.defaultNumScroll
            };
            for (let i = 0; i < this.responsiveOptions.length; i++) {
                let res = this.responsiveOptions[i];
                if (parseInt(res.breakpoint, 10) >= windowWidth) {
                    matchedResponsiveData = res;
                }
            }
            if (this._numScroll !== matchedResponsiveData.numScroll) {
                let page = this._page;
                page = Math.floor((page * this._numScroll) / matchedResponsiveData.numScroll);
                let totalShiftedItems = (matchedResponsiveData.numScroll * this.page) * -1;
                if (this.isCircular()) {
                    totalShiftedItems -= matchedResponsiveData.numVisible;
                }
                this.totalShiftedItems = totalShiftedItems;
                this._numScroll = matchedResponsiveData.numScroll;
                this._page = page;
                this.onPage.emit({
                    page: this.page
                });
            }
            if (this._numVisible !== matchedResponsiveData.numVisible) {
                this._numVisible = matchedResponsiveData.numVisible;
                this.setCloneItems();
            }
            this.cd.markForCheck();
        }
    }
    setCloneItems() {
        this.clonedItemsForStarting = [];
        this.clonedItemsForFinishing = [];
        if (this.isCircular()) {
            this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
            this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
        }
    }
    firstIndex() {
        return this.isCircular() ? (-1 * (this.totalShiftedItems + this.numVisible)) : (this.totalShiftedItems * -1);
    }
    lastIndex() {
        return this.firstIndex() + this.numVisible - 1;
    }
    totalDots() {
        return this.value ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
    }
    totalDotsArray() {
        const totalDots = this.totalDots();
        return totalDots <= 0 ? [] : Array(totalDots).fill(0);
    }
    isVertical() {
        return this.orientation === 'vertical';
    }
    isCircular() {
        return this.circular && this.value && this.value.length >= this.numVisible;
    }
    isAutoplay() {
        return this.autoplayInterval && this.allowAutoplay;
    }
    isForwardNavDisabled() {
        return this.isEmpty() || (this._page >= (this.totalDots() - 1) && !this.isCircular());
    }
    isBackwardNavDisabled() {
        return this.isEmpty() || (this._page <= 0 && !this.isCircular());
    }
    isEmpty() {
        return !this.value || this.value.length === 0;
    }
    navForward(e, index) {
        if (this.isCircular() || this._page < (this.totalDots() - 1)) {
            this.step(-1, index);
        }
        if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
        }
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    navBackward(e, index) {
        if (this.isCircular() || this._page !== 0) {
            this.step(1, index);
        }
        if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
        }
        if (e && e.cancelable) {
            e.preventDefault();
        }
    }
    onDotClick(e, index) {
        let page = this._page;
        if (this.autoplayInterval) {
            this.stopAutoplay();
            this.allowAutoplay = false;
        }
        if (index > page) {
            this.navForward(e, index);
        }
        else if (index < page) {
            this.navBackward(e, index);
        }
    }
    step(dir, page) {
        let totalShiftedItems = this.totalShiftedItems;
        const isCircular = this.isCircular();
        if (page != null) {
            totalShiftedItems = (this._numScroll * page) * -1;
            if (isCircular) {
                totalShiftedItems -= this._numVisible;
            }
            this.isRemainingItemsAdded = false;
        }
        else {
            totalShiftedItems += (this._numScroll * dir);
            if (this.isRemainingItemsAdded) {
                totalShiftedItems += this.remainingItems - (this._numScroll * dir);
                this.isRemainingItemsAdded = false;
            }
            let originalShiftedItems = isCircular ? (totalShiftedItems + this._numVisible) : totalShiftedItems;
            page = Math.abs(Math.floor((originalShiftedItems / this._numScroll)));
        }
        if (isCircular && this.page === (this.totalDots() - 1) && dir === -1) {
            totalShiftedItems = -1 * (this.value.length + this._numVisible);
            page = 0;
        }
        else if (isCircular && this.page === 0 && dir === 1) {
            totalShiftedItems = 0;
            page = (this.totalDots() - 1);
        }
        else if (page === (this.totalDots() - 1) && this.remainingItems > 0) {
            totalShiftedItems += ((this.remainingItems * -1) - (this._numScroll * dir));
            this.isRemainingItemsAdded = true;
        }
        if (this.itemsContainer) {
            this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
            this.itemsContainer.nativeElement.style.transition = 'transform 500ms ease 0s';
        }
        this.totalShiftedItems = totalShiftedItems;
        this._page = page;
        this.onPage.emit({
            page: this.page
        });
    }
    startAutoplay() {
        this.interval = setInterval(() => {
            if (this.totalDots() > 0) {
                if (this.page === (this.totalDots() - 1)) {
                    this.step(-1, 0);
                }
                else {
                    this.step(-1, this.page + 1);
                }
            }
        }, this.autoplayInterval);
    }
    stopAutoplay() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    onTransitionEnd() {
        if (this.itemsContainer) {
            this.itemsContainer.nativeElement.style.transition = '';
            if ((this.page === 0 || this.page === (this.totalDots() - 1)) && this.isCircular()) {
                this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
            }
        }
    }
    onTouchStart(e) {
        let touchobj = e.changedTouches[0];
        this.startPos = {
            x: touchobj.pageX,
            y: touchobj.pageY
        };
    }
    onTouchMove(e) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    onTouchEnd(e) {
        let touchobj = e.changedTouches[0];
        if (this.isVertical()) {
            this.changePageOnTouch(e, (touchobj.pageY - this.startPos.y));
        }
        else {
            this.changePageOnTouch(e, (touchobj.pageX - this.startPos.x));
        }
    }
    changePageOnTouch(e, diff) {
        if (Math.abs(diff) > this.swipeThreshold) {
            if (diff < 0) {
                this.navForward(e);
            }
            else {
                this.navBackward(e);
            }
        }
    }
    bindDocumentListeners() {
        if (!this.documentResizeListener) {
            this.documentResizeListener = (e) => {
                this.calculatePosition();
            };
            window.addEventListener('resize', this.documentResizeListener);
        }
    }
    unbindDocumentListeners() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    ngOnDestroy() {
        if (this.responsiveOptions) {
            this.unbindDocumentListeners();
        }
        if (this.autoplayInterval) {
            this.stopAutoplay();
        }
    }
}
Carousel.ɵfac = function Carousel_Factory(t) { return new (t || Carousel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
Carousel.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Carousel, selectors: [["p-carousel"]], contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__["Header"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__["Footer"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeTemplate"], 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerFacet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerFacet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templates = _t);
    } }, viewQuery: function Carousel_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsContainer = _t.first);
    } }, inputs: { orientation: "orientation", verticalViewPortHeight: "verticalViewPortHeight", contentClass: "contentClass", indicatorsContentClass: "indicatorsContentClass", indicatorStyleClass: "indicatorStyleClass", circular: "circular", showIndicators: "showIndicators", showNavigators: "showNavigators", autoplayInterval: "autoplayInterval", page: "page", numVisible: "numVisible", numScroll: "numScroll", value: "value", responsiveOptions: "responsiveOptions", indicatorsContentStyle: "indicatorsContentStyle", indicatorStyle: "indicatorStyle", style: "style", styleClass: "styleClass" }, outputs: { onPage: "onPage" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c12, decls: 14, vars: 22, consts: [[3, "ngClass", "ngStyle"], ["class", "p-carousel-header", 4, "ngIf"], [3, "ngClass"], [1, "p-carousel-container"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click", 4, "ngIf"], [1, "p-carousel-items-content", 3, "ngStyle"], [1, "p-carousel-items-container", 3, "transitionend", "touchend", "touchstart", "touchmove"], ["itemsContainer", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass", "class", "ngStyle", 4, "ngIf"], ["class", "p-carousel-footer", 4, "ngIf"], [1, "p-carousel-header"], [4, "ngTemplateOutlet"], ["type", "button", "pRipple", "", 3, "ngClass", "disabled", "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "ngClass", "ngStyle", "click"], [1, "p-carousel-footer"]], template: function Carousel_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Carousel_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Carousel_button_4_Template, 2, 8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionend", function Carousel_Template_div_transitionend_6_listener() { return ctx.onTransitionEnd(); })("touchend", function Carousel_Template_div_touchend_6_listener($event) { return ctx.onTouchEnd($event); })("touchstart", function Carousel_Template_div_touchstart_6_listener($event) { return ctx.onTouchStart($event); })("touchmove", function Carousel_Template_div_touchmove_6_listener($event) { return ctx.onTouchMove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, Carousel_div_8_Template, 2, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, Carousel_div_9_Template, 2, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, Carousel_div_10_Template, 2, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, Carousel_button_11_Template, 2, 8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, Carousel_ul_12_Template, 2, 5, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, Carousel_div_13_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.styleClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c10, ctx.isVertical(), !ctx.isVertical()))("ngStyle", ctx.style);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerFacet || ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.contentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "p-carousel-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c11, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clonedItemsForStarting);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clonedItemsForFinishing);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNavigators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerFacet || ctx.footerTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], primeng_ripple__WEBPACK_IMPORTED_MODULE_2__["Ripple"]], styles: [".p-carousel,.p-carousel-content{display:flex;flex-direction:column}.p-carousel-content{overflow:auto}.p-carousel-next,.p-carousel-prev{-ms-grid-row-align:center;align-items:center;align-self:center;display:flex;flex-grow:0;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-indicators,.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{flex-wrap:wrap;justify-content:center}.p-carousel-indicator>button{align-items:center;display:flex;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}"], encapsulation: 2, changeDetection: 0 });
Carousel.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
Carousel.propDecorators = {
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    numScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    responsiveOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    verticalViewPortHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    contentClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorsContentClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorsContentStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorStyleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    indicatorStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    circular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showIndicators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showNavigators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    autoplayInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    styleClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    itemsContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['itemsContainer',] }],
    headerFacet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["Header"],] }],
    footerFacet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["Footer"],] }],
    templates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeTemplate"],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Carousel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'p-carousel',
                template: `
		<div [attr.id]="id" [ngClass]="{'p-carousel p-component':true, 'p-carousel-vertical': isVertical(), 'p-carousel-horizontal': !isVertical()}" [ngStyle]="style" [class]="styleClass">
			<div class="p-carousel-header" *ngIf="headerFacet || headerTemplate">
                <ng-content select="p-header"></ng-content>
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
			</div>
			<div [class]="contentClass" [ngClass]="'p-carousel-content'">
				<div class="p-carousel-container">
					<button type="button" *ngIf="showNavigators" [ngClass]="{'p-carousel-prev p-link':true, 'p-disabled': isBackwardNavDisabled()}" [disabled]="isBackwardNavDisabled()" (click)="navBackward($event)" pRipple>
						<span [ngClass]="{'p-carousel-prev-icon pi': true, 'pi-chevron-left': !isVertical(), 'pi-chevron-up': isVertical()}"></span>
					</button>
					<div class="p-carousel-items-content" [ngStyle]="{'height': isVertical() ? verticalViewPortHeight : 'auto'}">
						<div #itemsContainer class="p-carousel-items-container" (transitionend)="onTransitionEnd()" (touchend)="onTouchEnd($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)">
                            <div *ngFor="let item of clonedItemsForStarting; let index = index" [ngClass]= "{'p-carousel-item p-carousel-item-cloned': true,
                                'p-carousel-item-active': (totalShiftedItems * -1) === (value.length),
							    'p-carousel-item-start': 0 === index,
							    'p-carousel-item-end': (clonedItemsForStarting.length - 1) === index}">
								<ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>
							</div>
                            <div *ngFor="let item of value; let index = index" [ngClass]= "{'p-carousel-item': true,
                                'p-carousel-item-active': (firstIndex() <= index && lastIndex() >= index),
							    'p-carousel-item-start': firstIndex() === index,
							    'p-carousel-item-end': lastIndex() === index}">
								<ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>
							</div>
                            <div *ngFor="let item of clonedItemsForFinishing; let index = index" [ngClass]= "{'p-carousel-item p-carousel-item-cloned': true,
                                'p-carousel-item-active': ((totalShiftedItems *-1) === numVisible),
							    'p-carousel-item-start': 0 === index,
							    'p-carousel-item-end': (clonedItemsForFinishing.length - 1) === index}">
								<ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: item}"></ng-container>
							</div>
						</div>
					</div>
					<button type="button" *ngIf="showNavigators" [ngClass]="{'p-carousel-next p-link': true, 'p-disabled': isForwardNavDisabled()}" [disabled]="isForwardNavDisabled()" (click)="navForward($event)" pRipple>
						<span [ngClass]="{'p-carousel-prev-icon pi': true, 'pi-chevron-right': !isVertical(), 'pi-chevron-down': isVertical()}"></span>
					</button>
				</div>
				<ul [ngClass]="'p-carousel-indicators p-reset'" [class]="indicatorsContentClass" [ngStyle]="indicatorsContentStyle" *ngIf="showIndicators">
					<li *ngFor="let totalDot of totalDotsArray(); let i = index" [ngClass]="{'p-carousel-indicator':true,'p-highlight': _page === i}">
						<button type="button" [ngClass]="'p-link'" (click)="onDotClick($event, i)" [class]="indicatorStyleClass" [ngStyle]="indicatorStyle"></button>
					</li>
				</ul>
			</div>
			<div class="p-carousel-footer" *ngIf="footerFacet || footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
			</div>
		</div>
    `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".p-carousel,.p-carousel-content{display:flex;flex-direction:column}.p-carousel-content{overflow:auto}.p-carousel-next,.p-carousel-prev{-ms-grid-row-align:center;align-items:center;align-self:center;display:flex;flex-grow:0;flex-shrink:0;justify-content:center;overflow:hidden;position:relative}.p-carousel-container{display:flex;flex-direction:row}.p-carousel-items-content{overflow:hidden;width:100%}.p-carousel-indicators,.p-carousel-items-container{display:flex;flex-direction:row}.p-carousel-indicators{flex-wrap:wrap;justify-content:center}.p-carousel-indicator>button{align-items:center;display:flex;justify-content:center}.p-carousel-vertical .p-carousel-container{flex-direction:column}.p-carousel-vertical .p-carousel-items-container{flex-direction:column;height:100%}.p-items-hidden .p-carousel-item{visibility:hidden}.p-items-hidden .p-carousel-item.p-carousel-item-active{visibility:visible}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], verticalViewPortHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indicatorsContentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indicatorStyleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], circular: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showNavigators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoplayInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], responsiveOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indicatorsContentStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], indicatorStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], styleClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemsContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['itemsContainer']
        }], headerFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["Header"]]
        }], footerFacet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["Footer"]]
        }], templates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [primeng_api__WEBPACK_IMPORTED_MODULE_1__["PrimeTemplate"]]
        }] }); })();
class CarouselModule {
}
CarouselModule.ɵfac = function CarouselModule_Factory(t) { return new (t || CarouselModule)(); };
CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CarouselModule });
CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_2__["RippleModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarouselModule, { declarations: function () { return [Carousel]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_2__["RippleModule"]]; }, exports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], Carousel, primeng_api__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], primeng_api__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], primeng_ripple__WEBPACK_IMPORTED_MODULE_2__["RippleModule"]],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], Carousel, primeng_api__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
                declarations: [Carousel]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=primeng-carousel.js.map

/***/ }),

/***/ "MR1q":
/*!**************************************************!*\
  !*** ./src/app/views/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search/search.component */ "s4XM");
/* harmony import */ var _contact_us_modal_contact_us_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact-us-modal/contact-us-modal.component */ "Kxzt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_search_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/search-bar.service */ "b/hC");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_hover_activated_navmenu_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../directives/hover-activated-navmenu.directive */ "IV1m");
/* harmony import */ var _directives_mouse_out_hide_navmenu_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../directives/mouse-out-hide-navmenu.directive */ "CsZ6");















function HeaderComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r0.bizService.get_left_link(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.bizService.get_left_header());
} }
function HeaderComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.bizService.get_left_header());
} }
function HeaderComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", ctx_r2.bizService.get_right_link(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.bizService.get_right_header());
} }
function HeaderComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.bizService.get_right_header());
} }
function HeaderComponent_div_20_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_20_ng_container_13_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const sub_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const cat_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.changeSubCategory(cat_r7.name, sub_r10.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", sub_r10.name, " ");
} }
function HeaderComponent_div_20_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HeaderComponent_div_20_ng_container_13_div_1_Template, 2, 1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sub_r10 = ctx.$implicit;
    const cat_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", sub_r10.category === cat_r7.id);
} }
function HeaderComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function HeaderComponent_div_20_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const cat_r7 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.onMouseEnterTopMenu(cat_r7.id); })("mouseleave", function HeaderComponent_div_20_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.onMouseLeaveTopMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_20_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const cat_r7 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.changeCategory(cat_r7.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_div_20_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const cat_r7 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.changeCategory(cat_r7.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, HeaderComponent_div_20_ng_container_13_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r4.getTopMenuHoverStyle(cat_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.navbarCategoryFormat(cat_r7.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.navbarCategoryFormat(cat_r7.name), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.sub_categories);
} }
function HeaderComponent_ul_21_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r23.getBackgroundStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r23.userInfoService.getCartItems().length);
} }
function HeaderComponent_ul_21_a_59_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_ul_21_a_59_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r26.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_21_a_60_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_ul_21_a_60_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r28.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_21_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function HeaderComponent_ul_21_Template_li_mouseenter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.onMouseEnterCartMenu(); })("mouseleave", function HeaderComponent_ul_21_Template_li_mouseleave_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r32.onMouseLeaveCartMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "g", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "g", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "g", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "g", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "g", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "g", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, HeaderComponent_ul_21_span_16_Template, 4, 2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function HeaderComponent_ul_21_Template_li_mouseenter_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.onMouseEnterUserMenu(); })("mouseleave", function HeaderComponent_ul_21_Template_li_mouseleave_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.onMouseLeaveUserMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "g", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "g", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "g", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "g", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "g", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "g", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "g", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "g", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "path", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "My Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "My Orders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "svg", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "g", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "g", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "g", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "g", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, " Account Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, HeaderComponent_ul_21_a_59_Template, 2, 0, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, HeaderComponent_ul_21_a_60_Template, 2, 0, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx_r5.bizService.getBizId(), "/cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("stroke", ctx_r5.bizService.get_background_color());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.userInfoService.getCartItems().length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx_r5.bizService.getBizId(), "/cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r5.getCartMenuHoverStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("stroke", ctx_r5.bizService.get_background_color());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r5.getUserMenuHoverStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.user_info.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx_r5.bizService.getBizId(), "/my-orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx_r5.bizService.getBizId(), "/account");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.userInfoService.isLoggedIn());
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function HeaderComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r35.openContactUsModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r6.bizService.get_background_color()));
} }
class HeaderComponent {
    constructor(formBuilder, router, userInfoService, searchBarService, bizService, apiService, dialogService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userInfoService = userInfoService;
        this.searchBarService = searchBarService;
        this.bizService = bizService;
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.categories = [];
        this.sub_categories = [];
        this.search_input = "";
        this.customer = "customer";
        this.business = "business";
        this.catalog = "catalog";
        this.isSticky = false;
        this.products = [];
        this.url = '/' + this.bizService.getBizId();
        this.user_info = {
            name: "User",
            email: "",
        };
        this.hovered_cat_id = "";
        this.hovered_cart_menu = false;
        this.hovered_user_menu = false;
    }
    checkScroll() {
        console.log(window.pageXOffset);
        this.isSticky = window.pageYOffset >= 40;
    }
    ngOnInit() {
        this.user_info = this.userInfoService.getUserInfo();
        this.searchForm = this.formBuilder.group({
            search: [''],
        });
        this.apiService.getProducts('').subscribe(res => {
            this.products = res;
        }, err => {
        });
        this.apiService.getProductCategory('').subscribe(res => {
            if (res)
                this.categories = res.splice(0, 7);
        }, err => { });
        this.apiService.getProductSubCategory('').subscribe(res => {
            this.sub_categories = res;
        }, err => { }, () => { });
        this.checkRightHeaderLink();
        this.type = this.bizService.getBizType();
    }
    openContactUsModal() {
        const ref = this.dialogService.open(_contact_us_modal_contact_us_modal_component__WEBPACK_IMPORTED_MODULE_1__["ContactUsModalComponent"], {
            header: 'Contact Us',
            width: '410px',
            modal: true,
            closable: true,
        });
    }
    checkRightHeaderLink() {
        if (this.bizService.get_right_link() && this.bizService.get_right_link() !== "null") {
            this.rightHeaderLink = true;
        }
        else {
            this.rightHeaderLink = false;
        }
    }
    checkLeftHeaderLink() {
        if (this.bizService.get_left_link() && this.bizService.get_left_link() !== "null") {
            return true;
        }
        else {
            return false;
        }
    }
    changeCategory(category) {
        this.router.navigateByUrl("/" + this.bizService.getBizName() + "/products/" + category);
        this.searchComponent.color = '';
        // this.ngAfterViewInit();
        // if(this.searchComponent){
        //   this.searchComponent.ngAfterViewInit();
        // }
    }
    changeSubCategory(category, sub_categories) {
        this.router.navigateByUrl("/" + this.bizService.getBizName() + "/products/" + category + '/' + sub_categories);
        this.searchComponent.color = '';
        // this.ngAfterViewInit();
        // if(this.searchComponent){
        //   this.searchComponent.ngAfterViewInit();
        // }
    }
    searchClick() {
        if (!(this.router.url.split('/')[2] === 'products')) {
            this.router.navigateByUrl(this.bizService.getBizId() + "/products");
        }
        this.searchBarService.search(this.searchForm.value.search);
    }
    logout() {
        this.userInfoService.signOut();
        this.router.navigateByUrl(this.bizService.getBizId());
    }
    login() {
        this.router.navigateByUrl(this.bizService.getBizId() + "/login");
    }
    navbarCategoryFormat(title) {
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    }
    onMouseEnterTopMenu(id) {
        this.hovered_cat_id = id;
    }
    onMouseLeaveTopMenu() {
        this.hovered_cat_id = "";
    }
    getTopMenuHoverStyle(id) {
        if (id == this.hovered_cat_id) {
            return {
                color: this.bizService.get_background_color()
            };
        }
        else {
            return {
                color: 'black'
            };
        }
    }
    getCartMenuHoverStyle() {
        if (this.hovered_cart_menu) {
            return {
                color: this.bizService.get_background_color()
            };
        }
        else {
            return {};
        }
    }
    getUserMenuHoverStyle() {
        if (this.hovered_user_menu) {
            return {
                color: this.bizService.get_background_color()
            };
        }
        else {
            return {};
        }
    }
    getBackgroundStyle() {
        return {
            'background-color': this.bizService.get_background_color()
        };
    }
    onMouseEnterCartMenu() {
        this.hovered_cart_menu = true;
    }
    onMouseLeaveCartMenu() {
        this.hovered_cart_menu = false;
    }
    onMouseEnterUserMenu() {
        this.hovered_user_menu = true;
    }
    onMouseLeaveUserMenu() {
        this.hovered_user_menu = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_search_bar_service__WEBPACK_IMPORTED_MODULE_6__["SearchBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_7__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_9__["DialogService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_search_search_component__WEBPACK_IMPORTED_MODULE_0__["SearchComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchComponent = _t.first);
    } }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.checkScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 23, vars: 14, consts: [[1, "navbar", "navbar-expand", "shadow", "fixed-top", 2, "height", "180px", "background-color", "white", "padding-left", "0", 3, "ngClass"], [1, "container-fluid", 2, "position", "absolute", "top", "0", "display", "flex", "flex-direction", "column"], ["role", "banner", 1, "toolbar", 3, "ngStyle"], ["class", "promotion-text", "target", "_blank", 3, "href", 4, "ngIf"], [1, "spacer"], ["class", "promotion-text", 4, "ngIf"], ["class", "promotion-text-right", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "promotion-text-right", 4, "ngIf"], [2, "display", "flex", "padding-top", "30px", "width", "100%"], [1, "navbar-brand", 2, "min-width", "280px", "z-index", "1040"], [1, "logo", 3, "routerLink"], [2, "height", "50px", 3, "src"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "position", "relative"], ["role", "search", 1, "d-flex", "flex-fill", 2, "justify-content", "center", "z-index", "1000", "margin-right", "10px", 3, "formGroup"], [1, "input-group"], ["formControlName", "search", "type", "text", "placeholder", "Search ...", "aria-label", "search", "aria-describedby", "basic-addon1", 1, "form-control", "bg-transparent", "search-bar-input", "rounded-pill", 2, "padding-left", "20px", "border-color", "#C1C7D6", "border-left", "1px solid #C1C7D6", 3, "keydown.enter"], ["id", "basic-addon1", 1, "input-group-text", "bg-transparent", "search-bar-icon", "rounded-pill", 2, "margin-left", "-70px", "border", "none", 3, "click"], [1, "bi", "bi-search"], [1, "top-menu", 2, "padding-top", "70px", "width", "100%"], ["class", "top-menu-item", "hoverActivatedNavMenu", "", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["class", "navbar-nav mx-3 gap-2", 4, "ngIf"], ["class", "btn  buy-now-button", "style", "border-radius: 50px; margin-right: 50px; height: 50px; margin-top: 5px;", 3, "ngStyle", "click", 4, "ngIf"], ["target", "_blank", 1, "promotion-text", 3, "href"], [1, "promotion-text"], ["target", "_blank", 1, "promotion-text-right", 3, "href"], [1, "promotion-text-right"], ["hoverActivatedNavMenu", "", 1, "top-menu-item", 3, "mouseenter", "mouseleave"], ["hoverActivatedNavMenu", "", 2, "display", "block", "width", "fit-content"], [2, "cursor", "pointer", 3, "click"], [1, "TopNav_topNavLink_13", 2, "text-decoration", "none", 3, "ngStyle"], ["hoverActivatedNavMenu", "", 1, "TopNav_dropDown_5f", 2, "max-width", "976px", "min-width", "976px", "animation-delay", "0ms", "background-color", "white", "box-shadow", "0 4px 2px -2px rgba(0, 0, 0, 0.2)", "left", "calc((100% - 976px) / 2)", "border-radius", "10px"], [1, "TopNav_retailDropDown_14"], [1, "DropDown_subMenu_a5", 2, "max-height", "620px"], [1, "row", 2, "width", "100%", "margin-left", "0px", "margin-right", "0px", "cursor", "pointer", 3, "click"], [2, "text-align", "start", "padding-left", "10px", "padding-right", "0px", "font-weight", "bold", "margin-bottom", "10px"], [2, "display", "flex", "flex-direction", "column", "align-items", "flex-start"], [4, "ngFor", "ngForOf"], ["id", "hdShim", "mouseOutHideNavMenu", "", 1, "header_shim_0c"], ["style", "padding-left: 10px; font-size: medium; cursor: pointer;", 3, "click", 4, "ngIf"], [2, "padding-left", "10px", "font-size", "medium", "cursor", "pointer", 3, "click"], [1, "navbar-nav", "mx-3", "gap-2"], [1, "nav-item", "menu-button", 3, "mouseenter", "mouseleave"], ["type", "button", 1, "nav-link", "btn", "position-relative"], [3, "routerLink"], [1, "unhovered"], ["width", "32px", "height", "32px", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["d", "M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z", "stroke", "#000000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "hovered"], ["d", "M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["class", "position-absolute top-0 start-100 translate-middle mt-2 badge", 3, "ngStyle", 4, "ngIf"], [2, "text-decoration", "none", 3, "routerLink"], [1, "menu-text", 3, "ngStyle"], [1, "nav-item", 3, "mouseenter", "mouseleave"], [1, "nav-item", "dropdown", "menu-button", 2, "height", "40px"], ["data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle", 2, "cursor", "pointer"], ["id", "User / User_Circle"], ["id", "Vector", "d", "M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z", "stroke", "#000000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "Vector", "d", "M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "dropdown-menu", 2, "left", "auto", "right", "0"], [1, "dropdown-item", 2, "cursor", "pointer"], ["href", "#", 1, "dropdown-item"], [2, "border", "1px solid black", "width", "100%"], [1, "dropdown-item", 3, "routerLink"], [2, "padding-right", "10px", "padding-left", "2px"], [1, "fa", "fa-list", 2, "font-size", "18px", "color", "black"], [2, "padding-right", "4px"], ["width", "24px", "height", "24px", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["href", "javascript:void(0);", "class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "mt-2", "badge", 3, "ngStyle"], [1, "visually-hidden"], ["href", "javascript:void(0);", 1, "dropdown-item", 3, "click"], [1, "btn", "buy-now-button", 2, "border-radius", "50px", "margin-right", "50px", "height", "50px", "margin-top", "5px", 3, "ngStyle", "click"], [2, "color", "white", "padding-left", "40px", "padding-right", "40px"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HeaderComponent_a_4_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HeaderComponent_a_7_Template, 2, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, HeaderComponent_span_8_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function HeaderComponent_Template_input_keydown_enter_16_listener() { return ctx.searchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_span_click_17_listener() { return ctx.searchClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, HeaderComponent_div_20_Template, 15, 4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, HeaderComponent_ul_21_Template, 61, 14, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, HeaderComponent_button_22_Template, 3, 3, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.isSticky ? "navbar-sticky" : "navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkLeftHeaderLink());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.checkLeftHeaderLink());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.rightHeaderLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.rightHeaderLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizName(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.bizService.get_company_logo(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type === ctx.business);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.type === ctx.catalog);
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_10__["Toast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _directives_hover_activated_navmenu_directive__WEBPACK_IMPORTED_MODULE_13__["HoverActivatedNavMenuDirective"], _directives_mouse_out_hide_navmenu_directive__WEBPACK_IMPORTED_MODULE_14__["MouseOutHideNavMenuDirective"]], styles: ["*[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n*[_ngcontent-%COMP%] {\n  font-family: \"sofia\" !important;\n}\n.toolbar[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40px;\n  overflow-y: auto;\n  display: flex;\n  align-items: center;\n  color: white;\n  font-weight: 600;\n  width: 100%;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 991.98px) {\n  .toolbar[_ngcontent-%COMP%] {\n    height: 0px;\n  }\n}\n@media (min-width: 991.98px) {\n  .toolbar[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .promotion-text[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    font-size: medium;\n    text-decoration: none;\n    color: white;\n  }\n\n  .promotion-text-right[_ngcontent-%COMP%] {\n    padding-right: 40px;\n    font-size: medium;\n    text-decoration: none;\n    color: white;\n  }\n}\n@media (max-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%] {\n    background-color: white;\n    height: 70px !important;\n  }\n\n  .container-fluid[_ngcontent-%COMP%] {\n    padding-top: 10px !important;\n    padding-bottom: 10px !important;\n  }\n}\n@media (min-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%] {\n    background-color: white;\n  }\n\n  .navbar-sticky[_ngcontent-%COMP%] {\n    margin-top: 0px;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    padding-left: 40px;\n  }\n}\n@media (max-width: 991.98px) {\n  .navbar-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search-bar-icon[_ngcontent-%COMP%] {\n    border-top-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n    height: 40px;\n    border-color: grey !important;\n    padding-left: 5px;\n  }\n\n  .search-bar-input[_ngcontent-%COMP%] {\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    height: 40px;\n    border-color: grey !important;\n    margin-right: 35px;\n  }\n\n  .input-group[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 991.98px) {\n  .top-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menu-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 991.98px) {\n  .dropdown-toggle[_ngcontent-%COMP%]::after {\n    content: none;\n  }\n\n  .menu-text[_ngcontent-%COMP%] {\n    padding-left: 8px;\n    color: #211e22;\n  }\n\n  .navbar[_ngcontent-%COMP%] {\n    height: 110px;\n  }\n\n  .search-bar-icon[_ngcontent-%COMP%] {\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n    height: 50px;\n    border-color: grey;\n    padding-left: 40px;\n  }\n\n  .search-bar-input[_ngcontent-%COMP%] {\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    height: 50px;\n    border-color: grey;\n    padding-left: 40px;\n  }\n}\n.app-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 40px;\n}\n.input-group[_ngcontent-%COMP%] {\n  max-width: 800px;\n}\n@media (min-width: 991.98px) {\n  .top-menu[_ngcontent-%COMP%] {\n    padding-top: 50px;\n    display: flex;\n    margin-top: 35px;\n    position: absolute;\n    text-align: center;\n    justify-content: center;\n  }\n}\n.menu-button[_ngcontent-%COMP%]   .unhovered[_ngcontent-%COMP%] {\n  display: contents;\n}\n.menu-button[_ngcontent-%COMP%]   .hovered[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-button[_ngcontent-%COMP%]:hover   .unhovered[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-button[_ngcontent-%COMP%]:hover   .hovered[_ngcontent-%COMP%] {\n  display: contents;\n}\n.top-menu-item[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  padding-left: 10px;\n  vertical-align: top;\n  text-align: center;\n  font-weight: 500;\n}\n.top-menu-item[_ngcontent-%COMP%]:hover   .TopNav_topNavLink_13[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n@media (min-width: 1200px) {\n  .top-menu-item[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (min-width: 500px) and (max-width: 1199px) {\n  .top-menu-item[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 499px) {\n  .top-menu-item[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.top-menu-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.menu-show[_ngcontent-%COMP%]   .TopNav_dropDown_5f[_ngcontent-%COMP%] {\n  display: block !important;\n  opacity: 1 !important;\n  z-index: 1000;\n  transition: opacity 0.5s ease;\n}\n.menu-show[_ngcontent-%COMP%]   .header_shim_0c[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: all;\n  width: calc(100% + 350px);\n  left: 0;\n  margin-top: 10px;\n  margin-left: -300px;\n  height: 11256px;\n  transition: opacity 0.5s ease;\n}\n.menu-hide[_ngcontent-%COMP%] {\n  background-color: transparent;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  transition: opacity 0.5s ease;\n  width: 0px !important;\n  z-index: 1;\n  height: 0px !important;\n}\n.TopNav_dropDown_5f[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  position: absolute;\n}\n.header_shim_0c[_ngcontent-%COMP%] {\n  background-color: rgba(47, 51, 55, 0.45);\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  width: 100%;\n  z-index: 998;\n  height: 11256px;\n}\n.TopNav_retailDropDown_14[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n}\n.DropDown_subMenu_a5[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-start;\n  flex-flow: wrap;\n  overflow: auto;\n}\n.DropDown_column_27[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-self: flex-start;\n  margin-bottom: 22px;\n  width: 25%;\n}\n.DropDown_columnTitle_ec[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #2f3337;\n  font-weight: 700;\n}\n.DropDown_columnLink_c4[_ngcontent-%COMP%] {\n  font-size: 14px;\n  cursor: pointer;\n  color: #626669;\n  border-bottom: 1px solid #2f3337;\n  margin: 0 0 8px;\n  padding: 0 0 2px;\n  text-decoration: none;\n  border-bottom: 1px solid transparent;\n  line-height: normal;\n  align-self: flex-start;\n}\n.TopNav_topNavLink_13[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: inherit;\n  text-decoration: none;\n  border-bottom: 2px solid transparent;\n}\n._1qx9x3g0[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n}\n@media screen and (min-width: 1280px) {\n  ._1qx9x3g0[_ngcontent-%COMP%], ._1qx9x3g1._1qx9x3g1._1qx9x3g1[_ngcontent-%COMP%] {\n    width: 1.875rem;\n    height: 1.875rem;\n  }\n}\n._16q98ey2_6101[_ngcontent-%COMP%], ._16q98ey3_6101[_ngcontent-%COMP%], ._16q98ey4_6101[_ngcontent-%COMP%] {\n  stroke-width: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBQUE7QUFLQTtFQUNJLDJCQUFBO0FBQUo7QUFJQTtFQUNJLCtCQUFBO0FBREo7QUFJRTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFETjtBQUtJO0VBQ0UsWUFBQTtBQUZOO0FBTUk7RUFDRSxPQUFBO0FBSE47QUFPSTtFQUNFO0lBQ0ksV0FBQTtFQUpSO0FBQ0Y7QUFRRTtFQUNFO0lBQ00sa0JBQUE7RUFOUjs7RUFVSTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7RUFQTjs7RUFTSTtJQUNFLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7RUFOTjtBQUNGO0FBU0E7RUFDSTtJQUNJLHVCQUFBO0lBQ0EsdUJBQUE7RUFQTjs7RUFVRTtJQUNJLDRCQUFBO0lBQ0EsK0JBQUE7RUFQTjtBQUNGO0FBV0E7RUFDSTtJQUNJLHVCQUFBO0VBVE47O0VBWUU7SUFDSSxlQUFBO0VBVE47O0VBWUU7SUFDSSxrQkFBQTtFQVROO0FBQ0Y7QUFjQTtFQUNJO0lBQ0ksYUFBQTtFQVpOOztFQWVFO0lBQ0ksNEJBQUE7SUFDQSwrQkFBQTtJQUNBLFlBQUE7SUFDQSw2QkFBQTtJQUNBLGlCQUFBO0VBWk47O0VBZ0JFO0lBQ0ksNkJBQUE7SUFDQSxnQ0FBQTtJQUNBLFlBQUE7SUFDQSw2QkFBQTtJQUVBLGtCQUFBO0VBZE47O0VBaUJFO0lBQ0ksV0FBQTtFQWROO0FBQ0Y7QUFpQkE7RUFDSTtJQUNJLGFBQUE7RUFmTjs7RUFrQkU7SUFDSSxhQUFBO0VBZk47QUFDRjtBQXFCQTtFQUNJO0lBQ0ksYUFBQTtFQW5CTjs7RUFzQkU7SUFDSSxpQkFBQTtJQUNBLGNBQUE7RUFuQk47O0VBc0JFO0lBQ0ksYUFBQTtFQW5CTjs7RUFzQkU7SUFDSSw0QkFBQTtJQUNBLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7RUFuQk47O0VBc0JFO0lBQ0ksNkJBQUE7SUFDQSxnQ0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBbkJOO0FBQ0Y7QUF5QkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUF2Qko7QUEwQkE7RUFDSSxnQkFBQTtBQXZCSjtBQTZCQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsdUJBQUE7RUExQk47QUFDRjtBQWdDSTtFQUNJLGlCQUFBO0FBOUJSO0FBa0NJO0VBQ0ksYUFBQTtBQWhDUjtBQXVDSTtFQUNJLGFBQUE7QUFwQ1I7QUF3Q0k7RUFDSSxpQkFBQTtBQXRDUjtBQTJDQTtFQUVJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF6Q0o7QUFnREk7RUFDSSwwQkFBQTtBQTdDUjtBQWtEQTtFQUNJO0lBQ0ksZUFBQTtFQS9DTjtBQUNGO0FBa0RBO0VBQ0k7SUFDSSxlQUFBO0VBaEROO0FBQ0Y7QUFtREE7RUFDSTtJQUNJLGVBQUE7RUFqRE47QUFDRjtBQXNEUTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQXBEWjtBQTBESTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUF2RFI7QUEwREk7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBeERSO0FBaUVBO0VBQ0ksNkJBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUE5REo7QUFxRUE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBbEVKO0FBcUVBO0VBQ0ksd0NBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWxFSjtBQXNFQTtFQUNJLGtCQUFBO0FBbkVKO0FBd0VBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFyRUo7QUF5RUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBdEVKO0FBMEVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUF2RUo7QUE0RUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBekVKO0FBNkVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBRUEsb0NBQUE7QUEzRUo7QUE4RUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEzRUo7QUErRUE7RUFFSTs7SUFFSSxlQUFBO0lBQ0EsZ0JBQUE7RUE3RU47QUFDRjtBQWdGQTs7O0VBR0ksaUJBQUE7QUE5RUoiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyp7XG4gICAgZm9udC1mYW1pbHk6XCJzb2ZpYVwiLFwic29maWFGYWxsYmFja1wiLGFyaWFsLHNhbnMtc2VyaWY7XG4gIH1cbiAgKi9cblxuKjpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbip7XG4gICAgZm9udC1mYW1pbHk6ICdzb2ZpYScgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLnRvb2xiYXIge1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgXG4gIFxuICAgIC5jb250ZW50IHtcbiAgICAgIHBhZGRpbmc6MHB4O1xuICAgIH1cbiAgXG4gIFxuICAgIC5zcGFjZXIge1xuICAgICAgZmxleDogMTtcbiAgICB9XG4gIFxuICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXG4gICAgICAudG9vbGJhcntcbiAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIH1cbiAgXG4gICBcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAudG9vbGJhcntcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnByb21vdGlvbi10ZXh0e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5wcm9tb3Rpb24tdGV4dC1yaWdodHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICB3aGl0ZTtcbiAgICAgIH1cbiAgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cblxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLm5hdmJhci1zdGlja3kge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1iYXItaWNvbiB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAvLyBtYXJnaW4tcmlnaHQ6IC0zMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1iYXItaW5wdXQge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG4gICAgICAgIC8vIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAudG9wLW1lbnUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5tZW51LXRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuXG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSB7XG4gICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuICAgIC5tZW51LXRleHQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgY29sb3I6ICMyMTFlMjI7XG4gICAgfVxuXG4gICAgLm5hdmJhciB7XG4gICAgICAgIGhlaWdodDogMTEwcHg7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1iYXItaWNvbiB7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1iYXItaW5wdXQge1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBncmV5O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG5cbiAgICB9XG5cbn1cblxuXG4uYXBwLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmlucHV0LWdyb3VwIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xufVxuXG5cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAudG9wLW1lbnUge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6MCU7XG4gICAgICAgIC8vIHBhZGRpbmctcmlnaHQ6NSU7XG4gICAgfVxufVxuXG4ubWVudS1idXR0b24ge1xuICAgIC51bmhvdmVyZWQge1xuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcblxuICAgIH1cblxuICAgIC5ob3ZlcmVkIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcblxuICAgIH1cbn1cblxuXG4ubWVudS1idXR0b246aG92ZXIge1xuICAgIC51bmhvdmVyZWQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuXG4gICAgfVxuXG4gICAgLmhvdmVyZWQge1xuICAgICAgICBkaXNwbGF5OiBjb250ZW50cztcblxuICAgIH1cbn1cblxuLnRvcC1tZW51LWl0ZW0ge1xuICAgIC8vIHdpZHRoOiBjYWxjKDEwMCUgLyA3KTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udG9wLW1lbnUtaXRlbTpob3ZlciB7XG4gICAgLy8gYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlOWU1O1xuXG4gICAgLlRvcE5hdl90b3BOYXZMaW5rXzEzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAudG9wLW1lbnUtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIC50b3AtbWVudS1pdGVtIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ5OXB4KSB7XG4gICAgLnRvcC1tZW51LWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG4udG9wLW1lbnUtaXRlbSB7XG4gICAgc3BhbiB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tZW51LXNob3cge1xuICAgIC5Ub3BOYXZfZHJvcERvd25fNWYge1xuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzIGVhc2U7XG4gICAgfVxuXG4gICAgLmhlYWRlcl9zaGltXzBjIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDM1MHB4KTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMTI1NnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xuICAgIH1cbn1cblxuLy8gLm1lbnUtc2hvd3tcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbi8vICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuXG4vLyB9XG4ubWVudS1oaWRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41cyBlYXNlO1xuICAgIHdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuXG5cblxuLlRvcE5hdl9kcm9wRG93bl81ZiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmhlYWRlcl9zaGltXzBjIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA1MSwgNTUsIC40NSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogOTk4O1xuICAgIGhlaWdodDogMTEyNTZweDtcbn1cblxuXG4uVG9wTmF2X3JldGFpbERyb3BEb3duXzE0IHtcbiAgICBwYWRkaW5nOiAzMnB4IDI0cHg7XG59XG5cblxuXG4uRHJvcERvd25fc3ViTWVudV9hNSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG4uRHJvcERvd25fY29sdW1uXzI3IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xuICAgIHdpZHRoOiAyNSU7XG59XG5cblxuLkRyb3BEb3duX2NvbHVtblRpdGxlX2VjIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGNvbG9yOiAjMmYzMzM3O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuXG4uRHJvcERvd25fY29sdW1uTGlua19jNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzYyNjY2OTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJmMzMzNztcbiAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgcGFkZGluZzogMCAwIDJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuXG4uVG9wTmF2X3RvcE5hdkxpbmtfMTMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLy8gdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5fMXF4OXgzZzAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyODBweCkge1xuXG4gICAgLl8xcXg5eDNnMCxcbiAgICAuXzFxeDl4M2cxLl8xcXg5eDNnMS5fMXF4OXgzZzEge1xuICAgICAgICB3aWR0aDogMS44NzVyZW07XG4gICAgICAgIGhlaWdodDogMS44NzVyZW07XG4gICAgfVxufVxuXG4uXzE2cTk4ZXkyXzYxMDEsXG4uXzE2cTk4ZXkzXzYxMDEsXG4uXzE2cTk4ZXk0XzYxMDEge1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xufSJdfQ== */"] });


/***/ }),

/***/ "N8wx":
/*!**************************************************!*\
  !*** ./src/app/views/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");







function OrdersComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 15);
} }
function OrdersComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
} }
function OrdersComponent_div_18_ng_container_15_tr_11_input_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 44);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.shipping.state);
} }
function OrdersComponent_div_18_ng_container_15_tr_11_input_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 45);
} }
function OrdersComponent_div_18_ng_container_15_tr_11_input_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 46);
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.shipping.postal_code);
} }
function OrdersComponent_div_18_ng_container_15_tr_11_input_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 47);
} }
function OrdersComponent_div_18_ng_container_15_tr_11_tr_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r20.product, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r20.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r17.getProductsTotalPrice(item_r20.price, item_r20.quantity), " ");
} }
function OrdersComponent_div_18_ng_container_15_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Secondary Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Unit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OrdersComponent_div_18_ng_container_15_tr_11_input_46_Template, 1, 1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OrdersComponent_div_18_ng_container_15_tr_11_input_47_Template, 1, 0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, OrdersComponent_div_18_ng_container_15_tr_11_input_52_Template, 1, 1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, OrdersComponent_div_18_ng_container_15_tr_11_input_53_Template, 1, 0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Order Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Reorder Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, OrdersComponent_div_18_ng_container_15_tr_11_tr_83_Template, 10, 4, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("border: 1px solid  ", ctx_r12.bizService.get_background_color(), ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.shipping.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.shipping.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.shipping.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.shipping.address_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r10.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r10.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r10.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r10.products);
} }
function OrdersComponent_div_18_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_div_18_ng_container_15_Template_tr_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const item_r10 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.selectItem(item_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrdersComponent_div_18_ng_container_15_tr_11_Template, 85, 16, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.shippingItemsFormat(item_r10.products));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, item_r10.created, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.selected_item == item_r10.id);
} }
function OrdersComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrdersComponent_div_18_ng_container_15_Template, 12, 8, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ordersPending);
} }
function OrdersComponent_i_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 15);
} }
function OrdersComponent_i_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
} }
function OrdersComponent_div_30_ng_container_15_tr_11_input_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 44);
} if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25.shipping.state);
} }
function OrdersComponent_div_30_ng_container_15_tr_11_input_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 45);
} }
function OrdersComponent_div_30_ng_container_15_tr_11_input_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 46);
} if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25.shipping.postal_code);
} }
function OrdersComponent_div_30_ng_container_15_tr_11_input_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 47);
} }
function OrdersComponent_div_30_ng_container_15_tr_11_tr_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r35.product, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r35.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r32.getProductsTotalPrice(item_r35.price, item_r35.quantity), " ");
} }
function OrdersComponent_div_30_ng_container_15_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Secondary Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Unit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OrdersComponent_div_30_ng_container_15_tr_11_input_46_Template, 1, 1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OrdersComponent_div_30_ng_container_15_tr_11_input_47_Template, 1, 0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, OrdersComponent_div_30_ng_container_15_tr_11_input_52_Template, 1, 1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, OrdersComponent_div_30_ng_container_15_tr_11_input_53_Template, 1, 0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Order Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Reorder Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, OrdersComponent_div_30_ng_container_15_tr_11_tr_83_Template, 10, 4, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("border: 1px solid ", ctx_r27.bizService.get_background_color(), ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25.shipping.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25.shipping.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25.shipping.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25.shipping.address_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r25.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r25.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r25.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r25.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r25.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r25.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r25.products);
} }
function OrdersComponent_div_30_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_div_30_ng_container_15_Template_tr_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const item_r25 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.selectItem(item_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrdersComponent_div_30_ng_container_15_tr_11_Template, 85, 16, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r25.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r25.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.shippingItemsFormat(item_r25.products));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, item_r25.created, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.selected_item == item_r25.id);
} }
function OrdersComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrdersComponent_div_30_ng_container_15_Template, 12, 8, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.ordersProgress);
} }
function OrdersComponent_i_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 15);
} }
function OrdersComponent_i_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
} }
function OrdersComponent_div_42_ng_container_15_tr_11_input_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 44);
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40.shipping.state);
} }
function OrdersComponent_div_42_ng_container_15_tr_11_input_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 45);
} }
function OrdersComponent_div_42_ng_container_15_tr_11_input_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 46);
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40.shipping.postal_code);
} }
function OrdersComponent_div_42_ng_container_15_tr_11_input_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 47);
} }
function OrdersComponent_div_42_ng_container_15_tr_11_tr_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r50 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r50.product, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r50.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r50.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r47.getProductsTotalPrice(item_r50.price, item_r50.quantity), " ");
} }
function OrdersComponent_div_42_ng_container_15_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Secondary Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Unit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, OrdersComponent_div_42_ng_container_15_tr_11_input_46_Template, 1, 1, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, OrdersComponent_div_42_ng_container_15_tr_11_input_47_Template, 1, 0, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, OrdersComponent_div_42_ng_container_15_tr_11_input_52_Template, 1, 1, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, OrdersComponent_div_42_ng_container_15_tr_11_input_53_Template, 1, 0, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Order Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Reorder Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Product Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, OrdersComponent_div_42_ng_container_15_tr_11_tr_83_Template, 10, 4, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("border: 1px solid  ", ctx_r42.bizService.get_background_color(), ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40.shipping.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40.shipping.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40.shipping.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40.shipping.address_2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r40.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r40.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r40.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r40.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r40.shipping.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r40.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r40.products);
} }
function OrdersComponent_div_42_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_div_42_ng_container_15_Template_tr_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const item_r40 = ctx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.selectItem(item_r40.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OrdersComponent_div_42_ng_container_15_tr_11_Template, 85, 16, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r40.order_no);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r40.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.shippingItemsFormat(item_r40.products));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 5, item_r40.created, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.selected_item == item_r40.id);
} }
function OrdersComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrdersComponent_div_42_ng_container_15_Template, 12, 8, "ng-container", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.ordersCompleted);
} }
class OrdersComponent {
    constructor(apiService, userInfoService, bizService) {
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.ordersPending = [];
        this.ordersProgress = [];
        this.ordersCompleted = [];
        this.initChecked = false;
        this.show_pending_orders = false;
        this.show_progress_orders = false;
        this.show_completed_orders = false;
        this.customer = "customer";
        this.business = "business";
        this.catalog = "catalog";
    }
    ngOnInit() {
        this.apiService.getOrders({ "status": "Pending", "customer": this.userInfoService.getCustomerId() }).subscribe(res => {
            this.ordersPending = res;
        }, err => { });
        this.apiService.getOrders({ "status": "Acknowledged", "customer": this.userInfoService.getCustomerId() }).subscribe(res => {
            this.ordersProgress = res;
        }, err => { });
        this.apiService.getOrders({ "status": "Completed", "customer": this.userInfoService.getCustomerId() }).subscribe(res => {
            this.ordersCompleted = res;
        }, err => { });
        this.type = this.bizService.getBizType();
    }
    getProductsTotalPrice(price, quantity) {
        return Math.round((parseFloat(price)) * (parseFloat(quantity))).toFixed(2);
    }
    setShowPendingOrders() {
        if (this.show_pending_orders === false) {
            this.show_pending_orders = true;
        }
        else {
            this.show_pending_orders = false;
        }
    }
    setShowProgressOrders() {
        if (this.show_progress_orders === false) {
            this.show_progress_orders = true;
        }
        else {
            this.show_progress_orders = false;
        }
    }
    setShowCompletedOrders() {
        if (this.show_completed_orders === false) {
            this.show_completed_orders = true;
        }
        else {
            this.show_completed_orders = false;
        }
    }
    changeBorderColor() {
    }
    selectItem(id) {
        if (this.selected_item == id) {
            this.selected_item = "";
        }
        else {
            this.selected_item = id;
        }
    }
    toString(i) {
        return i.toString();
    }
    shippingItemsFormat(items) {
        if (items.length > 1) {
            return "(" + (items.length).toString() + ") Items";
        }
        else if (items.length == 1) {
            return items[0].product;
        }
        else {
            return "(0) Items";
        }
    }
    selectAll(initChecked, items) {
        if (!initChecked) {
            items.forEach((f) => {
                f.isSelected = true;
            });
        }
        else {
            items.forEach((f) => {
                f.isSelected = false;
            });
        }
    }
}
OrdersComponent.ɵfac = function OrdersComponent_Factory(t) { return new (t || OrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"])); };
OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrdersComponent, selectors: [["app-orders"]], decls: 45, vars: 9, consts: [[2, "min-height", "100vh", "display", "flex", "flex-direction", "column"], [1, "container-fluid", 2, "margin-top", "50px", "flex", "1"], [1, "row", "main-content"], [1, "card", "order-card", 2, "border", "none"], [1, "card-body", 2, "padding-top", "100px"], [1, "row", "info-title-section"], [1, "col-lg-12", "col-sm-12", "col-12"], [1, "row"], [1, "info-title"], [2, "float", "right", "margin-top", "-15px", 3, "click"], ["class", "fa-solid fa-plus", "style", "font-family: fontAwesome;font-size: larger;", 4, "ngIf"], ["class", "fa-solid fa-minus", "style", "font-family: fontAwesome;font-size: larger;", 4, "ngIf"], [1, "line"], ["class", "row", 4, "ngIf"], [2, "bottom", "0", "width", "100%"], [1, "fa-solid", "fa-plus", 2, "font-family", "fontAwesome", "font-size", "larger"], [1, "fa-solid", "fa-minus", 2, "font-family", "fontAwesome", "font-size", "larger"], [1, "table-responsive"], [1, "table", "datanew"], [4, "ngFor", "ngForOf"], [1, "order-item", 3, "click"], [1, "text-bolds"], [4, "ngIf"], ["colspan", "5"], [1, "card"], [1, "row", "form-info"], [1, "col-lg-3", "col-sm-3", "col-12"], [1, "form-group"], ["disabled", "", "type", "text", "placeholder", "GLP7001-0001", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Troy Speirs", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "1-999-999-9999", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Company Name", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "33453 Administrative Avenue ", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Suite 320", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "$7876", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Utah", "class", "round-input", 3, "value", 4, "ngIf"], ["disabled", "", "type", "text", "placeholder", "", "class", "round-input", 4, "ngIf"], ["disabled", "", "type", "text", "placeholder", "8788", "class", "round-input", 3, "value", 4, "ngIf"], ["disabled", "", "type", "text", "class", "round-input", 4, "ngIf"], [1, "row", 2, "text-align", "center", "font-size", "x-large", "margin-top", "30px"], [1, "row", 2, "text-align", "center", "font-size", "x-large"], [1, "col-lg-9", "col-sm-9", "col-12"], [1, "table-responsive", 2, "margin-top", "30px"], ["class", "order-item", 4, "ngFor", "ngForOf"], ["disabled", "", "type", "text", "placeholder", "Utah", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "", 1, "round-input"], ["disabled", "", "type", "text", "placeholder", "8788", 1, "round-input", 3, "value"], ["disabled", "", "type", "text", 1, "round-input"], [1, "order-item"]], template: function OrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_Template_div_click_13_listener() { return ctx.setShowPendingOrders(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OrdersComponent_i_14_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OrdersComponent_i_15_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OrdersComponent_div_18_Template, 16, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_Template_div_click_25_listener() { return ctx.setShowProgressOrders(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, OrdersComponent_i_26_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, OrdersComponent_i_27_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, OrdersComponent_div_30_Template, 16, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrdersComponent_Template_div_click_37_listener() { return ctx.setShowCompletedOrders(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, OrdersComponent_i_38_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, OrdersComponent_i_39_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, OrdersComponent_div_42_Template, 16, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "footer", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_pending_orders === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_pending_orders === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ordersPending.length > 0 && ctx.show_pending_orders === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_progress_orders === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_progress_orders === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ordersProgress.length > 0 && ctx.show_progress_orders === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_completed_orders === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_completed_orders === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ordersCompleted.length > 0 && ctx.show_completed_orders === true);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".main[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding-left: 10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  margin-left: 30px;\n  font-size: xx-large;\n}\n\n.card-round[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n  border-radius: 50px;\n  height: 100%;\n  padding: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-weight: 500;\n  font-size: medium;\n}\n\n.info-title-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n@media (min-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 200px;\n  padding: 2rem;\n  text-align: center;\n  border: dashed 1px #979797;\n  position: relative;\n  margin: 0 auto;\n}\n\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: white;\n  width: 183px;\n  height: 44px;\n  border-radius: 21.5px;\n  background-color: #db202f;\n  padding: 8px 16px;\n}\n\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: #38424c;\n}\n\n.dash[_ngcontent-%COMP%] {\n  background-color: #797575;\n  height: 3px;\n  width: 15px;\n  border-radius: 10px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #7a7878;\n  height: 3px;\n  width: 100%;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  height: 50px;\n  padding-left: 10px;\n  border: none;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   .text-area-height[_ngcontent-%COMP%] {\n  height: 75%;\n}\n\n.img-table[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.table-borderless[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.submit-button-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  float: right;\n  height: 50px;\n  padding: auto;\n  border-radius: 40px;\n  font-size: large;\n}\n\n.upload-image-input[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 250px;\n  border-radius: 20px;\n  border: 3px dashed #dad6d6;\n}\n\n.image-upload-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0 !important;\n  top: auto !important;\n}\n\n.background-image-upload[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -50px 0 0 -50px;\n}\n\n.fade[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0.5;\n  background-color: #f1f1f1;\n}\n\n.fileover[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n}\n\n.files-list[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5rem;\n  justify-content: space-between;\n  align-items: center;\n  border: dashed 1px #979797;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-grow: 1;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 0.5rem;\n  cursor: pointer;\n  align-self: flex-end;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #353f4a;\n  margin: 0;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  color: #a4a4a4;\n  margin: 0;\n  margin-bottom: 0.25rem;\n}\n\n.files-list[_ngcontent-%COMP%]   .single-file[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.order-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.order-item[_ngcontent-%COMP%]:hover {\n  background-color: #c7c4c4;\n}\n\n@media (max-width: 991.98px) {\n  .order-card[_ngcontent-%COMP%] {\n    padding: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSUo7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFJSjs7QUFEQTtFQUNJLG1CQUFBO0FBSUo7O0FBREE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsbUJBQUE7RUFJTjtBQUNGOztBQUZBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUlKOztBQUZJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFJTjs7QUFESTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUdOOztBQUFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVOOztBQUdBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUY7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUdJO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQVI7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBS0E7RUFDSSxXQUFBO0FBRko7O0FBUUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQUxEOztBQVNBO0VBQ0ksV0FBQTtBQU5KOztBQVVBO0VBQ0ksa0JBQUE7QUFQSjs7QUFVQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFQSjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFURjs7QUFXQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBUkY7O0FBV0E7RUFDQSx5QkFBQTtBQVJBOztBQVlBO0VBQ0Esa0JBQUE7QUFUQTs7QUFXQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFVQSxhQUFBO0VBQ0EsWUFBQTtBQWxCRjs7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQVBKOztBQWNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFaSjs7QUFlRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFiSjs7QUFnQkU7RUFDRSxXQUFBO0FBZEo7O0FBbUJBO0VBQ0ksdUJBQUE7QUFoQko7O0FBb0JBO0VBQ0ksZUFBQTtBQWpCSjs7QUFvQkE7RUFDSSx5QkFBQTtBQWpCSjs7QUFzQkE7RUFHRTtJQUNFLHVCQUFBO0VBckJGO0FBQ0YiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxubGFiZWx7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6MzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLnBhZ2UtdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDozMHB4O1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG4uY2FyZC1yb3VuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGQkY5O1xuICAgIGJvcmRlci1yYWRpdXM6NTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLmluZm8tdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuXG59XG4uaW5mby10aXRsZS1zZWN0aW9ue1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCl7XG4gICAgLm1haW4tY29udGVudHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIH1cbn1cbi5jb250YWluZXIge1xuICAgIHdpZHRoOiA0NTBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogZGFzaGVkIDFweCAjOTc5Nzk3O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgXG4gICAgaW5wdXQge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICBcbiAgICBsYWJlbCB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB3aWR0aDogMTgzcHg7XG4gICAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMS41cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGIyMDJmO1xuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgfVxuICBcbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMzODQyNGM7XG4gICAgfVxuICB9XG4gIFxuXG4uZGFzaHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIxLCAxMTcsIDExNyk7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmxpbmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjIsIDEyMCwgMTIwKTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG4uZm9ybS1pbmZve1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZm9ybS1ncm91cHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICAgIC5yb3VuZC1pbnB1dHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuLmZ1bGwtaGVpZ2h0e1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuXG4uZm9ybS1ncm91cCAudGV4dC1hcmVhLWhlaWdodHtcbiAgICBoZWlnaHQ6IDc1JTtcbn1cblxuXG5cblxuLmltZy10YWJsZXtcbiB3aWR0aDogMTZweDtcbiBoZWlnaHQ6IDE2cHg7XG59XG5cblxuLnRhYmxlLWJvcmRlcmxlc3N7XG4gICAgYm9yZGVyOjBweDtcbn1cblxuXG4uc3VibWl0LWJ1dHRvbi1zZWN0aW9ue1xuICAgIHBhZGRpbmctdG9wOjEwMHB4O1xufVxuXG4uYnRuLXN1Ym1pdHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5cblxuLnVwbG9hZC1pbWFnZS1pbnB1dHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAzcHggZGFzaGVkIHJnYigyMTgsIDIxNCwgMjE0KTtcbn1cblxuLmltYWdlLXVwbG9hZC1pY29ue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB0b3A6IGF1dG8gIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLWltYWdlLXVwbG9hZCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC01MHB4IDAgMCAtNTBweDtcbn1cblxuLmZhZGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC41O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7IDtcbn1cblxuLmZpbGVvdmVyIHtcbmJhY2tncm91bmQtY29sb3I6ICNGMEZCRjk7XG59XG5cblxuLmZpbGVzLWxpc3Qge1xubWFyZ2luLXRvcDogMS41cmVtO1xuXG4uc2luZ2xlLWZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyOiBkYXNoZWQgMXB4ICM5Nzk3OTc7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG5cbiAgLmRlbGV0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuXG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xuXG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzM1M2Y0YTtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAuc2l6ZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNhNGE0YTQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gIH1cblxuICAuaW5mbyB7XG4gICAgd2lkdGg6IDEwMCVcbiAgfVxufVxufVxuXG5pbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG4ub3JkZXItaXRlbXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcmRlci1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAxOTYsIDE5Nik7XG59XG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXG5cblxuICAub3JkZXItY2FyZHtcbiAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xuICB9XG5cbn0iXX0= */"] });


/***/ }),

/***/ "OXAH":
/*!********************************************************************!*\
  !*** ./src/app/views/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: PasswordValidator, ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ForgotPasswordComponent_div_6_label_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "check your mail for the response");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_6_label_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "invalid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_6_label_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
function ForgotPasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Forgot ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Enter the email address associated with your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ForgotPasswordComponent_div_6_label_14_Template, 2, 0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ForgotPasswordComponent_div_6_label_15_Template, 2, 0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ForgotPasswordComponent_div_6_label_16_Template, 2, 0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_6_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.submitEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.validateEmailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.successResponse === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.successResponse === 2 || ctx_r0.validateEmailForm.get("email").hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.validateEmailForm.get("email").hasError("required") && ctx_r0.validateEmailForm.get("email").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx_r0.bizService.get_background_color()));
} }
function ForgotPasswordComponent_div_7_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Minimum length is 8 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_7_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " At least one uppercase letter is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_7_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " At least one special character is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_7_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " At least one number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_7_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " passwords do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password Rules:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "8 minimun characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "at least one number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "at least one special character (!@#$%^&*)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "at least one capital");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ForgotPasswordComponent_div_7_small_23_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ForgotPasswordComponent_div_7_small_24_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ForgotPasswordComponent_div_7_small_25_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ForgotPasswordComponent_div_7_small_26_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ForgotPasswordComponent_div_7_small_30_Template, 2, 0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPasswordComponent_div_7_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.resetPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Reset Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("password").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("password").hasError("uppercase"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("password").hasError("specialCharacter"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("password").hasError("number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.passwordForm.get("confirm_password").hasError("passwordMismatch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx_r1.bizService.get_background_color()));
} }
function ForgotPasswordComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " has been ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Successful!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Your password has been reset successfully! Now login with your new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx_r2.bizService.getBizName(), "/login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r2.bizService.get_background_color()));
} }
class PasswordValidator {
    static hasMinimumLength(password) {
        return password.length >= 8;
    }
    static hasUpperCase(password) {
        return /[A-Z]/.test(password);
    }
    static hasSpecialCharacter(password) {
        return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
    }
    static hasNumber(password) {
        return /\d/.test(password);
    }
}
class ForgotPasswordComponent {
    constructor(apiService, formBuilder, router, userInfoService, bizService, location, route) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.location = location;
        this.route = route;
        this.submitted = false;
        this.successResponse = 0;
        this.passwordForm = this.formBuilder.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            activation_token: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
        this.validateEmailForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]]
        });
        this.passwordForm.get('password').valueChanges.subscribe(() => {
            this.validatePassword();
        });
        this.passwordForm.get('confirm_password').valueChanges.subscribe(() => {
            this.validatePassword();
        });
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.displaySection = params.section_no ? +params.section_no : 1;
            this.activationCode = params.activation_code;
        });
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    resetPassword() {
        this.passwordForm.get('activation_token').setValue(this.activationCode);
        if (this.passwordForm.valid) {
            this.apiService.resetPassword(this.passwordForm.value).subscribe(res => {
                if (res) {
                    console.log(res);
                    this.nextSection();
                }
            }, err => {
                console.log(err);
            });
        }
    }
    validatePassword() {
        const password = this.passwordForm.get('password').value;
        const confirmPassword = this.passwordForm.get('confirm_password').value;
        // Reset errors
        this.passwordForm.get('password').setErrors(null);
        this.passwordForm.get('confirm_password').setErrors(null);
        // Check rules and set errors accordingly
        if (!PasswordValidator.hasMinimumLength(password)) {
            this.passwordForm.get('password').setErrors({ minlength: true });
        }
        if (!PasswordValidator.hasUpperCase(password)) {
            this.passwordForm.get('password').setErrors({ uppercase: true });
        }
        if (!PasswordValidator.hasSpecialCharacter(password)) {
            this.passwordForm.get('password').setErrors({ specialCharacter: true });
        }
        if (!PasswordValidator.hasNumber(password)) {
            this.passwordForm.get('password').setErrors({ number: true });
        }
        if (password !== confirmPassword) {
            this.passwordForm.get('confirm_password').setErrors({ passwordMismatch: true });
        }
    }
    submitEmail() {
        console.log(this.validateEmailForm.value);
        if (this.validateEmailForm.valid) {
            this.apiService.validateCustomerEmail(this.validateEmailForm.value).subscribe(res => {
                if (res) {
                    console.log(res);
                    this.successResponse = 1;
                }
            }, err => {
                console.log(err);
                this.successResponse = 2;
            });
        }
    }
    nextSection() {
        if (this.displaySection < 3)
            this.displaySection++;
    }
    submitLogin() {
        this.submitted = true;
        this.apiService.login(this.loginForm.value).subscribe(res => {
            this.submitted = false;
            if (res.token) {
                this.userInfoService.saveUserInfo(res);
                // this.router.navigateByUrl(this.bizService.getBizId())
                this.location.back();
            }
        }, err => {
            this.submitted = false;
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_5__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 10, vars: 5, consts: [[1, "logo", 3, "href"], ["height", "60px", 3, "src"], [1, "container-fluid"], [2, "padding", "0px"], [1, "row", 2, "display", "flex", "flex-direction", "column", "justify-content", "center", "align-items", "center", "margin-top", "30px !important"], ["style", "max-width: 500px;", 4, "ngIf"], [2, "padding-top", "20px"], [2, "max-width", "500px"], [1, "card", 2, "width", "100%", "border", "none"], [1, "row", 2, "text-align", "center"], [2, "font-weight", "700", "font-size", "50px"], [1, "card-body"], [3, "formGroup"], [1, "row", 2, "margin-top", "20px"], [1, "form-group"], [2, "color", "#525252"], ["formControlName", "email", "type", "email", "placeholder", "Enter Email Address", 1, "round-input"], ["style", "color: #c64949;", 4, "ngIf"], [1, "row", 2, "margin-top", "30px", "padding-left", "10px", "padding-right", "10px", "display", "flex", "justify-content", "center"], [1, "btn", "login-button", 3, "ngStyle", "click"], [2, "color", "#c64949"], [1, "row"], [2, "display", "flex", "flex-direction", "column", "margin-bottom", "20px"], [2, "font-size", "10px", "padding-left", "10px"], [2, "font-size", "10px", "padding-left", "15px"], ["formControlName", "password", "type", "password", "placeholder", "New Password", 1, "round-input"], ["style", "color: red; font-size: 12px; padding-left: 15px;", 4, "ngIf"], ["formControlName", "confirm_password", "type", "password", "placeholder", "Confirm Password", 1, "round-input"], [2, "color", "red", "font-size", "12px", "padding-left", "15px"], [2, "color", "#525252", "text-align", "center"], [1, "btn", "login-button", 3, "routerLink", "ngStyle"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ForgotPasswordComponent_div_6_Template, 20, 7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ForgotPasswordComponent_div_7_Template, 34, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ForgotPasswordComponent_div_8_Template, 15, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "footer", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.bizService.get_webstore_link(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.bizService.get_company_logo(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displaySection === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displaySection === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.displaySection === 3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".app-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 40px;\n}\n\n@media (min-width: 991.98px) {\n  .app-title[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .app-title[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  height: 50px;\n  padding-left: 20px;\n  border: 1px solid #C1C7D6;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%]:focus {\n  border: 2px solid #C1C7D6;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border: 2px solid #C1C7D6;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  height: 50px;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.login-button[_ngcontent-%COMP%]:hover {\n  border: gray solid 1px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUdBO0VBQ0U7SUFDRSxpQkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGlCQUFBO0VBREY7QUFDRjs7QUFPRTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFMSjs7QUFRRTtFQUNFLHlCQUFBO0FBTko7O0FBU0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFQSjs7QUFXQTtFQUNFLGFBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVJGOztBQWNBO0VBQ0Usc0JBQUE7QUFYRjs7QUFjQTtFQUNFLGdCQUFBO0FBWEYiLCJmaWxlIjoiZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmFwcC10aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5hcHAtdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5cblxuLmZvcm0tZ3JvdXAge1xuXG4gIC5yb3VuZC1pbnB1dCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MxQzdENjtcbiAgfVxuXG4gIC5yb3VuZC1pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MxQzdENjtcbiAgfVxuXG4gIC5yb3VuZC1pbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDMUM3RDY7XG4gIH1cbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBncmlkO1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmc6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cblxufVxuXG5cbi5sb2dpbi1idXR0b246aG92ZXIge1xuICBib3JkZXI6IGdyYXkgc29saWQgMXB4O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"] });


/***/ }),

/***/ "PUU/":
/*!**********************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");









function ContactUsComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " firstName is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactUsComponent_small_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " lastName is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactUsComponent_small_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactUsComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Invalid Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactUsComponent_small_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " phone is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactUsComponent_small_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " message is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
class ContactUsComponent {
    constructor(messageService, formBuilder, bizService, apiService) {
        this.messageService = messageService;
        this.formBuilder = formBuilder;
        this.bizService = bizService;
        this.apiService = apiService;
        this.contactUsForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    submitForm() {
        if (this.contactUsForm.valid) {
            this.apiService.contactUs(this.contactUsForm.value).subscribe(res => {
                if (res) {
                    this.showSuccessAlert();
                }
            }, err => {
                this.showErrorAlert();
            });
        }
    }
    showSuccessAlert() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent successfully' });
    }
    showErrorAlert() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message' });
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 51, vars: 13, consts: [[2, "min-height", "100vh", "display", "flex", "flex-direction", "column", "max-width", "100vw", "overflow-x", "hidden"], [1, "row", "main-content", 2, "margin-top", "220px", "margin-bottom", "50px"], [2, "padding-left", "100px", "padding-right", "100px", "display", "flex", "column-gap", "30px"], [2, "flex", "1"], [2, "font-size", "24px", "font-weight", "bold"], [2, "border", "1px solid #C1C7D6"], [3, "formGroup", "ngSubmit"], ["contactForm", "ngForm"], [2, "display", "flex", "column-gap", "20px"], [1, "form-group", 2, "flex", "1"], ["for", "firstName"], ["placeholder", "Enter First Name", "type", "text", "id", "firstName", "formControlName", "firstName", 1, "form-control", 2, "border-radius", "15px"], ["style", "color: red; font-size: 12px; padding-left: 15px;", 4, "ngIf"], ["for", "lastName"], ["placeholder", "Enter Last Name", "type", "text", "id", "lastName", "formControlName", "lastName", 1, "form-control", 2, "border-radius", "15px"], ["for", "email"], ["placeholder", "Enter Email", "type", "email", "id", "email", "formControlName", "email", 1, "form-control", 2, "border-radius", "15px"], ["for", "phone"], ["placeholder", "Enter Phone Number", "type", "tel", "id", "phone", "formControlName", "phone", 1, "form-control", 2, "border-radius", "15px"], [1, "form-group"], ["for", "message"], ["placeholder", "Enter Message", "id", "message", "rows", "4", "formControlName", "message", 1, "form-control", 2, "border-radius", "15px"], [2, "display", "flex", "justify-content", "center", "flex-direction", "column", "align-items", "center"], ["type", "submit", 1, "", 2, "border-radius", "20px", "width", "300px", "border", "none", "color", "white", "padding", "15px", 3, "ngStyle"], [3, "ngStyle"], [2, "padding-top", "20px", "bottom", "0", "width", "100%"], [2, "color", "red", "font-size", "12px", "padding-left", "15px"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Contact us today if you have any questions or inquiries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_12_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "First Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ContactUsComponent_small_19_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ContactUsComponent_small_24_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ContactUsComponent_small_30_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ContactUsComponent_small_31_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ContactUsComponent_small_36_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, ContactUsComponent_small_41_Template, 2, 0, "small", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Email us for other inquires ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Send us an email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "footer", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactUsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contactUsForm.get("firstName").hasError("required") && ctx.contactUsForm.get("firstName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contactUsForm.get("lastName").hasError("required") && ctx.contactUsForm.get("lastName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contactUsForm.get("email").hasError("required") && ctx.contactUsForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contactUsForm.get("email").hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contactUsForm.get("phone").hasError("required") && ctx.contactUsForm.get("phone").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contactUsForm.get("message").hasError("required") && ctx.contactUsForm.get("message").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx.bizService.get_background_color()));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_7__["CustomerFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { "color": a0 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
class LoginComponent {
    constructor(apiService, formBuilder, router, userInfoService, bizService, location) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.location = location;
        this.submitted = false;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            webstore: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    submitLogin() {
        this.loginForm.get('webstore').setValue(this.bizService.get_company_id());
        this.submitted = true;
        this.apiService.login(this.loginForm.value).subscribe(res => {
            this.submitted = false;
            if (res.token) {
                this.userInfoService.saveUserInfo(res);
                // this.router.navigateByUrl(this.bizService.getBizId())
                this.location.back();
            }
        }, err => {
            this.submitted = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_5__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 39, vars: 16, consts: [[1, "logo", 3, "href"], ["height", "60px", 3, "src"], [1, "container-fluid"], [2, "padding", "0px"], [1, "row", 2, "justify-content", "center", "margin-top", "30px !important"], [2, "max-width", "500px"], [1, "card", 2, "width", "100%", "border", "none"], [1, "row", 2, "text-align", "center"], [2, "font-weight", "700", "font-size", "xx-large"], [1, "card-body"], [3, "formGroup"], [1, "row", 2, "margin-top", "20px"], [1, "form-group"], ["formControlName", "email", "type", "email", "placeholder", "Email Address", 1, "round-input"], ["formControlName", "password", "type", "password", "placeholder", "Enter your password", 1, "round-input"], [1, "row", 2, "margin-top", "20px", "display", "block"], [1, "fa-regular", "fa-circle", 3, "ngStyle"], [2, "padding-left", "10px"], [2, "float", "right", "width", "fit-content", "cursor", "pointer", 3, "routerLink", "ngStyle"], [1, "row", 2, "margin-top", "30px", "padding-left", "10px", "padding-right", "10px"], [1, "btn", "login-button", 3, "ngStyle", "click"], [2, "float", "right", "width", "fit-content", 3, "ngStyle"], [2, "padding-top", "20px"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Customer Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Remember Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Don't have an Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Request to Become a Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "footer", 22);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.bizService.get_webstore_link(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.bizService.get_company_logo(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx.bizService.getBizName(), "/resetpassword/1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.bizService.get_background_color()));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".app-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 40px;\n}\n\n@media (min-width: 991.98px) {\n  .app-title[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .app-title[_ngcontent-%COMP%] {\n    margin-left: 10px;\n  }\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  height: 50px;\n  padding-left: 20px;\n  border: 2px solid #C1C7D6;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%]:focus {\n  border: 1px solid #C1C7D6;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.login-button[_ngcontent-%COMP%]:hover {\n  border: gray solid 1px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUE7RUFDRTtJQUNJLGlCQUFBO0VBREo7QUFDRjs7QUFJQTtFQUNFO0lBQ0ksaUJBQUE7RUFGSjtBQUNGOztBQVFFO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQU5OOztBQVFFO0VBQ0kseUJBQUE7QUFOTjs7QUFVQTtFQUNFLGFBQUE7QUFQRjs7QUFVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFQSjs7QUFhQTtFQUNDLHNCQUFBO0FBVkQ7O0FBWUE7RUFDRSxnQkFBQTtBQVRGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYXBwLXRpdGxle1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDQwcHg7ICAgIFxufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCkgeyBcbiAgLmFwcC10aXRsZXtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkgeyBcbiAgLmFwcC10aXRsZXtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG5cblxuLmZvcm0tZ3JvdXAge1xuXG4gIC5yb3VuZC1pbnB1dHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNDMUM3RDY7XG4gIH1cbiAgLnJvdW5kLWlucHV0OmZvY3Vze1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0MxQzdENjtcbiAgfVxufVxuXG4uZm9ybS1ncm91cHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmxvZ2luLWJ1dHRvbntcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG5cbn1cblxuXG4ubG9naW4tYnV0dG9uOmhvdmVye1xuIGJvcmRlcjogZ3JheSBzb2xpZCAxcHg7XG59XG5sYWJlbHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"] });


/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../spin-loader/spin-loader.component */ "YcN/");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../directives/dynamic-size.directive */ "BT2B");














function HomeComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 27);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "see more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_app_spin_loader_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spin-loader");
} }
function HomeComponent_div_14_ng_template_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
} if (rf & 2) {
    const sectionOneProduct_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", sectionOneProduct_r9.product.image_urls[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_14_ng_template_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 38);
} }
function HomeComponent_div_14_ng_template_2_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_14_ng_template_2_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionOneProduct_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", sectionOneProduct_r9.product.rating, "| ", sectionOneProduct_r9.product.reviews, " ");
} }
function HomeComponent_div_14_ng_template_2_div_6_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_14_ng_template_2_div_6_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionOneProduct_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", sectionOneProduct_r9.currency, "", sectionOneProduct_r9.first_cost, "");
} }
function HomeComponent_div_14_ng_template_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_14_ng_template_2_div_6_div_3_Template, 6, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_14_ng_template_2_div_6_small_6_Template, 6, 0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MSRP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_14_ng_template_2_div_6_p_11_Template, 2, 2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionOneProduct_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", sectionOneProduct_r9.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sectionOneProduct_r9.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", sectionOneProduct_r9.currency, "", sectionOneProduct_r9.msrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.userInfoService.isLoggedIn());
} }
function HomeComponent_div_14_ng_template_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionOneProduct_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", sectionOneProduct_r9.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sectionOneProduct_r9.product.name, "");
} }
function HomeComponent_div_14_ng_template_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionOneProduct_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", sectionOneProduct_r9.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sectionOneProduct_r9.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("MSRP ", sectionOneProduct_r9.currency, "", sectionOneProduct_r9.msrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", sectionOneProduct_r9.currency, "", sectionOneProduct_r9.first_cost, "");
} }
function HomeComponent_div_14_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_14_ng_template_2_img_3_Template, 1, 1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_14_ng_template_2_div_4_Template, 1, 0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_14_ng_template_2_button_5_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_14_ng_template_2_div_6_Template, 12, 7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_14_ng_template_2_div_7_Template, 3, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_14_ng_template_2_div_8_Template, 9, 6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionOneProduct_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", sectionOneProduct_r9.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sectionOneProduct_r9.product.image_urls.length > 0 && sectionOneProduct_r9.product.image_urls[0].url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sectionOneProduct_r9.product.image_urls.length == 0 || !sectionOneProduct_r9.product.image_urls[0].url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.type === ctx_r8.business);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.type === ctx_r8.catalog);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.type === ctx_r8.customer);
} }
function HomeComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-carousel", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_14_ng_template_2_Template, 9, 7, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.sectionOneProducts)("numVisible", 3)("numScroll", 3)("circular", true)("responsiveOptions", ctx_r3.sectionCarouselResponsiveOptions);
} }
function HomeComponent_a_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "see more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_app_spin_loader_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spin-loader");
} }
function HomeComponent_div_36_ng_template_2_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 37);
} if (rf & 2) {
    const sectionTwoProduct_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", sectionTwoProduct_r26.product.image_urls[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_div_36_ng_template_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 60);
} }
function HomeComponent_div_36_ng_template_2_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_36_ng_template_2_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionTwoProduct_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", sectionTwoProduct_r26.product.rating, "| ", sectionTwoProduct_r26.product.reviews, " ");
} }
function HomeComponent_div_36_ng_template_2_div_6_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login for");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_36_ng_template_2_div_6_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionTwoProduct_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", sectionTwoProduct_r26.currency, "", sectionTwoProduct_r26.first_cost, "");
} }
function HomeComponent_div_36_ng_template_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_36_ng_template_2_div_6_div_3_Template, 6, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_36_ng_template_2_div_6_small_6_Template, 6, 0, "small", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MSRP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_div_36_ng_template_2_div_6_p_11_Template, 2, 2, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionTwoProduct_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", sectionTwoProduct_r26.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sectionTwoProduct_r26.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r30.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", sectionTwoProduct_r26.currency, "", sectionTwoProduct_r26.msrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.userInfoService.isLoggedIn());
} }
function HomeComponent_div_36_ng_template_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionTwoProduct_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", sectionTwoProduct_r26.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sectionTwoProduct_r26.product.name, "");
} }
function HomeComponent_div_36_ng_template_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionTwoProduct_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", sectionTwoProduct_r26.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", sectionTwoProduct_r26.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("MSRP ", sectionTwoProduct_r26.currency, "", sectionTwoProduct_r26.msrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", sectionTwoProduct_r26.currency, "", sectionTwoProduct_r26.first_cost, "");
} }
function HomeComponent_div_36_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_36_ng_template_2_img_3_Template, 1, 1, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_div_36_ng_template_2_div_4_Template, 1, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_div_36_ng_template_2_button_5_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_36_ng_template_2_div_6_Template, 12, 7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_div_36_ng_template_2_div_7_Template, 3, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_div_36_ng_template_2_div_8_Template, 9, 6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionTwoProduct_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "product/", sectionTwoProduct_r26.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sectionTwoProduct_r26.product.image_urls.length > 0 && sectionTwoProduct_r26.product.image_urls[0].url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sectionTwoProduct_r26.product.image_urls.length == 0 || !sectionTwoProduct_r26.product.image_urls[0].url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.type === ctx_r25.business);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.type === ctx_r25.catalog);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.type === ctx_r25.customer);
} }
function HomeComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p-carousel", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_36_ng_template_2_Template, 9, 7, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r6.sectionTwoProducts)("numVisible", 3)("numScroll", 3)("circular", true)("responsiveOptions", ctx_r6.sectionCarouselResponsiveOptions);
} }
const _c0 = function () { return { "max-width": "100%" }; };
const _c1 = function (a0) { return { "background-image": a0, "background-size": "auto 300px" }; };
class HomeComponent {
    constructor(apiService, userInfoService, bizService, config) {
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.section_one = {
            name: "",
            products: []
        };
        this.section_two = {
            name: "",
            products: []
        };
        this.loading = false;
        this.itemNavigators = true;
        // arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.partners = [
            {
                "image": "assets/img/amazon.jpg",
                "name": "Amazon"
            },
            {
                "image": "assets/img/alibaba.png",
                "name": "Alibaba"
            },
            {
                "image": "assets/img/fedex.png",
                "name": "Fedex"
            },
            {
                "image": "assets/img/f6s.jpg",
                "name": "F6s"
            }
        ];
        this.totalCards = this.partners.length;
        this.currentPage = 1;
        this.pagePosition = "0%";
        this.customer = "customer";
        this.business = "business";
        this.catalog = "catalog";
        // images=[];
        this.images = [
            "https://picsum.photos/id/700/900/500",
            "https://picsum.photos/id/1011/900/500",
            "https://picsum.photos/id/984/900/500"
        ];
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
        config.interval = 2000;
        config.keyboard = true;
        config.pauseOnHover = false;
        // config.wrap=false;
    }
    ngOnInit() {
        // this.cardsPerPage = this.getCardsPerPage();
        // this.initializeSlider();
        // this.getTopSellerProducts();
        // this.getTopProducts();
        this.getHomeSectionItems();
        this.sliders = JSON.parse(this.bizService.get_sliders());
        this.primarySliderIndex = this.sliders.findIndex(obj => obj.primary === "True");
        this.type = this.bizService.getBizType();
        if (this.sliders.length > 1) {
            this.itemNavigators = true;
        }
        else {
            this.itemNavigators = false;
        }
        this.sectionCarouselResponsiveOptions = [
            {
                breakpoint: '1199px',
                numVisible: 5,
                numScroll: 5
            },
            {
                breakpoint: '991px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '550px',
                numVisible: 1,
                numScroll: 1
            }
        ];
        // this.sliders.forEach(item => {
        //   this.images.push(item.image);
        // });
    }
    getHomeSectionItems() {
        this.loading = true;
        this.apiService.getHomeSectionItems(this.bizService.get_company_id()).subscribe(res => {
            this.loading = false;
            this.section_one = res.section_one;
            this.section_two = res.section_two;
            this.sectionOneProducts = res.section_one.products;
            this.sectionTwoProducts = res.section_two.products;
        }, err => {
            this.loading = false;
            console.log("[ERROR]>>>", err);
        });
    }
    getTopProducts() {
        this.loading = true;
        this.apiService.getTopProducts().subscribe(res => {
            this.loading = false;
            this.section_one.products = res;
            this.section_one.name = "Top Products";
            this.section_two.products = res;
            this.section_two.name = "Hot line";
        }, err => {
            this.loading = false;
            console.log("[ERROR]>>>", err);
        });
    }
    formatImageUrlToCss(src) {
        return 'url(' + src + ')';
    }
    initializeSlider() {
        this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
        this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
            40}px)`;
        this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
            40}px) / ${this.cardsPerPage})`;
    }
    // getCardsPerPage() {
    //   return Math.floor(this.container.nativeElement.offsetWidth / 400);
    // }
    changePage(incrementor) {
        this.currentPage += incrementor;
        this.populatePagePosition();
    }
    populatePagePosition() {
        this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${40 *
            (this.currentPage - 1)}px)`;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarouselConfig"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 39, vars: 25, consts: [[2, "min-height", "100vh", "display", "flex", "flex-direction", "column"], [2, "padding-top", "180px", "margin-bottom", "40px"], ["id", "hero-carousel", "data-bs-ride", "carousel", 1, "carousel", "slide", "pb-2"], [3, "value", "showIndicators", "activeIndex", "numVisible", "circular", "showItemNavigators", "autoPlay", "showThumbnails", "responsiveOptions", "containerStyle", "valueChange"], ["pTemplate", "item"], [1, "container", "vstack", "gap-2"], [1, "cart-items-wrapper", 2, "margin-bottom", "1rem"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2", 2, "padding-left", "0px", "position", "static"], [1, "mb-0", "h5", "fw-bold"], ["routerLink", "products", "class", "btn text-capitalize btn-sm text-success", 4, "ngIf"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", 2, "padding-left", "15px", "padding-right", "15px", "margin-left", "0px", "margin-right", "0px"], [1, ""], [1, "bottom-card", 3, "ngStyle"], [1, "card-text"], [1, "row"], [1, "col-sm-6"], [1, "col-sm-6", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "txt", 2, "display", "flex", "align-items", "center", "justify-content", "center"], [1, "txt2"], ["target", "_blank", 2, "text-decoration", "none", "color", "#191919", 3, "href"], [2, "font-size", "xx-large", "font-weight", "600"], [2, "font-size", "x-large", "font-weight", "500"], [1, "container", "vstack", "gap-2", 2, "margin-top", "20px"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2", 2, "padding-left", "0px"], [2, "padding-top", "20px"], [2, "width", "100%", "display", "block", 3, "src"], ["routerLink", "products", 1, "btn", "text-capitalize", "btn-sm", "text-success"], ["autoplayInterval", "3000", 3, "value", "numVisible", "numScroll", "circular", "responsiveOptions"], [2, "width", "100%", "display", "flex", "justify-content", "center"], [1, "position-relative", 2, "margin", "10px", "max-width", "255px"], [1, "scale-up", 2, "cursor", "pointer", "display", "flex", "justify-content", "center", "align-items", "center", "width", "255", "height", "255px", "object-fit", "cover", "border", "1px solid whitesmoke", "border-radius", "10%", 3, "routerLink"], ["style", "border-radius: 10%; ", "class", "card-img-top object-fit-cover", "alt", "item image", 3, "src", 4, "ngIf"], ["appDynamicSize", "", "class", "card-img-top object-fit-cover", 4, "ngIf"], ["style", "margin: 15px;", "class", "btn btn-light position-absolute end-0", 4, "ngIf"], ["style", "padding-top: 15px;", "class", "card-body px-2", 4, "ngIf"], ["alt", "item image", 1, "card-img-top", "object-fit-cover", 2, "border-radius", "10%", 3, "src"], ["appDynamicSize", "", 1, "card-img-top", "object-fit-cover"], [1, "btn", "btn-light", "position-absolute", "end-0", 2, "margin", "15px"], [1, "bi", "bi-heart"], [1, "card-body", "px-2", 2, "padding-top", "15px"], [1, "fw-normal", "mb-2", "small", "fw-bold", 2, "cursor", "pointer", 3, "routerLink"], ["class", "ratings", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "", 2, "width", "100%", "display", "flex", "justify-content", "space-between"], ["style", "font-size: 15px;font-weight: 500;text-decoration: underline; margin-right: 10px;", 4, "ngIf"], [2, "font-size", "15px", "font-weight", "500", "margin-right", "10px"], ["class", "h5 mb-0", 4, "ngIf"], [1, "ratings"], [1, "bi", "bi-star-fill", "text-warning"], [1, "text-muted"], [2, "padding-left", "10px"], [2, "font-size", "15px", "font-weight", "500", "text-decoration", "underline", "margin-right", "10px"], ["routerLink", "login"], [2, "color", "black"], [1, "h5", "mb-0"], [2, "font-size", "13px", "font-weight", "500", "margin-right", "10px", "color", "#C1C7D6", "text-decoration", "line-through"], ["style", "border-radius: 10%;", "class", "card-img-top object-fit-cover", "alt", "item image", 3, "src", 4, "ngIf"], ["appDynamicSize", "", "class", "card-img-top object-fit-cover scale-up", 4, "ngIf"], ["appDynamicSize", "", 1, "card-img-top", "object-fit-cover", "scale-up"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-galleria", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function HomeComponent_Template_p_galleria_valueChange_5_listener($event) { return ctx.sliders = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_ng_template_6_Template, 1, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_a_12_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_app_spin_loader_13_Template, 1, 0, "app-spin-loader", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HomeComponent_div_14_Template, 3, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_a_34_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeComponent_app_spin_loader_35_Template, 1, 0, "app-spin-loader", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeComponent_div_36_Template, 3, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "footer", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.sliders)("showIndicators", false)("activeIndex", ctx.primarySliderIndex)("numVisible", 5)("circular", true)("showItemNavigators", ctx.itemNavigators)("autoPlay", true)("showThumbnails", false)("responsiveOptions", ctx.responsiveOptions)("containerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.section_one.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sectionOneProducts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sectionOneProducts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.formatImageUrlToCss(ctx.bizService.get_mid_banner_image())));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.bizService.get_mid_banner_link(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bizService.get_mid_banner_first_line());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.bizService.get_mid_banner_second_line(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.section_two.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sectionTwoProducts.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sectionTwoProducts.length > 0);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], primeng_galleria__WEBPACK_IMPORTED_MODULE_6__["Galleria"], primeng_api__WEBPACK_IMPORTED_MODULE_7__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_9__["CustomerFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_11__["SpinLoaderComponent"], primeng_carousel__WEBPACK_IMPORTED_MODULE_12__["Carousel"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLink"], _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_13__["DynamicSizeDirective"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"sofia\" !important;\n}\n\n.bottom-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 100%;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 300px;\n  border-radius: 20px;\n  background: -webkit-linear-gradient(rgba(0, 255, 2, 0), rgba(0, 255, 2, 0) 0%), -webkit-linear-gradient(-20deg, rgba(4, 0, 255, 0) 50%, rgba(55, 55, 54, 0.314) 0%);\n}\n\n.txt[_ngcontent-%COMP%] {\n  height: 300px;\n  display: table-cell;\n  vertical-align: middle;\n  width: inherit;\n}\n\n.txt2[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.scale-up[_ngcontent-%COMP%] {\n  transition: transform 0.3s;\n}\n\n.scale-up[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.brands-div[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-left: 50px;\n  padding-right: 50px;\n  display: flex;\n  position: relative;\n  justify-content: center;\n}\n\n@media (min-width: 500px) {\n  .brands-cards[_ngcontent-%COMP%] {\n    width: calc(100% - 80px);\n    overflow: hidden;\n    height: 200px;\n  }\n}\n\n@media (max-width: 499px) {\n  .brands-cards[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n    height: 200px;\n  }\n}\n\n.overflow[_ngcontent-%COMP%] {\n  position: relative;\n  transition: left 0.5s ease-in-out;\n}\n\n.brand-card[_ngcontent-%COMP%] {\n  height: 200px;\n  background-color: #e0e1e2;\n  border-radius: 5px;\n  display: inline-block;\n  margin-right: 40px;\n  position: relative;\n}\n\n.no-right-margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.brand-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 48px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  color: black;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n@media (min-width: 992px) {\n  .left[_ngcontent-%COMP%] {\n    margin-left: 50px;\n    left: 0;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    right: 0;\n    margin-right: 50px;\n  }\n}\n\n@media (max-width: 991px) {\n  .left[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    left: 0;\n  }\n\n  .right[_ngcontent-%COMP%] {\n    right: 0;\n    margin-right: 0px;\n  }\n}\n\n.left.disabled[_ngcontent-%COMP%], .right.disabled[_ngcontent-%COMP%] {\n  color: #CCC;\n}\n\n@media (min-width: 992px) {\n  .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 700px;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 991px) {\n  .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 400px;\n  }\n}\n\n@media (min-width: 400px) and (max-width: 599px) {\n  .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 300px;\n  }\n}\n\n@media (max-width: 399px) {\n  .carousel-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSwrQkFBQTtBQUFGOztBQUlDO0VBQ0csbUJBQUE7RUFDQSxXQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1LQUNBO0FBRko7O0FBT0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7QUFKSjs7QUFPQTtFQUNFLDBCQUFBO0FBSkY7O0FBT0E7RUFDRSxzQkFBQTtBQUpGOztBQVFBO0VBQ0ksc0JBQUE7QUFMSjs7QUFTQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBTko7O0FBV0U7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VBUko7QUFDRjs7QUFhRTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQVhKO0FBQ0Y7O0FBY0U7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0FBWko7O0FBZUU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVpKOztBQWVFO0VBQ0UsaUJBQUE7QUFaSjs7QUFlRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFaSjs7QUFlRTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQVpKOztBQWVFO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLE9BQUE7RUFaSjs7RUFlRTtJQUNFLFFBQUE7SUFDQSxrQkFBQTtFQVpKO0FBQ0Y7O0FBa0JBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLE9BQUE7RUFoQkY7O0VBbUJBO0lBQ0UsUUFBQTtJQUNBLGlCQUFBO0VBaEJGO0FBQ0Y7O0FBbUJFO0VBQ0UsV0FBQTtBQWpCSjs7QUFzQkE7RUFFSTtJQUNFLGFBQUE7RUFwQko7QUFDRjs7QUF3QkE7RUFFSTtJQUNFLGFBQUE7RUF2Qko7QUFDRjs7QUEyQkE7RUFFSTtJQUNFLGFBQUE7RUExQko7QUFDRjs7QUErQkE7RUFFSTtJQUNFLGFBQUE7RUE5Qko7QUFDRiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4qe1xuICBmb250LWZhbWlseTogJ3NvZmlhJyAhaW1wb3J0YW50O1xufVxuXG5cbiAuYm90dG9tLWNhcmR7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICBcbn1cbi5jYXJkLXRleHR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBcbiAgICAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDI1NSwgMiwgMCksIHJnYmEoMCwgMjU1LCAyLCAwLjApIDAlKSxcbiAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0yMGRlZywgcmdiYSg0LCAwLCAyNTUsIDApIDUwJSwgcmdiYSg1NSwgNTUsIDU0LCAwLjMxNCkgMCUpO1xufVxuXG5cbi50eHR7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgXG59XG4udHh0MntcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG4uc2NhbGUtdXAge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zczsgXG59XG5cbi5zY2FsZS11cDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cblxuLnctMTAwIHtcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIH1cblxuICBcbi5icmFuZHMtZGl2IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuXG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gICAgLmJyYW5kcy1jYXJkcyB7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gODBweCk7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gIH1cblxuICBcbiAgICBcbiAgQG1lZGlhICAobWF4LXdpZHRoOiA0OTlweCl7XG4gICAgLmJyYW5kcy1jYXJkcyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgfVxuICBcbiAgLm92ZXJmbG93IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuYnJhbmQtY2FyZCB7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMWUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLm5vLXJpZ2h0LW1hcmdpbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgXG4gIC5icmFuZC1jYXJkIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTo0OHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIC5sZWZ0LFxuICAucmlnaHQge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuICBcbiAgQG1lZGlhICAobWluLXdpZHRoOiA5OTJweCkgIHtcbiAgICAubGVmdCB7XG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIFxuICAgIC5yaWdodCB7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICB9XG4gIH1cblxuXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgXG4gIC5yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbn1cblxuICAubGVmdC5kaXNhYmxlZCwgLnJpZ2h0LmRpc2FibGVkIHtcbiAgICBjb2xvcjojQ0NDO1xuICB9XG4gIFxuXG4gIFxuQG1lZGlhICAobWluLXdpZHRoOiA5OTJweCl7XG4gIC5jYXJvdXNlbC1pdGVte1xuICAgIGltZ3tcbiAgICAgIGhlaWdodDogNzAwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY2Fyb3VzZWwtaXRlbXtcbiAgICBpbWd7XG4gICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgIChtaW4td2lkdGg6IDQwMHB4KSBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmNhcm91c2VsLWl0ZW17XG4gICAgaW1ne1xuICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgLmNhcm91c2VsLWl0ZW17XG4gICAgaW1ne1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICB9XG4gIH1cbn1cblxuXG4iXX0= */"] });


/***/ }),

/***/ "R7A+":
/*!****************************************************************************!*\
  !*** ./src/app/views/item-detail-desktop/item-detail-desktop.component.ts ***!
  \****************************************************************************/
/*! exports provided: ItemDetailDesktopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailDesktopComponent", function() { return ItemDetailDesktopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");
/* harmony import */ var _pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipe/title-case.pipe */ "Ffdx");














const _c0 = ["imageContainer"];
const _c1 = ["container"];
function ItemDetailDesktopComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r0.bizService.getBizId(), "/products/", ctx_r0.category, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.category));
} }
function ItemDetailDesktopComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r1.bizService.getBizId(), "/products/", ctx_r1.category, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, ctx_r1.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate3"]("href", "/", ctx_r1.bizService.getBizId(), "/products/", ctx_r1.category, "/", ctx_r1.subcategory, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx_r1.subcategory));
} }
function ItemDetailDesktopComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 57);
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r14.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ItemDetailDesktopComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r15.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ItemDetailDesktopComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", ctx_r4.item_detail.first_cost, " ");
} }
function ItemDetailDesktopComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "u", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login for Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", ctx_r5.bizService.getBizName(), "/login");
} }
const _c2 = function (a0) { return { "background-color": a0 }; };
function ItemDetailDesktopComponent_button_52_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_button_52_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.addItemToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r6.bizService.get_background_color()));
} }
function ItemDetailDesktopComponent_button_53_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_button_53_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.checkout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Proceed to Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c2, ctx_r7.bizService.get_background_color()));
} }
function ItemDetailDesktopComponent_button_55_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_button_55_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.removeItemToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemDetailDesktopComponent_i_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 70);
} }
function ItemDetailDesktopComponent_i_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 71);
} }
function ItemDetailDesktopComponent_ul_74_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23);
} }
function ItemDetailDesktopComponent_ul_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemDetailDesktopComponent_ul_74_li_1_Template, 2, 1, "li", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.featuresArray);
} }
function ItemDetailDesktopComponent_th_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spec_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](spec_r24.name);
} }
function ItemDetailDesktopComponent_td_89_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemDetailDesktopComponent_td_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemDetailDesktopComponent_td_89_span_1_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const spec_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !spec_r25.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", spec_r25.value, "", spec_r25 == null ? null : spec_r25.unit, " ");
} }
const _c3 = function () { return { "max-width": "640px" }; };
class ItemDetailDesktopComponent {
    constructor(route, router, apiService, bizService, userInfoService, rateConfig) {
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.bizService = bizService;
        this.userInfoService = userInfoService;
        this.rateConfig = rateConfig;
        this.show_features = false;
        this.customer = "customer";
        this.business = "business";
        this.catalog = "catalog";
        this.item_detail = {
            retail_cost: '',
            first_cost: ''
        };
        this.videos = [];
        this.variations = [];
        this.product = {
            brand: "",
            id: '1',
            name: "",
            image_urls: [],
            price: "",
            rating: "",
            reviews: "",
            sku: "",
            stock_status: "",
            product_count: 1,
            description: "",
            dimensions: [],
            weights: {
                weight: '',
                weight_class: ''
            },
            features: {}
        };
        this.msrp = "";
        this.featuresArray = [];
        this.channel_detail = {
            name: '',
            id: ''
        };
        this.current_image = "";
        this.current_image_index = 0;
        this.totalCards = 14;
        this.currentPage = 1;
        this.pagePosition = "0%";
        this.images1 = [
            "https://picsum.photos/id/700/900/500",
            "https://picsum.photos/id/1011/900/500",
            "https://picsum.photos/id/984/900/500"
        ];
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
        this.imageContainerStyle = {
            "padding-left": '0px',
            "padding-right": '0px'
        };
        rateConfig.max = 5;
        rateConfig.readonly = !userInfoService.isLoggedIn();
    }
    windowResize() {
        let newCardsPerPage = this.getCardsPerPage();
        if (newCardsPerPage != this.cardsPerPage) {
            this.cardsPerPage = newCardsPerPage;
            this.initializeSlider();
            if (this.currentPage > this.totalPages) {
                this.currentPage = this.totalPages;
                this.populatePagePosition();
            }
        }
    }
    setShowFeatures() {
        if (this.show_features === false) {
            this.show_features = true;
        }
        else {
            this.show_features = false;
        }
    }
    getImageContainerStyle() {
        return this.imageContainerStyle;
    }
    onImageLoad(event) {
        const imgElement = event.target;
        const naturalWidth = imgElement.naturalWidth;
        const naturalHeight = imgElement.naturalHeight;
        var width = this.imageContainer.nativeElement.offsetWidth;
        const aspectRatio = naturalWidth / naturalHeight;
        const newWidth = 600 * aspectRatio;
        // imgElement.style.width = `${newWidth}px`;
        // imgElement.style.height = '600px';
        var imageContainerStyle_padding = (width - newWidth) / 2;
        this.imageContainerStyle = {
            "padding-left": `${imageContainerStyle_padding}px`,
            "padding-right": `${imageContainerStyle_padding}px`
        };
    }
    ngOnInit() {
        // this.cardsPerPage = this.getCardsPerPage();
        // this.initializeSlider();
        this.apiService.getChannelsDetails(this.route.snapshot.params.id).subscribe(res => {
            this.channel_detail = res[0];
        }, err => { });
        this.apiService.getProductDetail(this.route.snapshot.params.id).subscribe(res => {
            this.product = res.product;
            this.msrp = res.msrp;
            this.item_detail = res;
            this.images = res.product.image_urls;
            console.log(this.images);
            this.product["product_count"] = 1;
            this.totalCards = 14;
            this.current_image = this.product.image_urls[0].image;
            this.featuresArray = Object.values(res.product.features).filter(value => {
                return (Array.isArray(value) && value.length > 0) || (typeof value === 'string' && value.trim() !== '');
            });
            ;
            this.attributeArray = this.generateAttributeArray(res.product);
            this.apiService.getVariations("?product=" + this.product.id).subscribe(res => {
                this.variations = res;
            }, err => { });
            this.apiService.getProductVideo("?product=" + this.product.id).subscribe(res => {
                this.videos = res;
            }, err => { });
            try {
                let p = this.product;
                this.category = p.category_details.name;
            }
            catch (err) { }
            try {
                let p = this.product;
                this.subcategory = p.sub_category_details.name;
            }
            catch (err) { }
        }, err => {
            console.log("[ERROR]>>>", err);
        });
        this.type = this.bizService.getBizType();
    }
    mapCollectionToString(data) {
        if (Array.isArray(data)) {
            const names = data.map((item) => item.name);
            return names.join(", ");
        }
        if (typeof data === "string") {
            return data;
        }
    }
    generateAttributeArray(product) {
        var _a, _b, _c;
        const attributes = [
            { name: 'Length', value: ((_a = product.dimensions.find(d => d.name === 'length')) === null || _a === void 0 ? void 0 : _a.value) || '', unit: 'in' },
            { name: 'Width', value: ((_b = product.dimensions.find(d => d.name === 'width')) === null || _b === void 0 ? void 0 : _b.value) || '', unit: 'in' },
            { name: 'Height', value: ((_c = product.dimensions.find(d => d.name === 'height')) === null || _c === void 0 ? void 0 : _c.value) || '', unit: 'in' },
            { name: 'Weight', value: product.weights.weight, unit: product.weights.weight_class },
            { name: 'Brand', value: product.brand },
            { name: 'Origin', value: product.origin || '' },
            { name: 'MOQ', value: product.minimum_order_qty || '' },
            { name: 'Size', value: product.size || '' },
            { name: 'Shape', value: product.shape || '' },
            { name: 'Color', value: product.color || '' },
            { name: 'Primary Material', value: product.material.primary_material || '' },
            { name: 'Style', value: product.style || '' },
            { name: 'Name', value: product.name },
            { name: 'SKU', value: product.sku },
            { name: 'UPC', value: product.upc },
            { name: 'Quantity', value: product.quantity },
            { name: 'Partner', value: product.partner_details.name },
            { name: 'Country', value: product.country },
            { name: 'Category', value: product.category_details.name },
            { name: 'Sub Category', value: product.sub_category_details.name },
            { name: 'Rating', value: product.rating.toString() },
            { name: 'Reviews', value: product.reviews.toString() },
            { name: 'Tax', value: product.tax },
            { name: 'Date Added', value: product.date_added },
            { name: 'Collection', value: this.mapCollectionToString(product.collection) },
            { name: 'Number of Pieces', value: product.number_of_pieces },
            { name: 'Is Powered', value: product.is_powered.toString() },
            { name: 'Wood Type', value: product.wood_type },
            { name: 'Serial Number', value: product.serial_number || '' },
            { name: 'ASIN', value: product.asin || '' },
            { name: 'Model ID', value: product.model_id || '' },
            { name: 'Manufacture ID', value: product.manufacture_id || '' },
            { name: 'Group', value: product.group },
            { name: 'Taxes', value: product.tax },
            { name: 'Supplier Lead Time', value: product.lead_time.supplier_lead_time || '' },
            { name: 'Replacement Lead Time', value: product.lead_time.replacement_lead_time || '' },
            { name: 'Color', value: product.color },
            { name: 'Finish', value: product.finish },
            { name: 'Primary Material', value: product.material.primary_material },
            { name: 'Secondary Material', value: product.material.secondary_material },
            { name: 'Assembly Required', value: product.assembly.assembly_required.toString() },
            { name: 'Assembly Required Level', value: product.assembly.assembly_required_level },
            { name: 'Assembly Instructions URL', value: product.assembly.assembly_instructions_url },
            { name: 'Recommended Use', value: product.recommended.recommended_use },
            { name: 'Recommended Room', value: product.recommended.recommended_room },
            { name: 'Recommended Location', value: product.recommended.recommended_location },
        ];
        return attributes;
    }
    checkout() {
        this.router.navigateByUrl("/" + this.bizService.getBizId() + "/cart");
    }
    addItemToCart() {
        var p = this.product;
        var pricing = this.item_detail;
        pricing["product"] = p.id;
        p["pricing"] = pricing;
        this.userInfoService.addItemCart(p);
    }
    removeItemToCart() {
        this.userInfoService.removeItemCart(this.product);
    }
    reduceProductCount() {
        if (this.product.product_count > 1) {
            this.product.product_count = this.product.product_count - 1;
            if (this.userInfoService.isItemInCart(this.product)) {
                this.userInfoService.updateItemCart(this.product);
            }
        }
    }
    increaseProductCount() {
        this.product.product_count = this.product.product_count + 1;
        if (this.userInfoService.isItemInCart(this.product)) {
            this.userInfoService.updateItemCart(this.product);
        }
    }
    imageClicked(img, index) {
        this.current_image = img.image;
        this.current_image_index = index;
    }
    initializeSlider() {
        this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
        this.overflowWidth = `calc(${this.totalPages * 100}% + ${this.totalPages *
            10}px)`;
        this.cardWidth = `calc((${100 / this.totalPages}% - ${this.cardsPerPage *
            10}px) / ${this.cardsPerPage})`;
    }
    getCardsPerPage() {
        return Math.floor(this.container.nativeElement.offsetWidth / 100);
    }
    changePage(incrementor) {
        this.currentPage += incrementor;
        this.populatePagePosition();
    }
    populatePagePosition() {
        this.pagePosition = `calc(${-100 * (this.currentPage - 1)}% - ${10 *
            (this.currentPage - 1)}px)`;
    }
}
ItemDetailDesktopComponent.ɵfac = function ItemDetailDesktopComponent_Factory(t) { return new (t || ItemDetailDesktopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_5__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"])); };
ItemDetailDesktopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemDetailDesktopComponent, selectors: [["app-item-detail-desktop"]], viewQuery: function ItemDetailDesktopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, hostBindings: function ItemDetailDesktopComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ItemDetailDesktopComponent_resize_HostBindingHandler() { return ctx.windowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRatingConfig"]])], decls: 92, vars: 28, consts: [[2, "min-height", "100vh", "display", "flex", "flex-direction", "column", "max-width", "100vw", "overflow-x", "hidden"], [1, "row", "main-content"], [1, "col-sm-12", "col-lg-12"], [1, "main-card", 2, "padding", "20px"], [1, "row"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2"], ["class", "mb-0 h5 ", 4, "ngIf"], ["style", "font-size: 16px;", "class", "mb-0 h5 ", 4, "ngIf"], [1, "col-sm-7", "col-lg-7", 2, "padding-right", "30px"], [3, "value", "autoPlay", "circular", "showItemNavigators", "responsiveOptions", "numVisible", "numScroll", "showIndicators", "containerStyle", "valueChange"], ["pTemplate", "item"], ["pTemplate", "thumbnail"], [1, "col-sm-5", "col-lg-5"], [1, "text-muted"], [1, "product-name"], [1, "row", 2, "padding-top", "20px"], [1, "product-rating"], [3, "rate", "rateChange"], [1, "", 2, "color", "red", "padding-top", "10px"], ["class", "product-price", 4, "ngIf"], ["style", "font-size: 15px;font-weight: 500;text-decoration: underline;", 4, "ngIf"], [1, "col-sm-12", 2, "margin-top", "30px !important"], [1, "col-sm-8"], [2, "font-weight", "700"], [1, "col-sm-4", 2, "text-align", "right"], [1, "fa-solid", "fa-plus", 2, "font-family", "fontAwesome", "font-size", "larger"], [1, "col-sm-12"], [1, "cart-buttons"], [1, "item-count", 2, "border", "2px solid rgb(90, 90, 90)", "border-radius", "30px", "width", "fit-content", "padding", "0px", "display", "flex", "height", "35px"], [2, "padding-left", "15px", "padding-right", "10px", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "medium", 3, "click"], [1, "fa", "fa-minus", 2, "font-family", "'Font Awesome 6 Free' !important"], [2, "padding-left", "10px", "padding-right", "10px", "display", "flex", "align-items", "center", "justify-content", "center", "font-weight", "500", "font-size", "large", "border-right", "2px solid rgb(90, 90, 90)", "border-left", "2px solid black", "width", "50px", "text-align", "center"], [2, "padding-left", "10px", "padding-right", "15px", "display", "flex", "align-items", "center", "justify-content", "center", "font-size", "medium", 3, "click"], [1, "fa", "fa-plus", 2, "font-family", "'Font Awesome 6 Free' !important"], ["class", "btn  buy-now-button", 3, "ngStyle", "click", 4, "ngIf"], ["class", "btn  checkout-button", 3, "ngStyle", "click", 4, "ngIf"], ["class", "btn  remove-button", "style", "margin-top: 10px;", 3, "click", 4, "ngIf"], [1, "col-sm-12", "mt-3"], [1, "col-sm-8", 2, "cursor", "pointer", 3, "click"], [1, "col-sm-4", 2, "text-align", "right", 3, "click"], ["class", "fa-solid fa-plus", "style", "font-family: fontAwesome;font-size: larger;cursor: pointer;", 4, "ngIf"], ["class", "fa-solid fa-minus", "style", "font-family: fontAwesome;font-size: larger;cursor: pointer;", 4, "ngIf"], ["style", "padding-right: 12px;", 4, "ngIf"], [1, "row", 2, "position", "relative", "margin-top", "20px"], [2, "font-weight", "600", "font-size", "large"], [2, "position", "absolute", "right", "0", "width", "fit-content", "margin-top", "5px"], [1, "fa-solid", "fa-minus", 2, "font-family", "fontAwesome", "font-size", "larger"], [1, "col-lg-12", "col-sm-12", "col-12"], [1, "table-responsive"], ["datatable", "", "id", "printTable", 1, "table", "table-borderless"], [2, "background", "white"], ["style", "border-bottom: 1px solid grey ; white-space: nowrap;", 4, "ngFor", "ngForOf"], ["style", "font-size:large; white-space: nowrap;", 4, "ngFor", "ngForOf"], [2, "padding-top", "20px", "bottom", "0", "width", "100%"], [1, "mb-0", "h5"], [1, "text-color-inherit", 2, "text-decoration", "none", "font-size", "16px", 3, "href"], [1, "mb-0", "h5", 2, "font-size", "16px"], [2, "width", "100%", 3, "src"], [1, "grid", "grid-nogutter", "justify-content-center"], [2, "display", "block", "height", "50px", "width", "75px", 3, "src"], [1, "product-price"], [2, "font-size", "15px", "font-weight", "500", "text-decoration", "underline"], [3, "routerLink"], [2, "color", "black"], [1, "btn", "buy-now-button", 3, "ngStyle", "click"], [1, "fa-solid", "fa-plus", 2, "font-family", "'Font Awesome 6 Free' !important"], [2, "padding-left", "10px"], [1, "btn", "checkout-button", 3, "ngStyle", "click"], [1, "btn", "remove-button", 2, "margin-top", "10px", 3, "click"], [1, "fa", "fa-trash", 2, "font-family", "'Font Awesome 6 Free' !important"], [1, "fa-solid", "fa-plus", 2, "font-family", "fontAwesome", "font-size", "larger", "cursor", "pointer"], [1, "fa-solid", "fa-minus", 2, "font-family", "fontAwesome", "font-size", "larger", "cursor", "pointer"], [2, "padding-right", "12px"], ["style", "color: #525252;", 4, "ngFor", "ngForOf"], [2, "color", "#525252"], [2, "border-bottom", "1px solid grey", "white-space", "nowrap"], [2, "font-size", "large", "white-space", "nowrap"], [4, "ngIf"]], template: function ItemDetailDesktopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ItemDetailDesktopComponent_p_8_Template, 4, 5, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ItemDetailDesktopComponent_p_9_Template, 8, 11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-galleria", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ItemDetailDesktopComponent_Template_p_galleria_valueChange_12_listener($event) { return ctx.images = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ItemDetailDesktopComponent_ng_template_13_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ItemDetailDesktopComponent_ng_template_14_Template, 2, 1, "ng-template", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ngb-rating", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rateChange", function ItemDetailDesktopComponent_Template_ngb_rating_rateChange_26_listener($event) { return ctx.product.rating = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ItemDetailDesktopComponent_div_30_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ItemDetailDesktopComponent_small_31_Template, 4, 1, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Select Variation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_Template_span_click_46_listener() { return ctx.reduceProductCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_Template_span_click_50_listener() { return ctx.increaseProductCount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ItemDetailDesktopComponent_button_52_Template, 4, 3, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ItemDetailDesktopComponent_button_53_Template, 2, 3, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ItemDetailDesktopComponent_button_55_Template, 4, 0, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_Template_div_click_65_listener() { return ctx.setShowFeatures(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Feature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ItemDetailDesktopComponent_Template_div_click_68_listener() { return ctx.setShowFeatures(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ItemDetailDesktopComponent_i_69_Template, 1, 0, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, ItemDetailDesktopComponent_i_70_Template, 1, 0, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, ItemDetailDesktopComponent_ul_74_Template, 2, 1, "ul", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "table", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "thead", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ItemDetailDesktopComponent_th_86_Template, 2, 1, "th", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, ItemDetailDesktopComponent_td_89_Template, 3, 3, "td", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "footer", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.subcategory == "" || ctx.subcategory == null) && (ctx.category != "" || ctx.category != null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subcategory != "" && ctx.subcategory != null && (ctx.category != "" || ctx.category != null));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.images)("autoPlay", false)("circular", true)("showItemNavigators", false)("responsiveOptions", ctx.responsiveOptions)("numVisible", 5)("numScroll", 1)("showIndicators", false)("containerStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" SKU:", ctx.product.sku, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", ctx.product.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MSRP: $ ", ctx.msrp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userInfoService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.product_count);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userInfoService.isItemInCart(ctx.product));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isItemInCart(ctx.product));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isItemInCart(ctx.product));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show_features === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributeArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attributeArray);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], primeng_galleria__WEBPACK_IMPORTED_MODULE_8__["Galleria"], primeng_api__WEBPACK_IMPORTED_MODULE_9__["PrimeTemplate"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbRating"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_10__["CustomerFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"]], pipes: [_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_11__["TitleCasePipe"]], styles: [".text-color-inherit[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n*[_ngcontent-%COMP%] {\n  font-family: \"sofia\";\n}\n\n.large-product-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 600px;\n}\n\n.product-price[_ngcontent-%COMP%] {\n  line-height: 24px;\n  font-size: 40px;\n  font-weight: 700;\n}\n\n.product-rating[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: -10px;\n}\n\n.product-name[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  font-size: large;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.product-description-header[_ngcontent-%COMP%] {\n  font-size: x-large;\n  margin-top: 30px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #7a7878;\n  height: 3px;\n  width: 98%;\n  margin: auto;\n}\n\n.icon[_ngcontent-%COMP%] {\n  right: 0;\n  margin-right: 20px;\n  top: 0;\n  position: absolute;\n  font-size: large;\n}\n\n.add-cart[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: x-large;\n  color: white;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.add-cart-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: auto;\n  color: #fff;\n  font-weight: 500;\n  border-radius: 5px;\n}\n\n.buy-now-button[_ngcontent-%COMP%] {\n  min-width: 30%;\n  color: #fff;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.checkout-button[_ngcontent-%COMP%] {\n  min-width: 35%;\n  color: #fff;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.remove-button[_ngcontent-%COMP%] {\n  min-width: 30%;\n  border-color: #d10404;\n  background: white;\n  color: black;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.product-stock-status[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: medium;\n}\n\n.delivery-policy[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: medium;\n}\n\n.like-button[_ngcontent-%COMP%] {\n  float: right;\n  font-size: xx-large;\n}\n\n.product-card-detail[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 10px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.card-detail[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.product-description-header[_ngcontent-%COMP%] {\n  font-size: xx-large !important;\n  font-weight: 500;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  font-size: medium !important;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  position: relative;\n  justify-content: center;\n}\n\n.cards[_ngcontent-%COMP%] {\n  width: calc(100% - 80px);\n  overflow: hidden;\n}\n\n.overflow[_ngcontent-%COMP%] {\n  position: relative;\n  transition: left 0.5s ease-in-out;\n}\n\n.small-card[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #e0e1e2;\n  border-radius: 5px;\n  padding: 1px;\n  display: inline-block;\n  margin-right: 10px;\n  position: relative;\n}\n\n.small-card-selected[_ngcontent-%COMP%] {\n  border: solid 1px black;\n  border-radius: 5px;\n}\n\n.small-card-not-selected[_ngcontent-%COMP%] {\n  border: 0px;\n  border-radius: 5px;\n}\n\n.small-img[_ngcontent-%COMP%] {\n  background-repeat: round;\n}\n\n.no-right-margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.small-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  height: 30px;\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 30px;\n  color: black;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.left.disabled[_ngcontent-%COMP%], .right.disabled[_ngcontent-%COMP%] {\n  color: #CCC;\n}\n\n.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  background-color: #f1f1f1;\n  border: none;\n  border-radius: 4px;\n  color: #555;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  background-color: #555;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 14px;\n}\n\n.button[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]:before {\n  content: \"+\";\n}\n\n.button[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%]:before {\n  content: \"-\";\n}\n\n@media (min-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-top: 170px;\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .cart-buttons[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  .remove-button[_ngcontent-%COMP%], .buy-now-button[_ngcontent-%COMP%], .checkout-button[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-top: 10px;\n  }\n}\n\n@media (min-width: 991.98px) {\n  .cart-buttons[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .buy-now-button[_ngcontent-%COMP%], .checkout-button[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2l0ZW0tZGV0YWlsLWRlc2t0b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxjQUFBO0FBQUY7O0FBSUE7RUFDRSxvQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQURGOztBQUdBO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBUUE7RUFDTSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFMTjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQU5GOztBQWFBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVZGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVhGOztBQWNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQVhGOztBQWFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBVkY7O0FBYUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFWRjs7QUFZQTtFQUNFLHVCQUFBO0FBVEY7O0FBV0E7RUFDRSxZQUFBO0FBUkY7O0FBVUE7RUFFRSw4QkFBQTtFQUNBLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSw0QkFBQTtBQVJGOztBQVVBO0VBQ0Usc0JBQUE7QUFQRjs7QUFTQTs7Ozs7Ozs7OztFQUFBOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQVBGOztBQVVBO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUEY7O0FBU0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBUUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFPQTtFQUNFLHdCQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTs7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7QUFKRjs7QUFPQTtFQUNFLE9BQUE7QUFKRjs7QUFPQTtFQUNFLFFBQUE7QUFKRjs7QUFTQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQU5GOztBQVNBO0VBQ0Usc0JBQUE7QUFORjs7QUFTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtBQU5GOztBQVNBO0VBQ0UsWUFBQTtBQU5GOztBQVNBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFQRjs7RUFVQTtJQUNFLGlCQUFBO0VBUEY7O0VBVUE7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VBUEY7QUFDRjs7QUFXQTtFQUVFO0lBQ0UsYUFBQTtFQVZGOztFQVlBO0lBQ0UsaUJBQUE7RUFURjtBQUNGIiwiZmlsZSI6Iml0ZW0tZGV0YWlsLWRlc2t0b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50ZXh0LWNvbG9yLWluaGVyaXQge1xuICBjb2xvcjppbmhlcml0XG59XG5cblxuKntcbiAgZm9udC1mYW1pbHk6ICdzb2ZpYSc7XG59XG5cbi5sYXJnZS1wcm9kdWN0LWltYWdle1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OjYwMHB4IDtcbn1cbi5wcm9kdWN0LXByaWNle1xuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnByb2R1Y3QtcmF0aW5ne1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4ucHJvZHVjdC1uYW1le1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9ue1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi1oZWFkZXJ7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbWFyZ2luLXRvcDozMHB4O1xuXG5cbn1cbi5saW5le1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMjAsIDEyMCk7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46YXV0bztcblxufVxuLmljb257XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uYWRkLWNhcnR7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgY29sb3I6d2hpdGU7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cblxuLmFkZC1jYXJ0LWJ1dHRvbntcbiAgd2lkdGg6MTAwJTtcbiAgcGFkZGluZzogYXV0bztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiBcblxuXG59XG5cbi5idXktbm93LWJ1dHRvbntcbiAgICAgIG1pbi13aWR0aDozMCU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcbiAgXG59XG4uY2hlY2tvdXQtYnV0dG9ue1xuICBtaW4td2lkdGg6MzUlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuXG59XG5cblxuXG4ucmVtb3ZlLWJ1dHRvbntcbiAgbWluLXdpZHRoOjMwJTtcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjA5LCA0LCA0KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuXG59XG4ucHJvZHVjdC1zdG9jay1zdGF0dXN7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uZGVsaXZlcnktcG9saWN5e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IG1lZGl1bTtcbn1cbi5saWtlLWJ1dHRvbntcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG4ucHJvZHVjdC1jYXJkLWRldGFpbHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jYXJkLWhlYWRlcntcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbn1cbi5jYXJkLWRldGFpbHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnByb2R1Y3QtZGVzY3JpcHRpb24taGVhZGVye1xuIFxuICBmb250LXNpemU6IHh4LWxhcmdlICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9ue1xuICBmb250LXNpemU6IG1lZGl1bSAhaW1wb3J0YW50O1xufVxuLnctMTAwIHtcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xufVxuLypcbi5tYWluLWNhcmR7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3NztcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAgICAgIGJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG59XG4uZGVsaXZlcnktY2FyZHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gICAgICAgYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3Nztcbn0qL1xuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmRzIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDgwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3ZlcmZsb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnNtYWxsLWNhcmR7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUxZTI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNtYWxsLWNhcmQtc2VsZWN0ZWR7XG4gIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc21hbGwtY2FyZC1ub3Qtc2VsZWN0ZWR7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc21hbGwtaW1ne1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG59XG5cbi5uby1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnNtYWxsLWNhcmQgZGl2IHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVmdCxcbi5yaWdodCB7XG4gIGhlaWdodDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ubGVmdC5kaXNhYmxlZCwgLnJpZ2h0LmRpc2FibGVkIHtcbiAgY29sb3I6I0NDQztcbn1cblxuLmxlZnQge1xuICBsZWZ0OiAwO1xufVxuXG4ucmlnaHQge1xuICByaWdodDogMDtcbn1cblxuXG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4uYnV0dG9uIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idXR0b24gLnBsdXM6YmVmb3JlIHtcbiAgY29udGVudDogXCIrXCI7XG59XG5cbi5idXR0b24gLm1pbnVzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiLVwiO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHsgXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxNzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuXG4gIC5jYXJ0LWJ1dHRvbnN7XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gIH1cblxuICAucmVtb3ZlLWJ1dHRvbiwuYnV5LW5vdy1idXR0b24sLmNoZWNrb3V0LWJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi10b3A6MTBweDtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCkgeyBcblxuICAuY2FydC1idXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLmJ1eS1ub3ctYnV0dG9uLC5jaGVja291dC1idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "VuPt":
/*!******************************************************************!*\
  !*** ./src/app/views/create-account/create-account.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountComponent", function() { return CreateAccountComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function CreateAccountComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.bizService.get_left_link(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.bizService.get_left_header());
} }
function CreateAccountComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.bizService.get_left_header());
} }
function CreateAccountComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r2.bizService.get_right_link(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.bizService.get_right_header());
} }
function CreateAccountComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.bizService.get_right_header());
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class CreateAccountComponent {
    constructor(bizService, apiService, formBuilder) {
        this.bizService = bizService;
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.CreateAccountForm = this.formBuilder.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.checkRightHeaderLink();
    }
    checkLeftHeaderLink() {
        if (this.bizService.get_left_link() && this.bizService.get_left_link() !== "null") {
            return true;
        }
        else {
            return false;
        }
    }
    checkRightHeaderLink() {
        if (this.bizService.get_right_link() && this.bizService.get_right_link() !== "null") {
            this.rightHeaderLink = true;
        }
        else {
            this.rightHeaderLink = false;
        }
    }
    createAccount() {
        if (this.CreateAccountForm.valid) {
            this.apiService.resetPassword(this.CreateAccountForm.value).subscribe(res => {
                if (res) {
                    console.log(res);
                }
            }, err => {
                console.log(err);
            });
        }
    }
}
CreateAccountComponent.ɵfac = function CreateAccountComponent_Factory(t) { return new (t || CreateAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_2__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"])); };
CreateAccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateAccountComponent, selectors: [["app-create-account"]], decls: 89, vars: 13, consts: [["role", "banner", 1, "toolbar", 3, "ngStyle"], ["class", "promotion-text", "target", "_blank", 3, "href", 4, "ngIf"], [1, "spacer"], ["class", "promotion-text", 4, "ngIf"], ["class", "promotion-text-right", "target", "_blank", 3, "href", 4, "ngIf"], ["class", "promotion-text-right", 4, "ngIf"], [1, "logo", 2, "padding-left", "37px", "padding-right", "50px", 3, "href"], ["height", "60px", 3, "src"], [1, "container-fluid", 2, "padding-left", "50px", "padding-right", "50px", "padding-top", "30px"], [2, "font-size", "24px", "font-weight", "600", "color", "#525252"], [2, "display", "flex", "justify-content", "center", "align-items", "center"], [2, "flex", "1"], [2, "flex", "4", "display", "flex", "column-gap", "20px", 3, "formGroup"], [1, "row"], [1, "form-group", 2, "display", "flex", "flex-direction", "column"], [2, "color", "#525252"], ["formControlName", "first_name", "type", "text", "placeholder", "Enter First Name", 1, "round-input"], [2, "flex", "4", "display", "flex", "column-gap", "20px"], ["type", "text", "placeholder", "Enter First Name", 1, "round-input"], [2, "display", "flex", "justify-content", "center", "align-items", "center", "margin-bottom", "50px", "margin-top", "30px"], [1, "btn", "login-button", 3, "ngStyle"], ["target", "_blank", 1, "promotion-text", 3, "href"], [1, "promotion-text"], ["target", "_blank", 1, "promotion-text-right", 3, "href"], [1, "promotion-text-right"]], template: function CreateAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CreateAccountComponent_a_2_Template, 2, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CreateAccountComponent_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CreateAccountComponent_a_5_Template, 2, 2, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CreateAccountComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "main", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Create Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkLeftHeaderLink());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.checkLeftHeaderLink());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rightHeaderLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.rightHeaderLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.bizService.get_webstore_link(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.bizService.get_company_logo(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.CreateAccountForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.bizService.get_background_color()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40px;\n  overflow-y: auto;\n  display: flex;\n  align-items: center;\n  color: white;\n  font-weight: 600;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.round-input[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  height: 50px;\n  padding-left: 20px;\n  border: 1px solid #C1C7D6;\n}\n\n.round-input[_ngcontent-%COMP%]:focus {\n  border: 2px solid #C1C7D6;\n}\n\n.round-input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border: 2px solid #C1C7D6;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  height: 50px;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.login-button[_ngcontent-%COMP%]:hover {\n  border: none;\n  outline: none;\n}\n\n.login-button[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: none;\n}\n\n.login-button[_ngcontent-%COMP%]:focus-visible {\n  border: none;\n  outline: none;\n}\n\n@media (max-width: 991.98px) {\n  .toolbar[_ngcontent-%COMP%] {\n    height: 0px;\n  }\n}\n\n@media (min-width: 991.98px) {\n  .toolbar[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .promotion-text[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    font-size: medium;\n    text-decoration: none;\n    color: white;\n  }\n\n  .promotion-text-right[_ngcontent-%COMP%] {\n    padding-right: 40px;\n    font-size: medium;\n    text-decoration: none;\n    color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NyZWF0ZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxPQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFGSjs7QUFLQTtFQUNJO0lBQ0ksV0FBQTtFQUZOO0FBQ0Y7O0FBT0E7RUFDSTtJQUNJLGtCQUFBO0VBTE47O0VBU0U7SUFDSSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0VBTk47O0VBU0U7SUFDSSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EscUJBQUE7SUFDQSxZQUFBO0VBTk47QUFDRiIsImZpbGUiOiJjcmVhdGUtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMTtcbn1cblxuLnJvdW5kLWlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzFDN0Q2O1xufVxuXG4ucm91bmQtaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDMUM3RDY7XG59XG5cbi5yb3VuZC1pbnB1dDpmb2N1cy12aXNpYmxlIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNDMUM3RDY7XG59XG5cbi5sb2dpbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogYXV0bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cblxufVxuXG5cbi5sb2dpbi1idXR0b246aG92ZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubG9naW4tYnV0dG9uOmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxvZ2luLWJ1dHRvbjpmb2N1cy12aXNpYmxlIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgLnRvb2xiYXIge1xuICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICB9XG5cblxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHtcbiAgICAudG9vbGJhciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIH1cblxuICAgIC5wcm9tb3Rpb24tdGV4dCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgIC5wcm9tb3Rpb24tdGV4dC1yaWdodCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ "WSYD":
/*!******************************************************************!*\
  !*** ./src/app/views/company-policy/company-policy.component.ts ***!
  \******************************************************************/
/*! exports provided: CompanyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPolicyComponent", function() { return CompanyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");



class CompanyPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
CompanyPolicyComponent.ɵfac = function CompanyPolicyComponent_Factory(t) { return new (t || CompanyPolicyComponent)(); };
CompanyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyPolicyComponent, selectors: [["app-company-policy"]], decls: 35, vars: 0, consts: [[2, "min-height", "100vh", "display", "flex", "flex-direction", "column", "max-width", "100vw", "overflow-x", "hidden"], [1, "row", "main-content", 2, "margin-top", "220px", "margin-bottom", "50px"], [2, "padding-left", "100px", "padding-right", "100px", "display", "flex", "flex-direction", "column"], [2, "font-size", "16px", "font-weight", "bold"], [2, "border", "1px solid #C1C7D6"], [2, "font-size", "32px", "font-weight", "bold", "margin-bottom", "20px"], [2, "margin-bottom", "50px"], [2, "padding-top", "20px", "bottom", "0", "width", "100%"]], template: function CompanyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Returns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Return Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Shipping Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Warranty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Warranty Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LXBvbGljeS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "YcN/":
/*!************************************************************!*\
  !*** ./src/app/views/spin-loader/spin-loader.component.ts ***!
  \************************************************************/
/*! exports provided: SpinLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinLoaderComponent", function() { return SpinLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");


class SpinLoaderComponent {
    constructor(bizService) {
        this.bizService = bizService;
        this.color = "#000000";
        this.color = this.bizService.get_background_color();
    }
    ngOnInit() {
    }
}
SpinLoaderComponent.ɵfac = function SpinLoaderComponent_Factory(t) { return new (t || SpinLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_1__["BizService"])); };
SpinLoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinLoaderComponent, selectors: [["app-spin-loader"]], decls: 9, vars: 1, consts: [[1, "row", 2, "margin-top", "30px", "margin-bottom", "30px", "justify-content", "center"], [1, "image"], ["width", "40px", "height", "40px", "viewBox", "0 0 16 16", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "transform", "rotate(0)", 1, "hds-flight-icon--animation-loading"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["fill-rule", "evenodd", "clip-rule", "evenodd"], ["d", "M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z", "opacity", ".2"], ["d", "M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"]], template: function SpinLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.color);
    } }, styles: ["@keyframes spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.loader-spinner[_ngcontent-%COMP%] {\n  animation: spin 4s linear infinite;\n  height: 50px;\n  width: 50px;\n}\n.image[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 0px !important;\n  animation: spin 2s linear infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwaW4tbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0U7SUFFSSx5QkFBQTtFQUlKO0FBQ0Y7QUFEQTtFQUdFLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHRjtBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUdBLGtDQUFBO0FBR0YiLCJmaWxlIjoic3Bpbi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkAtbW96LWtleWZyYW1lcyBzcGluIHsgXG4gIDEwMCUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gXG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7IFxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IFxufVxuQGtleWZyYW1lcyBzcGluIHsgXG4gIDEwMCUgeyBcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgXG4gICAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7IFxuICB9IFxufVxuXG4ubG9hZGVyLXNwaW5uZXJ7XG4gIC13ZWJraXQtYW5pbWF0aW9uOnNwaW4gNHMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjpzcGluIDRzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOnNwaW4gNHMgbGluZWFyIGluZmluaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uaW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xuICAtd2Via2l0LWFuaW1hdGlvbjpzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246c3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjpzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ "b/hC":
/*!************************************************!*\
  !*** ./src/app/services/search-bar.service.ts ***!
  \************************************************/
/*! exports provided: SearchBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarService", function() { return SearchBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchBarService {
    constructor() {
        this.onSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    search(query) {
        this.onSearch.emit(query);
    }
}
SearchBarService.ɵfac = function SearchBarService_Factory(t) { return new (t || SearchBarService)(); };
SearchBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchBarService, factory: SearchBarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "dtwp":
/*!******************************************************************!*\
  !*** ./src/app/views/payment-method/payment-method.component.ts ***!
  \******************************************************************/
/*! exports provided: PaymentMethodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodComponent", function() { return PaymentMethodComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");










function PaymentMethodComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pm_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", pm_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pm_r2.name);
} }
function PaymentMethodComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cct_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cct_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cct_r3.name);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class PaymentMethodComponent {
    constructor(formBuilder, apiService, userInfoService, bizService, router, route) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.router = router;
        this.route = route;
        this.cartItems = [];
        this.payment_methods = [{
                id: "1",
                name: "Credit Card"
            }];
        this.credit_card_types = [{
                id: "1",
                name: "America Express"
            }];
        this.customer = "customer";
        this.business = "business";
        this.catalog = "catalog";
        this.cart_summary = {
            currency: '$',
            subtotal: '0',
            freight_cost: '0',
            estimated_tax: '0',
            total_cost: '0'
        };
    }
    ngOnInit() {
        this.paymentForm = this.formBuilder.group({
            order_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            payment_method: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            credit_card_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            card_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            card_owner: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            expiration_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            cvc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
        this.cartItems = this.userInfoService.getCartItems();
        this.paymentForm.patchValue({ order_id: this.route.snapshot.params.order_id });
        this.calculateCartCost();
        this.apiService.getPaymentMethods().subscribe(res => { this.payment_methods = res; }, err => { });
        this.apiService.getCreditCardTypes().subscribe(res => { this.credit_card_types = res; }, err => { });
        this.type = this.bizService.getBizType();
    }
    submitForm() {
        this.apiService.addOrderPaymentMethod(this.paymentForm.value).subscribe(res => {
            this.router.navigateByUrl("/" + this.bizService.getBizId() + '/confirm-order/' + this.route.snapshot.params.order_id);
        }, err => { });
    }
    calculateCartCost() {
        this.cart_summary.subtotal = 0;
        this.cart_summary.total_cost = 0;
        this.cart_summary.freight_cost = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            let item = this.cartItems[i];
            this.cart_summary.subtotal = this.cart_summary.subtotal + parseFloat(item.pricing.first_cost) * item.product_count;
            this.cart_summary.freight_cost = this.cart_summary.freight_cost + parseFloat(item.pricing.freight_cost) * item.product_count;
            this.cart_summary.total_cost = parseFloat(((this.cart_summary.subtotal + this.cart_summary.freight_cost)).toFixed(2));
            this.cart_summary.subtotal = this.cart_summary.total_cost;
        }
        // this.apiService.calculateCartCosts(this.userInfoService.getCartItems()).subscribe(res=>{
        //   this.cart_summary=res;
        // },err=>{});
    }
}
PaymentMethodComponent.ɵfac = function PaymentMethodComponent_Factory(t) { return new (t || PaymentMethodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
PaymentMethodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PaymentMethodComponent, selectors: [["app-payment-method"]], decls: 90, vars: 15, consts: [[2, "padding-top", "100px"], [1, "main-content"], [1, "row"], [1, "page-title"], [3, "formGroup"], [1, "row", "form-info"], [1, "col-lg-6", "col-sm-6", "col-12", "col-form"], [1, "form-group"], ["formControlName", "payment_method", "placeholder", "Payment Method", 1, "form-select", "round-input"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", 2, "margin-top", "20px"], ["formControlName", "credit_card_type", "placeholder", "Credit Card Type", 1, "form-select", "round-input"], ["formControlName", "card_number", "placeholder", "Card Number", 1, "form-control", "round-input"], ["formControlName", "card_owner", "placeholder", "Card Owner", 1, "form-control", "round-input"], [1, "col-sm-6", "col-lg-6"], ["formControlName", "expiration_date", "placeholder", "02/23", 1, "form-control", "round-input"], [1, "col-sm-6", "col-lg-6", "small-margin-top-20"], ["formControlName", "cvc", "placeholder", "cvc", 1, "form-control", "round-input"], [1, "row", 2, "margin-top", "30px", "justify-content", "center"], [1, "submit-now-button", 3, "ngStyle", "click"], [1, "col-lg-6", "col-sm-6", "col-12", "col-summary"], [1, "card", "summary-card"], [1, "card-body"], [2, "font-weight", "700"], [2, "font-size", "medium"], [1, "row", 2, "margin-top", "15px"], [1, "line"], [2, "display", "inline-block"], [2, "float", "right"], [1, "row", 2, "margin-top", "50px"], [2, "padding-top", "20px"], [3, "value"]], template: function PaymentMethodComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Payment Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PaymentMethodComponent_option_16_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Credit Card Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PaymentMethodComponent_option_22_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Name on Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Expiration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "CVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentMethodComponent_Template_button_click_45_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Save & Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Cart Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Order Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Freight Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " Estimated Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Add Gift Card/Promo Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "footer", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.paymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.payment_methods);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.credit_card_types);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.userInfoService.getCartItems().length, " items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.subtotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.freight_cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.estimated_tax, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.total_cost, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerFooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".main[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0 6px #777;\n}\n\n.submit-now-button[_ngcontent-%COMP%] {\n  height: 50px;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 15px;\n  border: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  font-size: x-large;\n}\n\n.card-round[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n  border-radius: 10px;\n  height: 100%;\n  padding: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 900;\n  font-size: large;\n}\n\n.info-title-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.dash[_ngcontent-%COMP%] {\n  background-color: #0c0c0c;\n  height: 5px;\n  width: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 4px;\n  width: 98%;\n  margin: auto;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  height: 50px;\n  padding-left: 15px;\n  border: 2px solid #C1C7D6;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   .text-area-height[_ngcontent-%COMP%] {\n  height: 82%;\n}\n\n.img-table[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.table-borderless[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.submit-button-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  float: right;\n  height: 50px;\n  padding: auto;\n  border-radius: 10px;\n  font-size: large;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  font-size: x-large;\n}\n\n@media (min-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n\n  .col-form[_ngcontent-%COMP%] {\n    padding-right: 50px;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .page-title[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    font-size: x-large;\n  }\n\n  .submit-now-button[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n\n  .submit-now-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .small-margin-top-20[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUdPLDBCQUFBO0FBQ1A7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFERjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUU7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBTUE7RUFDRSxXQUFBO0FBSEY7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVNBO0VBQ0UsV0FBQTtBQU5GOztBQVVBO0VBQ0Usa0JBQUE7QUFQRjs7QUFVQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFXQTtFQUNFO0lBQ0Usa0JBQUE7RUFSRjs7RUFVQTtJQUNFLG1CQUFBO0VBUEY7O0VBU0E7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBTkY7O0VBUUE7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0VBTEY7O0VBT0E7SUFFRSxVQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFO0lBQ0UsaUJBQUE7RUFORjs7RUFRQTtJQUNFLFdBQUE7RUFMRjtBQUNGOztBQVNBO0VBQ0U7SUFDRSxnQkFBQTtFQVBGO0FBQ0YiLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLnN1bW1hcnktY2FyZHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gICAgICAgYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3Nztcbn1cblxuLnN1Ym1pdC1ub3ctYnV0dG9ue1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6bm9uZTtcblxufVxuXG5cbi5jYXJke1xuICBib3JkZXItcmFkaXVzOjEwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ucGFnZS10aXRsZXtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG4uY2FyZC1yb3VuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRkJGOTtcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbmZvLXRpdGxle1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuXG59XG4uaW5mby10aXRsZS1zZWN0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG59XG5cblxuLmRhc2h7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ubGluZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOmF1dG87XG5cbn1cbi5mb3JtLWluZm97XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmxhYmVse1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvcm0tZ3JvdXAge1xuICAucm91bmQtaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0MxQzdENjtcbiAgfVxufVxuXG4uZnVsbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG4uZm9ybS1ncm91cCAudGV4dC1hcmVhLWhlaWdodHtcbiAgaGVpZ2h0OiA4MiU7XG59XG5cblxuXG4uaW1nLXRhYmxle1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG5cbi50YWJsZS1ib3JkZXJsZXNze1xuICBib3JkZXI6MHB4O1xufVxuXG5cbi5zdWJtaXQtYnV0dG9uLXNlY3Rpb257XG4gIHBhZGRpbmctdG9wOjEwMHB4O1xufVxuXG4uYnRuLXN1Ym1pdHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5wYWdlLXRpdGxle1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSB7IFxuICAuY29sLXN1bW1hcnl7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG4gIC5jb2wtZm9ybXtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnR7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLnBhZ2UtdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIH1cbiAgLnN1Ym1pdC1ub3ctYnV0dG9ue1xuICBcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCl7XG4gIC5jb2wtc3VtbWFyeXtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuICAuc3VibWl0LW5vdy1idXR0b257ICBcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCl7XG4gIC5zbWFsbC1tYXJnaW4tdG9wLTIwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "fsx9":
/*!*******************************************************************!*\
  !*** ./src/app/directives/hover-activated-accordion.directive.ts ***!
  \*******************************************************************/
/*! exports provided: HoverActivatedAccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverActivatedAccordionDirective", function() { return HoverActivatedAccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HoverActivatedAccordionDirective {
    constructor() {
        this.fileDropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onMouseOver(evt) {
        this.mouseover = true;
    }
    onMouseOut(evt) {
        this.mouseover = false;
    }
}
HoverActivatedAccordionDirective.ɵfac = function HoverActivatedAccordionDirective_Factory(t) { return new (t || HoverActivatedAccordionDirective)(); };
HoverActivatedAccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HoverActivatedAccordionDirective, selectors: [["", "hoverActivatedAccordion", ""]], hostVars: 2, hostBindings: function HoverActivatedAccordionDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HoverActivatedAccordionDirective_mouseover_HostBindingHandler($event) { return ctx.onMouseOver($event); })("mouseout", function HoverActivatedAccordionDirective_mouseout_HostBindingHandler($event) { return ctx.onMouseOut($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("display-block", ctx.mouseover);
    } }, outputs: { fileDropped: "fileDropped" } });


/***/ }),

/***/ "hWxu":
/*!****************************************************!*\
  !*** ./src/app/views/account/account.component.ts ***!
  \****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "FPq/");





class AccountComponent {
    constructor(apiService, userInfoService) {
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.customer_detail = {
            "address_1": "",
            "address_2": "",
            "city": "",
            "state": "",
            "postal_code": "",
            "country": "",
            "company": "",
            "id": "",
            "banking": {
                "id": "",
                "payment_type": "",
                "bank_address": "",
                "secondary_bank_address": "",
                "account_no": "",
                "routing_no": "",
                "account_type": "",
                "card_number": "",
                "expiry_month": "",
                "expiry_year": "",
                "zip_code": "",
                "cvc_code": "",
                "card_holder": "",
                "payment_terms": "",
                "custom_payment_terms": "",
                "customer": ""
            },
            "contacts": {
                "id": "",
                "first_name": "",
                "last_name": "",
                "email": "",
                "wechat": "",
                "whatsapp": "",
                "primary_language": "",
                "secondary_language": "",
                "phone": "",
                "customer": ""
            },
            "shipping": {
                "id": "",
                "address_1": "",
                "address_2": "",
                "state": "",
                "region": "",
                "dropship": "",
                "city": "",
                "preferred_carrier": "",
                "zip_code": "",
                "country": "",
                "ship_allowance": "",
                "ship_discount": "",
                "customer": ""
            },
            "logo": "",
            "location": {},
            "allowances": [{
                    "id": "",
                    "shipment_parameter": "",
                    "preferred_carrier": "",
                    "customer": ""
                }]
        };
        this.orders = [];
    }
    ngOnInit() {
        this.apiService.getCustomerDetail(this.userInfoService.getCustomerId()).subscribe(res => {
            this.customer_detail = res;
        }, err => { });
    }
    joinName(first_name, last_name) {
        return first_name + " " + last_name;
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 127, vars: 19, consts: [[1, "container-fluid"], [1, "row", "main-content"], [1, "card", 2, "border", "none"], [1, "card-body", 2, "padding-top", "100px"], [1, "col-sm-12", "col-lg-12"], [1, "row", "info-title-section"], [1, "col-lg-12", "col-sm-12", "col-12"], [1, "row"], [1, "info-title"], [1, "dash", 2, "float", "right", "margin-top", "-15px"], [1, "line"], [1, "row", "form-info"], [1, "col-lg-3", "col-sm-3", "col-12"], [1, "row", 2, "margin-top", "10px"], [1, "form-group"], ["disabled", "", "type", "text", "placeholder", "Company Name", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Contact Name", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "1-999-999-9999", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Email", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Address", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Secondary Address", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Country", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Utah", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "84433", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Credit Card", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "Card Name", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "***************", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "***", 1, "form-control", "round-input", 3, "value"], ["disabled", "", "type", "text", "placeholder", "United Stated", 1, "form-control", "round-input", 3, "value"], [2, "padding-top", "20px"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Account Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Secondary Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Payment Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Payment Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Card Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Card Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Expiration Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "CVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Billing Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "footer", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.company);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.joinName(ctx.customer_detail.contacts.first_name, ctx.customer_detail.contacts.last_name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.contacts.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.contacts.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.address_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.address_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.postal_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.payment_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.card_holder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.card_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("value", "", ctx.customer_detail.banking.expiry_month, "", ctx.customer_detail.banking.expiry_year, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.cvc_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.bank_address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.customer_detail.banking.zip_code);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"sofia\";\n}\n\n@media (min-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 100px;\n    padding-right: 100px;\n  }\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #7a7878;\n  height: 3px;\n  width: 100%;\n}\n\n.icon[_ngcontent-%COMP%] {\n  right: 0;\n  margin-right: 20px;\n  top: 0;\n  position: absolute;\n  font-size: large;\n}\n\n.add-cart[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: x-large;\n  color: white;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.add-cart-button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50px;\n  padding: auto;\n  background: #fff;\n  color: #f68b1e;\n  font-size: large;\n  font-weight: 500;\n  border-radius: 5px;\n  border: 1px solid #f68b1e;\n}\n\n.buy-now-button[_ngcontent-%COMP%] {\n  min-width: 30%;\n  height: 50px;\n  background: #f68b1e;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.checkout-button[_ngcontent-%COMP%] {\n  min-width: 35%;\n  height: 50px;\n  background: #f68b1e;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.remove-button[_ngcontent-%COMP%] {\n  min-width: 30%;\n  height: 50px;\n  border-color: #d10404;\n  background: white;\n  color: black;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 10px;\n}\n\n.product-stock-status[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: medium;\n}\n\n.delivery-policy[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: medium;\n}\n\n.like-button[_ngcontent-%COMP%] {\n  float: right;\n  font-size: xx-large;\n}\n\n.product-card-detail[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding: 10px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.card-detail[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n\n.product-description-header[_ngcontent-%COMP%] {\n  font-size: xx-large !important;\n  font-weight: 500;\n}\n\n.product-description[_ngcontent-%COMP%] {\n  font-size: medium !important;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: flex;\n  position: relative;\n  justify-content: center;\n}\n\n.cards[_ngcontent-%COMP%] {\n  width: calc(100% - 80px);\n  overflow: hidden;\n}\n\n.overflow[_ngcontent-%COMP%] {\n  position: relative;\n  transition: left 0.5s ease-in-out;\n}\n\n.small-card[_ngcontent-%COMP%] {\n  height: 100px;\n  background-color: #e0e1e2;\n  border-radius: 5px;\n  padding: 1px;\n  display: inline-block;\n  margin-right: 10px;\n  position: relative;\n}\n\n.small-card-selected[_ngcontent-%COMP%] {\n  border: solid 1px #f68b1e;\n  border-radius: 5px;\n}\n\n.small-card-not-selected[_ngcontent-%COMP%] {\n  border: 0px;\n  border-radius: 5px;\n}\n\n.small-img[_ngcontent-%COMP%] {\n  background-repeat: round;\n}\n\n.no-right-margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.small-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  height: 30px;\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 30px;\n  color: black;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.left.disabled[_ngcontent-%COMP%], .right.disabled[_ngcontent-%COMP%] {\n  color: #CCC;\n}\n\n.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  background-color: #f1f1f1;\n  border: none;\n  border-radius: 4px;\n  color: #555;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.button[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  margin-right: 8px;\n  background-color: #555;\n  color: #fff;\n  border-radius: 50%;\n  font-size: 14px;\n}\n\n.button[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%]:before {\n  content: \"+\";\n}\n\n.button[_ngcontent-%COMP%]   .minus[_ngcontent-%COMP%]:before {\n  content: \"-\";\n}\n\n@media (max-width: 991.98px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-top: 80px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n\n  .cart-buttons[_ngcontent-%COMP%] {\n    display: contents;\n  }\n\n  .remove-button[_ngcontent-%COMP%], .buy-now-button[_ngcontent-%COMP%], .checkout-button[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-top: 10px;\n  }\n}\n\n@media (min-width: 991.98px) {\n  .cart-buttons[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  .buy-now-button[_ngcontent-%COMP%], .checkout-button[_ngcontent-%COMP%] {\n    margin-left: 20px;\n  }\n}\n\n.info-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-top: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.round-input[_ngcontent-%COMP%] {\n  background-color: white;\n  border: none;\n  padding-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxvQkFBQTtBQURKOztBQUlFO0VBQ0U7SUFDSSxtQkFBQTtJQUNBLG9CQUFBO0VBRE47QUFDRjs7QUFLRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFISjs7QUFNRTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBU0U7RUFDTSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFOUjs7QUFVRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVBKOztBQVlFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFUSjs7QUFhRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFWSjs7QUFhRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFWSjs7QUFZRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQVRKOztBQVlFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FBVEo7O0FBV0U7RUFDRSx1QkFBQTtBQVJKOztBQVVFO0VBQ0UsWUFBQTtBQVBKOztBQVNFO0VBRUUsOEJBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVVFO0VBQ0UsNEJBQUE7QUFQSjs7QUFTRTtFQUNFLHNCQUFBO0FBTko7O0FBUUU7Ozs7Ozs7Ozs7RUFBQTs7QUFZQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFTRTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7QUFOSjs7QUFTRTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7QUFOSjs7QUFTRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVFFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUxKOztBQU9FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBSko7O0FBTUU7RUFDRSx3QkFBQTtBQUhKOztBQU1FO0VBQ0UsaUJBQUE7QUFISjs7QUFNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBSEo7O0FBTUU7O0VBRUUsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBSEo7O0FBTUU7RUFDRSxXQUFBO0FBSEo7O0FBTUU7RUFDRSxPQUFBO0FBSEo7O0FBTUU7RUFDRSxRQUFBO0FBSEo7O0FBUUU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFMSjs7QUFRRTtFQUNFLHNCQUFBO0FBTEo7O0FBUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRRTtFQUNFLFlBQUE7QUFMSjs7QUFRRTtFQUNFLFlBQUE7QUFMSjs7QUFTRTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBTko7O0VBVUU7SUFDRSxpQkFBQTtFQVBKOztFQVVFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQVBKO0FBQ0Y7O0FBYUU7RUFFRTtJQUNFLGFBQUE7RUFaSjs7RUFjRTtJQUNFLGlCQUFBO0VBWEo7QUFDRjs7QUFlRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFiSjs7QUFlRTtFQUNJLGdCQUFBO0FBWk47O0FBY0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVhKIiwiZmlsZSI6ImFjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuKntcbiAgICBmb250LWZhbWlseTogJ3NvZmlhJztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCl7XG4gICAgLm1haW4tY29udGVudHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAwcHg7XG4gICAgfVxufVxuICBcblxuICAubGluZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTIyLCAxMjAsIDEyMCk7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIFxuICB9XG4gIC5pY29ue1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB0b3A6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIH1cbiAgXG4gIC5hZGQtY2FydHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbiAgXG4gIFxuICAuYWRkLWNhcnQtYnV0dG9ue1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogI2Y2OGIxZTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNjhiMWU7XG4gIFxuICBcbiAgfVxuICBcbiAgLmJ1eS1ub3ctYnV0dG9ue1xuICAgICAgICBtaW4td2lkdGg6MzAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNjhiMWU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICBwYWRkaW5nOiBhdXRvO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIFxuICAgIFxuICB9XG4gIC5jaGVja291dC1idXR0b257XG4gICAgbWluLXdpZHRoOjM1JTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogI2Y2OGIxZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHBhZGRpbmc6IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBcbiAgXG4gIH1cbiAgXG4gIC5yZW1vdmUtYnV0dG9ue1xuICAgIG1pbi13aWR0aDozMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIwOSwgNCwgNCk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogYXV0bztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIFxuICBcbiAgfVxuICAucHJvZHVjdC1zdG9jay1zdGF0dXN7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgfVxuICBcbiAgLmRlbGl2ZXJ5LXBvbGljeXtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICB9XG4gIC5saWtlLWJ1dHRvbntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgfVxuICBcbiAgLnByb2R1Y3QtY2FyZC1kZXRhaWx7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG4gIC5jYXJkLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICB9XG4gIC5jYXJkLWRldGFpbHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLnByb2R1Y3QtZGVzY3JpcHRpb24taGVhZGVye1xuICAgXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgXG4gIC5wcm9kdWN0LWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnctMTAwIHtcbiAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XG4gIH1cbiAgLypcbiAgLm1haW4tY2FyZHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAgICAgICAgYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3NztcbiAgfVxuICAuZGVsaXZlcnktY2FyZHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAgICAgICAgYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3NztcbiAgfSovXG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuY2FyZHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAub3ZlcmZsb3cge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5zbWFsbC1jYXJke1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTFlMjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMXB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5zbWFsbC1jYXJkLXNlbGVjdGVke1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNmNjhiMWU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIC5zbWFsbC1jYXJkLW5vdC1zZWxlY3RlZHtcbiAgICBib3JkZXI6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cbiAgLnNtYWxsLWltZ3tcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gIH1cbiAgXG4gIC5uby1yaWdodC1tYXJnaW4ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIFxuICAuc21hbGwtY2FyZCBkaXYge1xuICAgIHdpZHRoOjEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgXG4gIC5sZWZ0LFxuICAucmlnaHQge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gIC5sZWZ0LmRpc2FibGVkLCAucmlnaHQuZGlzYWJsZWQge1xuICAgIGNvbG9yOiNDQ0M7XG4gIH1cbiAgXG4gIC5sZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIFxuICAucmlnaHQge1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIFxuICBcbiAgXG4gIC5idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB9XG4gIFxuICAuYnV0dG9uIC5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICBcbiAgLmJ1dHRvbiAucGx1czpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiK1wiO1xuICB9XG4gIFxuICAuYnV0dG9uIC5taW51czpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiLVwiO1xuICB9XG4gIFxuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkgeyBcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgfVxuXG4gIFxuICAgIC5jYXJ0LWJ1dHRvbnN7XG4gICAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgICB9XG4gIFxuICAgIC5yZW1vdmUtYnV0dG9uLC5idXktbm93LWJ1dHRvbiwuY2hlY2tvdXQtYnV0dG9ue1xuICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICB9XG4gIFxuICB9XG4gIFxuXG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSB7IFxuICBcbiAgICAuY2FydC1idXR0b25ze1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLmJ1eS1ub3ctYnV0dG9uLC5jaGVja291dC1idXR0b257XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG4gIH1cblxuXG4gIC5pbmZvLXRpdGxle1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICBsYWJlbHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLnJvdW5kLWlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjpub25lO1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "lOie":
/*!****************************************************************!*\
  !*** ./src/app/views/star-rate-bar/star-rate-bar.component.ts ***!
  \****************************************************************/
/*! exports provided: StarRateBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRateBarComponent", function() { return StarRateBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function StarRateBarComponent_span_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 6);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.fillStyle());
} }
function StarRateBarComponent_span_2_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r3.fillStyle());
} }
function StarRateBarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StarRateBarComponent_span_2_i_1_Template, 1, 1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StarRateBarComponent_span_2_i_2_Template, 1, 1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.filled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.filled);
} }
class StarRateBarComponent {
    constructor(bizService) {
        this.bizService = bizService;
        this.color = "#f68b1e";
        this.rate = 0;
        this.stars = 5;
        this.label = "";
        this.size = 24;
        this.ratedata = [{ filled: false }, { filled: false }, { filled: false }, { filled: false }, { filled: false }];
        this.color = this.bizService.get_background_color();
    }
    ngOnInit() {
        this.ratedata = [];
        for (var i = 0; i < this.stars; i++) {
            if (i < this.rate) {
                this.ratedata.push({ filled: true });
            }
            else {
                this.ratedata.push({ filled: false });
            }
        }
    }
    fillStyle() {
        return {
            "font-size": this.size.toString() + "px",
            "color": this.bizService.get_background_color()
        };
    }
    emptyStyle() {
        return {
            "font-size": this.size.toString() + "px"
        };
    }
}
StarRateBarComponent.ɵfac = function StarRateBarComponent_Factory(t) { return new (t || StarRateBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_1__["BizService"])); };
StarRateBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StarRateBarComponent, selectors: [["app-star-rate-bar"]], inputs: { color: "color", rate: "rate", stars: "stars", label: "label", size: "size" }, decls: 5, vars: 2, consts: [[1, "row"], [1, "col-lg-12", "col-sm-12"], [4, "ngFor", "ngForOf"], [2, "padding-left", "10px", "font-size", "medium"], ["class", "bi bi-star-fill", 3, "ngStyle", 4, "ngIf"], ["class", "bi bi-star", 3, "ngStyle", 4, "ngIf"], [1, "bi", "bi-star-fill", 3, "ngStyle"], [1, "bi", "bi-star", 3, "ngStyle"]], template: function StarRateBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StarRateBarComponent_span_2_Template, 3, 2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratedata);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["input[_ngcontent-%COMP%] {\n  font-family: fontAwesome;\n}\n\ni[_ngcontent-%COMP%] {\n  color: #f68b1e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0YXItcmF0ZS1iYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKIiwiZmlsZSI6InN0YXItcmF0ZS1iYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7ICBcbiAgICBmb250LWZhbWlseTogZm9udEF3ZXNvbWU7ICBcbn0gIFxuaXtcbiAgICBjb2xvcjogI2Y2OGIxZTtcbn1cblxuIl19 */"] });


/***/ }),

/***/ "n9tf":
/*!****************************************!*\
  !*** ./src/app/home-routing.module.ts ***!
  \****************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_account_account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/account/account.component */ "hWxu");
/* harmony import */ var _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/cart/cart.component */ "wlfi");
/* harmony import */ var _views_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/confirm-order/confirm-order.component */ "pVBT");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_item_detail_desktop_item_detail_desktop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/item-detail-desktop/item-detail-desktop.component */ "R7A+");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/orders/orders.component */ "N8wx");
/* harmony import */ var _views_payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/payment-method/payment-method.component */ "dtwp");
/* harmony import */ var _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/search/search.component */ "s4XM");
/* harmony import */ var _views_shipping_detail_shipping_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/shipping-detail/shipping-detail.component */ "yquH");
/* harmony import */ var _views_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/forgot-password/forgot-password.component */ "OXAH");
/* harmony import */ var _views_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/create-account/create-account.component */ "VuPt");
/* harmony import */ var _views_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/faqs/faqs.component */ "7Cea");
/* harmony import */ var _views_company_policy_company_policy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/company-policy/company-policy.component */ "WSYD");
/* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/about/about.component */ "7wzR");
/* harmony import */ var _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/contact-us/contact-us.component */ "PUU/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");



















const routes = [
    {
        path: '',
        component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'products',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
    },
    {
        path: 'products/:category',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
    },
    {
        path: 'products/:category/:subcategory',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
    },
    {
        path: 'partner/:partner_id',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
    },
    {
        path: 'collections/:collection',
        component: _views_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"]
    },
    {
        path: 'cart',
        component: _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]
    },
    {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'resetpassword',
        component: _views_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]
    },
    {
        path: 'resetpassword/:section_no',
        component: _views_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]
    },
    {
        path: 'resetpassword/:section_no/:activation_code',
        component: _views_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"]
    },
    {
        path: 'payment-method/:order_id',
        component: _views_payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_8__["PaymentMethodComponent"]
    },
    {
        path: 'shipping-detail',
        component: _views_shipping_detail_shipping_detail_component__WEBPACK_IMPORTED_MODULE_10__["ShippingDetailComponent"]
    },
    {
        path: 'confirm-order/:order_id',
        component: _views_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmOrderComponent"]
    },
    {
        path: 'account',
        component: _views_account_account_component__WEBPACK_IMPORTED_MODULE_1__["AccountComponent"]
    },
    {
        path: 'faqs',
        component: _views_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_13__["FaqsComponent"]
    },
    {
        path: 'policies',
        component: _views_company_policy_company_policy_component__WEBPACK_IMPORTED_MODULE_14__["CompanyPolicyComponent"]
    },
    {
        path: 'about',
        component: _views_about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"]
    },
    {
        path: 'contact-us',
        component: _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__["ContactUsComponent"]
    },
    {
        path: 'create-account',
        component: _views_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_12__["CreateAccountComponent"]
    },
    {
        path: 'my-orders',
        component: _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_7__["OrdersComponent"]
    },
    // {
    //   path:'product/:id',
    //   component:ItemDetailComponent
    // },
    {
        path: 'product/:id',
        component: _views_item_detail_desktop_item_detail_desktop_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailDesktopComponent"]
    },
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "nDZ3":
/*!********************************!*\
  !*** ./src/app/home.module.ts ***!
  \********************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/cart/cart.component */ "wlfi");
/* harmony import */ var _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/footer/footer.component */ "FPq/");
/* harmony import */ var _views_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/header/header.component */ "MR1q");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_item_detail_desktop_item_detail_desktop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/item-detail-desktop/item-detail-desktop.component */ "R7A+");
/* harmony import */ var _views_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/item-detail/item-detail.component */ "HBHD");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/payment-method/payment-method.component */ "dtwp");
/* harmony import */ var _views_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/search/search.component */ "s4XM");
/* harmony import */ var _views_shipping_detail_shipping_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/shipping-detail/shipping-detail.component */ "yquH");
/* harmony import */ var _views_account_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/account/account.component */ "hWxu");
/* harmony import */ var _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/orders/orders.component */ "N8wx");
/* harmony import */ var _views_star_rate_bar_star_rate_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/star-rate-bar/star-rate-bar.component */ "lOie");
/* harmony import */ var _directives_hover_activated_accordion_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/hover-activated-accordion.directive */ "fsx9");
/* harmony import */ var _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/dynamic-size.directive */ "BT2B");
/* harmony import */ var _directives_hover_activated_navmenu_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/hover-activated-navmenu.directive */ "IV1m");
/* harmony import */ var _directives_mouse_out_hide_navmenu_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/mouse-out-hide-navmenu.directive */ "CsZ6");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home-routing.module */ "n9tf");
/* harmony import */ var _views_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/confirm-order/confirm-order.component */ "pVBT");
/* harmony import */ var _views_spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/spin-loader/spin-loader.component */ "YcN/");
/* harmony import */ var _pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pipe/title-case.pipe */ "Ffdx");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var primeng_galleria__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/galleria */ "2art");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/carousel */ "LwO5");
/* harmony import */ var _views_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/forgot-password/forgot-password.component */ "OXAH");
/* harmony import */ var _views_contact_us_modal_contact_us_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/contact-us-modal/contact-us-modal.component */ "Kxzt");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/api */ "7zfz");
/* harmony import */ var primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/dynamicdialog */ "J7/z");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/toast */ "Gxio");
/* harmony import */ var _views_customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/customer-footer/customer-footer.component */ "1zey");
/* harmony import */ var _views_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/create-account/create-account.component */ "VuPt");
/* harmony import */ var _views_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./views/faqs/faqs.component */ "7Cea");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/accordion */ "7LiV");
/* harmony import */ var _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./views/contact-us/contact-us.component */ "PUU/");
/* harmony import */ var _views_company_policy_company_policy_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./views/company-policy/company-policy.component */ "WSYD");
/* harmony import */ var _views_about_about_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./views/about/about.component */ "7wzR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/router */ "tyNb");











































class HomeModule {
    constructor() {
    }
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_29__["MessageService"],
        primeng_dynamicdialog__WEBPACK_IMPORTED_MODULE_30__["DialogService"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_31__["ToastModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_35__["AccordionModule"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_20__["HomeRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
            primeng_galleria__WEBPACK_IMPORTED_MODULE_25__["GalleriaModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_26__["CarouselModule"],
            primeng_accordion__WEBPACK_IMPORTED_MODULE_35__["AccordionModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_31__["ToastModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_23__["TitleCasePipe"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _views_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailComponent"],
        _views_item_detail_desktop_item_detail_desktop_component__WEBPACK_IMPORTED_MODULE_6__["ItemDetailDesktopComponent"],
        _views_star_rate_bar_star_rate_bar_component__WEBPACK_IMPORTED_MODULE_14__["StarRateBarComponent"],
        _views_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _views_payment_method_payment_method_component__WEBPACK_IMPORTED_MODULE_9__["PaymentMethodComponent"],
        _views_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _views_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _views_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
        _views_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"],
        _views_confirm_order_confirm_order_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmOrderComponent"],
        _views_shipping_detail_shipping_detail_component__WEBPACK_IMPORTED_MODULE_11__["ShippingDetailComponent"],
        _views_account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"],
        _views_orders_orders_component__WEBPACK_IMPORTED_MODULE_13__["OrdersComponent"],
        _views_account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"],
        _directives_hover_activated_accordion_directive__WEBPACK_IMPORTED_MODULE_15__["HoverActivatedAccordionDirective"],
        _directives_hover_activated_navmenu_directive__WEBPACK_IMPORTED_MODULE_17__["HoverActivatedNavMenuDirective"],
        _directives_mouse_out_hide_navmenu_directive__WEBPACK_IMPORTED_MODULE_18__["MouseOutHideNavMenuDirective"],
        _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_16__["DynamicSizeDirective"],
        _views_spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_22__["SpinLoaderComponent"],
        _views_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_27__["ForgotPasswordComponent"],
        _views_contact_us_modal_contact_us_modal_component__WEBPACK_IMPORTED_MODULE_28__["ContactUsModalComponent"],
        _views_customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_32__["CustomerFooterComponent"],
        _views_create_account_create_account_component__WEBPACK_IMPORTED_MODULE_33__["CreateAccountComponent"],
        _views_faqs_faqs_component__WEBPACK_IMPORTED_MODULE_34__["FaqsComponent"],
        _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_36__["ContactUsComponent"],
        _views_company_policy_company_policy_component__WEBPACK_IMPORTED_MODULE_37__["CompanyPolicyComponent"],
        _views_about_about_component__WEBPACK_IMPORTED_MODULE_38__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_20__["HomeRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
        primeng_galleria__WEBPACK_IMPORTED_MODULE_25__["GalleriaModule"],
        primeng_carousel__WEBPACK_IMPORTED_MODULE_26__["CarouselModule"],
        primeng_accordion__WEBPACK_IMPORTED_MODULE_35__["AccordionModule"],
        primeng_toast__WEBPACK_IMPORTED_MODULE_31__["ToastModule"]], exports: [_views_spin_loader_spin_loader_component__WEBPACK_IMPORTED_MODULE_22__["SpinLoaderComponent"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetComponentScope"](_views_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], [_views_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
    _directives_hover_activated_accordion_directive__WEBPACK_IMPORTED_MODULE_15__["HoverActivatedAccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_40__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _directives_dynamic_size_directive__WEBPACK_IMPORTED_MODULE_16__["DynamicSizeDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_40__["RouterLink"], _views_customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_32__["CustomerFooterComponent"]], [_pipe_title_case_pipe__WEBPACK_IMPORTED_MODULE_23__["TitleCasePipe"]]);


/***/ }),

/***/ "pVBT":
/*!****************************************************************!*\
  !*** ./src/app/views/confirm-order/confirm-order.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmOrderComponent", function() { return ConfirmOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");








function ConfirmOrderComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.sku, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.product_count, " ");
} }
class ConfirmOrderComponent {
    constructor(userInfoService, apiService, bizService, router, route) {
        this.userInfoService = userInfoService;
        this.apiService = apiService;
        this.bizService = bizService;
        this.router = router;
        this.route = route;
        this.cartItems = [];
        this.customer = "customer";
        this.business = "business";
        this.catalog = "catalog";
        this.cart_summary = {
            currency: '$',
            subtotal: 0,
            freight_cost: 0,
            estimated_tax: 0,
            total_cost: 0
        };
        this.order_detail = {};
        this.cartItems = this.userInfoService.getCartItems();
    }
    ngOnInit() {
        this.calculateCartCost();
        this.userInfoService.clearCartItems();
        this.apiService.getOrderInfo({ id: this.route.snapshot.params.order_id }).subscribe(res => {
            this.order_detail = res;
        }, err => { });
        this.type = this.bizService.getBizType();
    }
    reduceProductCount(item) {
        if (item.product_count > 1) {
            item.product_count = item.product_count - 1;
            this.userInfoService.updateItemCart(item);
        }
    }
    increaseProductCount(item) {
        item.product_count = item.product_count + 1;
        this.userInfoService.updateItemCart(item);
    }
    removeItem(item) {
        this.userInfoService.removeItemCart(item);
        this.cartItems = this.userInfoService.getCartItems();
        this.calculateCartCost();
    }
    calculateCartCost() {
        this.cart_summary.subtotal = 0;
        this.cart_summary.total_cost = 0;
        this.cart_summary.freight_cost = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            let item = this.cartItems[i];
            this.cart_summary.subtotal = this.cart_summary.subtotal + parseFloat(item.pricing.first_cost) * item.product_count;
            this.cart_summary.freight_cost = this.cart_summary.freight_cost + parseFloat(item.pricing.freight_cost) * item.product_count;
            this.cart_summary.total_cost = parseFloat(((this.cart_summary.subtotal + this.cart_summary.freight_cost)).toFixed(2));
            this.cart_summary.subtotal = this.cart_summary.total_cost;
        }
        // this.apiService.calculateCartCosts(this.cartItems).subscribe(res=>{
        //   this.cart_summary=res;
        // },err=>{});
    }
    checkout() {
        if (this.userInfoService.isLoggedIn()) {
            this.router.navigateByUrl("/" + this.bizService.getBizId() + "/shipping-detail");
        }
        else {
            this.router.navigateByUrl("/" + this.bizService.getBizId() + "/login");
        }
    }
}
ConfirmOrderComponent.ɵfac = function ConfirmOrderComponent_Factory(t) { return new (t || ConfirmOrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ConfirmOrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmOrderComponent, selectors: [["app-confirm-order"]], decls: 84, vars: 11, consts: [[1, "container-fluid", "vstack", "gap-2", "main-div"], [1, "cart-items-wrapper", "mb-5", "pb-5"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2"], [1, "card", "main-content", 2, "border", "none"], [1, "card-body"], [1, "row", "form-info"], [1, "col-lg-12", "col-sm-12", "col-12"], [1, "card", "summary-card"], [1, "col-lg-6", "col-sm-6", "col-12"], [1, "row", 2, "margin-top", "15px"], [2, "display", "inline-block"], ["width", "32px", "height", "32px", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "SVGRepo_bgCarrier", "stroke-width", "0"], ["id", "SVGRepo_tracerCarrier", "stroke-linecap", "round", "stroke-linejoin", "round"], ["id", "SVGRepo_iconCarrier"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z", "fill", "#f68b1e"], [2, "padding-top", "10px", "padding-left", "10px", "font-size", "xx-large", "font-weight", "600"], [2, "padding-left", "10px"], ["d", "M7 18H6.2C5.0799 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V10.2C3 9.0799 3 8.51984 3.21799 8.09202C3.40973 7.71569 3.71569 7.40973 4.09202 7.21799C4.51984 7 5.0799 7 6.2 7H7M17 18H17.8C18.9201 18 19.4802 18 19.908 17.782C20.2843 17.5903 20.5903 17.2843 20.782 16.908C21 16.4802 21 15.9201 21 14.8V10.2C21 9.07989 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H17M7 11H7.01M17 7V5.4V4.6C17 4.03995 17 3.75992 16.891 3.54601C16.7951 3.35785 16.6422 3.20487 16.454 3.10899C16.2401 3 15.9601 3 15.4 3H8.6C8.03995 3 7.75992 3 7.54601 3.10899C7.35785 3.20487 7.20487 3.35785 7.10899 3.54601C7 3.75992 7 4.03995 7 4.6V5.4V7M17 7H7M8.6 21H15.4C15.9601 21 16.2401 21 16.454 20.891C16.6422 20.7951 16.7951 20.6422 16.891 20.454C17 20.2401 17 19.9601 17 19.4V16.6C17 16.0399 17 15.7599 16.891 15.546C16.7951 15.3578 16.6422 15.2049 16.454 15.109C16.2401 15 15.9601 15 15.4 15H8.6C8.03995 15 7.75992 15 7.54601 15.109C7.35785 15.2049 7.20487 15.3578 7.10899 15.546C7 15.7599 7 16.0399 7 16.6V19.4C7 19.9601 7 20.2401 7.10899 20.454C7.20487 20.6422 7.35785 20.7951 7.54601 20.891C7.75992 21 8.03995 21 8.6 21Z", "stroke", "#000000", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [2, "font-weight", "600", "font-size", "larger"], ["class", "row", "style", "margin-top: 5px;", 4, "ngFor", "ngForOf"], [2, "font-weight", "400"], [2, "font-size", "larger", "font-weight", "600"], [2, "font-size", "medium", "font-weight", "300"], [1, "line"], [2, "float", "right"], [1, "row"], [1, "row", 2, "margin-top", "20px"], [2, "padding-top", "20px"], [1, "row", 2, "margin-top", "5px"], [1, "col-lg-7", "col-sm-7", "col-12"], [1, "col-lg-3", "col-sm-3", "col-12"], [1, "col-lg-2", "col-sm-2", "col-12"]], template: function ConfirmOrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Order Confirmed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "g", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Order Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ConfirmOrderComponent_div_40_Template, 7, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Your Order has been sent to your email on file! Look forward to working with you again soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Payment Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Order Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Freight Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Estimated Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "footer", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.order_detail.order_no);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cartItems.length, " Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.subtotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.freight_cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.estimated_tax, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.total_cost, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_7__["CustomerFooterComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  color: #211e22;\n  font-family: \"sofia\" !important;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0 6px #777;\n}\n\n.submit-now-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: auto;\n  height: 50px;\n  background: #f68b1e;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 50px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 3px;\n  width: 98%;\n  margin: auto;\n}\n\n.item-cart[_ngcontent-%COMP%] {\n  padding: 10px;\n  box-shadow: var(--bs-box-shadow);\n}\n\n.item-cart[_ngcontent-%COMP%]:hover, .item-cart[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0 10px #777;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.card-round[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n  border-radius: 50px;\n  height: 100%;\n  padding: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 900;\n  font-size: large;\n}\n\n.info-title-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.dash[_ngcontent-%COMP%] {\n  background-color: #0c0c0c;\n  height: 5px;\n  width: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 4px;\n  width: 98%;\n  margin: auto;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  height: 50px;\n  padding-left: 20px;\n  border: 3px solid #f1f1f1;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   .text-area-height[_ngcontent-%COMP%] {\n  height: 82%;\n}\n\n.img-table[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.table-borderless[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.submit-button-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  float: right;\n  height: 50px;\n  padding: auto;\n  border-radius: 40px;\n  font-size: large;\n}\n\n@media (min-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n\n  .col-cart[_ngcontent-%COMP%] {\n    padding-right: 50px;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .page-title[_ngcontent-%COMP%] {\n    font-size: x-large;\n    padding-left: 60px;\n  }\n\n  .main-div[_ngcontent-%COMP%] {\n    padding-top: 130px;\n  }\n\n  .item-price[_ngcontent-%COMP%] {\n    text-align: end;\n  }\n\n  .save-latter[_ngcontent-%COMP%] {\n    text-align: end;\n    padding: 0px;\n  }\n\n  .remove[_ngcontent-%COMP%] {\n    text-align: end;\n    padding: 0px;\n  }\n\n  .item-count[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .main-div[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n\n  .cart-items-header[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    top: 0px !important;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n\n  .summary-card[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbmZpcm0tb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFBO0VBQ0EsK0JBQUE7QUFIRjs7QUFRQTtFQUdPLDBCQUFBO0FBTFA7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBVUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0FBUEY7O0FBV0U7RUFJTywyQkFBQTtBQVRUOztBQWFBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBVkY7O0FBWUE7RUFDRSxtQkFBQTtBQVRGOztBQVdBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLG1CQUFBO0FBUkY7O0FBYUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBVkY7O0FBYUU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVZKOztBQWFBO0VBQ0UsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLGdCQUFBO0FBVkY7O0FBYUU7RUFDSSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBVk47O0FBY0E7RUFDRSxZQUFBO0FBWEY7O0FBZUE7RUFDRSxXQUFBO0FBWkY7O0FBaUJBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFkQTs7QUFrQkE7RUFDRSxXQUFBO0FBZkY7O0FBbUJBO0VBQ0Usa0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWhCRjs7QUFvQkE7RUFDRTtJQUNFLGtCQUFBO0VBakJGOztFQW1CQTtJQUNFLG1CQUFBO0VBaEJGOztFQWtCQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFmRjs7RUFpQkE7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0VBZEY7O0VBZ0JBO0lBQ0Usa0JBQUE7RUFiRjs7RUFlQTtJQUNFLGVBQUE7RUFaRjs7RUFjQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VBWEY7O0VBYUE7SUFDRSxlQUFBO0lBQ0EsWUFBQTtFQVZGOztFQVlBO0lBQ0UsWUFBQTtFQVRGO0FBQ0Y7O0FBYUE7RUFDRTtJQUNFLGdCQUFBO0VBWEY7O0VBYUE7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBVkY7O0VBYUE7SUFDRSw0QkFBQTtJQUNBLDZCQUFBO0VBVkY7O0VBWUE7SUFDRSxnQkFBQTtFQVRGO0FBQ0YiLCJmaWxlIjoiY29uZmlybS1vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuKntcbiAgY29sb3I6IzIxMWUyMjtcbiAgZm9udC1mYW1pbHk6ICdzb2ZpYScgIWltcG9ydGFudDtcbn1cblxuXG5cbi5zdW1tYXJ5LWNhcmR7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3NztcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAgICAgIGJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG59XG5cbi5zdWJtaXQtbm93LWJ1dHRvbntcbiAgd2lkdGg6MTAwJTtcbiAgcGFkZGluZzogYXV0bztcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjY4YjFlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgcGFkZGluZzogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcblxuXG59XG5cbi5saW5le1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogOTglO1xuICBtYXJnaW46YXV0bztcblxufVxuLml0ZW0tY2FydCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJzLWJveC1zaGFkb3cpO1xufVxuLml0ZW0tY2FydCB7XG5cbiAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICBcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwIDEwcHgjNzc3O1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDAgMTBweCM3Nzc7XG4gICAgICAgICBib3gtc2hhZG93OiAwcHggMCAxMHB4Izc3NztcbiAgfVxufVxuXG4uY2FyZHtcbiAgYm9yZGVyLXJhZGl1czozMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnBhZ2UtdGl0bGV7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG4uY2FyZC1yb3VuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRkJGOTtcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbmZvLXRpdGxle1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuXG59XG4uaW5mby10aXRsZS1zZWN0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG59XG5cblxuLmRhc2h7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4gIC5saW5le1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB3aWR0aDogOTglO1xuICAgIG1hcmdpbjphdXRvO1xuXG4gIH1cbi5mb3JtLWluZm97XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmxhYmVse1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvcm0tZ3JvdXAge1xuICAucm91bmQtaW5wdXR7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMjQxLCAyNDEsIDI0MSk7XG4gIH1cbn1cblxuLmZ1bGwtaGVpZ2h0e1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLmZvcm0tZ3JvdXAgLnRleHQtYXJlYS1oZWlnaHR7XG4gIGhlaWdodDogODIlO1xufVxuXG5cblxuLmltZy10YWJsZXtcbndpZHRoOiAxNnB4O1xuaGVpZ2h0OiAxNnB4O1xufVxuXG5cbi50YWJsZS1ib3JkZXJsZXNze1xuICBib3JkZXI6MHB4O1xufVxuXG5cbi5zdWJtaXQtYnV0dG9uLXNlY3Rpb257XG4gIHBhZGRpbmctdG9wOjEwMHB4O1xufVxuXG4uYnRuLXN1Ym1pdHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KSB7IFxuICAuY29sLXN1bW1hcnl7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB9XG4gIC5jb2wtY2FydHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICB9XG4gIC5tYWluLWNvbnRlbnR7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLnBhZ2UtdGl0bGV7XG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgIHBhZGRpbmctbGVmdDogNjBweDtcbiAgfVxuICAubWFpbi1kaXZ7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICB9XG4gIC5pdGVtLXByaWNle1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgfVxuICAuc2F2ZS1sYXR0ZXJ7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAucmVtb3Zle1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLml0ZW0tY291bnR7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG5cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7IFxuICAubWFpbi1kaXZ7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxuICAuY2FydC1pdGVtcy1oZWFkZXJ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB0b3A6MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5tYWluLWNvbnRlbnR7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgfVxuICAuc3VtbWFyeS1jYXJke1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "s4XM":
/*!**************************************************!*\
  !*** ./src/app/views/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_search_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/search-bar.service */ "b/hC");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");








function SearchComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_li_23_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const item_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.changeCategory(item_r6.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.name);
} }
function SearchComponent_li_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "collections/", item_r9.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.name);
} }
function SearchComponent_li_39_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SearchComponent_li_39_Template_input_ngModelChange_3_listener($event) { const option_r10 = ctx.$implicit; return option_r10.selected = $event; })("change", function SearchComponent_li_39_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const option_r10 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.setColor(option_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", option_r10.selected)("value", option_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", option_r10.label, " ");
} }
function SearchComponent_p_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r3.bizService.getBizId(), "/products/", ctx_r3.category, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, ctx_r3.category));
} }
function SearchComponent_p_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "titleCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("href", "/", ctx_r4.bizService.getBizId(), "/products/", ctx_r4.category, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 7, ctx_r4.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate3"]("href", "/", ctx_r4.bizService.getBizId(), "/products/", ctx_r4.category, "/", ctx_r4.sub_category, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 9, ctx_r4.sub_category));
} }
function SearchComponent_div_68_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 55);
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r14.product.image_urls[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function SearchComponent_div_68_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 56);
} }
function SearchComponent_div_68_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchComponent_div_68_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r14.product.rating, "| ", item_r14.product.reviews, " ");
} }
function SearchComponent_div_68_div_6_small_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "u", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Login for Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchComponent_div_68_div_6_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r14.currency, "", item_r14.first_cost, "");
} }
function SearchComponent_div_68_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_68_div_6_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.selectProduct(item_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchComponent_div_68_div_6_div_3_Template, 6, 2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchComponent_div_68_div_6_small_6_Template, 4, 0, "small", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SearchComponent_div_68_div_6_p_9_Template, 2, 2, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r14.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r18.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("MSRP ", item_r14.currency, "", item_r14.msrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r18.userInfoService.isLoggedIn());
} }
function SearchComponent_div_68_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "small", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r14.product.rating, "| ", item_r14.product.reviews, " ");
} }
function SearchComponent_div_68_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_68_div_7_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r33.selectProduct(item_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchComponent_div_68_div_7_div_3_Template, 6, 2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "small", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r14.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r19.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", item_r14.currency, "", item_r14.first_cost, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("MSRP ", item_r14.currency, "", item_r14.msrp, "");
} }
function SearchComponent_div_68_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "small", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "product/", item_r14.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r14.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("MSRP ", item_r14.currency, "", item_r14.msrp, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", item_r14.currency, "", item_r14.first_cost, "");
} }
function SearchComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_div_68_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39); const item_r14 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r38.selectProduct(item_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchComponent_div_68_img_3_Template, 1, 1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchComponent_div_68_div_4_Template, 1, 0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SearchComponent_div_68_button_5_Template, 2, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SearchComponent_div_68_div_6_Template, 10, 6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SearchComponent_div_68_div_7_Template, 10, 6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SearchComponent_div_68_div_8_Template, 9, 6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r14.product.image_urls.length > 0 && item_r14.product.image_urls[0].url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r14.product.image_urls.length == 0 || !item_r14.product.image_urls[0].url);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.type === ctx_r5.business);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.type === ctx_r5.catalog);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.type === ctx_r5.customer);
} }
class SearchComponent {
    constructor(apiService, userInfoService, searchBarService, bizService, route, router, cdr) {
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.searchBarService = searchBarService;
        this.bizService = bizService;
        this.route = route;
        this.router = router;
        this.cdr = cdr;
        this.products = [];
        this.categories = [];
        this.collections = [];
        this.sub_category = '';
        this.type = '';
        this.category = '';
        this.customer = "customer";
        this.business = "business";
        this.catalog = "catalog";
        this.color = '';
        this.colors = [
            { label: 'Grey', value: 'Grey', selected: false },
            { label: 'Brown', value: 'Brown', selected: false },
            { label: 'Black', value: 'Black', selected: false },
            { label: 'White', value: 'White', selected: false },
            { label: 'Blue', value: 'Blue', selected: false },
            { label: 'Green', value: 'Green', selected: false },
            { label: 'Pink', value: 'Pink', selected: false },
            { label: 'Yellow', value: 'Yellow', selected: false },
            { label: 'Gold', value: 'Gold', selected: false },
            { label: 'Red', value: 'Red', selected: false },
            { label: 'Orange', value: 'Orange', selected: false },
            { label: 'Silver', value: 'Silver', selected: false },
            { label: 'Cream', value: 'Cream', selected: false },
            { label: 'Purple', value: 'Purple', selected: false },
        ];
        this.searchBarService.onSearch.subscribe({
            next: (query) => {
                this.searchProducts("?search=" + query);
            }
        });
    }
    ngOnInit() {
        this.initialize();
        this.searchFilter();
        this.type = this.bizService.getBizType();
    }
    searchFilter() {
        const navigationEndSubscription = this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe((event) => {
            // Call your method when the URL changes
            // this.ngAfterViewInit();
            this.searchFilter();
            if (navigationEndSubscription) {
                navigationEndSubscription.unsubscribe();
            }
        });
        let partner_id = this.route.snapshot.params.partner_id;
        let collection = this.route.snapshot.params.collection;
        let category = this.route.snapshot.params.category;
        let subcategory = this.route.snapshot.params.subcategory;
        if (subcategory != null) {
            this.sub_category = subcategory;
            this.category = category;
            this.searchProducts("product__sub_category__name=" + subcategory);
        }
        else if (category != null) {
            this.sub_category = '';
            this.category = category;
            this.searchProducts("product__category__name=" + category);
        }
        else if (partner_id != null) {
            this.sub_category = '';
            this.category = '';
            this.searchProducts("partner=" + partner_id);
        }
        else if (collection != null) {
            this.sub_category = '';
            this.category = '';
            this.searchProducts("product__collection__name=" + collection);
        }
        else {
            this.getProducts();
        }
    }
    changeCategory(category) {
        this.color = '';
        this.router.navigateByUrl("/" + this.bizService.getBizName() + "/products/" + category);
        // this.ngAfterViewInit();
    }
    selectProduct(product) {
        const url = `/${this.bizService.getBizName()}/product/${product}`;
        // Navigate to the product URL
        this.router.navigateByUrl(url);
    }
    // selectProduct(product){
    //   // console.log("/" + this.bizService.getBizName() + "/product/" + product);
    //   this.router.navigateByUrl("/" + this.bizService.getBizName() + "/product/" + product)
    //   // const navigationEndSubscription = this.router.events
    //   //   .pipe(filter((event) => event instanceof NavigationEnd), take(1))
    //   //   .subscribe((event: NavigationEnd) => {
    //   //     // Call your method when the URL changes
    //   //     // this.ngAfterViewInit();
    //   //     this.selectProduct(product);
    //   //     if (navigationEndSubscription) {
    //   //       navigationEndSubscription.unsubscribe();
    //   //     }
    //   //   });
    //   // this.ngAfterViewInit();
    // }
    setColor(color) {
        this.colors.forEach(option => {
            if (option !== color) {
                option.selected = false;
            }
        });
        this.color = color.value;
        if (!color.selected)
            this.color = "";
        // if(!this.color)return
        let partner_id = this.route.snapshot.params.partner_id;
        let collection = this.route.snapshot.params.collection;
        let category = this.route.snapshot.params.category;
        let subcategory = this.route.snapshot.params.subcategory;
        if (!category) {
            this.searchProducts("");
            return;
        }
        if (subcategory != null) {
            this.sub_category = subcategory;
            this.category = category;
            this.searchProducts("product__sub_category__name=" + subcategory);
        }
        else if (category != null) {
            this.sub_category = '';
            this.category = category;
            this.searchProducts("product__category__name=" + category);
        }
        else if (partner_id != null) {
            this.sub_category = '';
            this.category = '';
            this.searchProducts("partner=" + partner_id);
        }
        else if (collection != null) {
            this.sub_category = '';
            this.category = '';
            this.searchProducts("product__collection__name=" + collection);
        }
        else {
            this.getProducts();
        }
    }
    initialize() {
        this.apiService.getProductCategory('').subscribe(res => {
            this.categories = res;
        }, err => { });
        this.apiService.getCollections('').subscribe(res => {
            this.collections = res;
        }, err => { });
    }
    // ngAfterViewInit() {
    //   // Subscribe to NavigationEnd event to ensure navigation is complete
    //   this.router.events
    //     .pipe(
    //       filter((event) => event instanceof NavigationEnd),
    //       take(1) // Take only the first NavigationEnd event
    //     )
    //     .subscribe(() => {
    //       // Execute logic after navigation is complete
    //       this.searchFilter();
    //       this.cdr.detectChanges();
    //     });
    // }
    getProducts() {
        // let q;
        // this.color? q='&?color=' + this.color:'';
        this.apiService.getProducts('').subscribe(res => {
            this.products = res;
        }, err => { });
    }
    searchProducts(q) {
        if (this.color && q)
            q = 'product__color=' + this.color + '&' + q;
        if (this.color && !q)
            q = 'product__color=' + this.color;
        // this.color ? q = 'color=' + this.color + '&' + q : q;
        this.apiService.getProducts('?' + q).subscribe(res => {
            this.products = res;
        }, err => { });
    }
    ngOnDestroy() {
        // Unsubscribe to avoid memory leaks
        // this.routeSubscription.unsubscribe();
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_search_bar_service__WEBPACK_IMPORTED_MODULE_5__["SearchBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_6__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 71, vars: 6, consts: [[2, "min-height", "100vh", "display", "flex", "flex-direction", "column", "max-width", "100vw", "overflow-x", "hidden"], [1, "row", "search-content"], [1, "col-sm-2", "col-lg-2", "mt-4"], ["id", "rightModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal-side-nav", "right-side-nav", "fade-side-nav"], ["role", "document", 1, "modal-dialog-side-nav"], [1, "modal-content-side-nav", 2, "background-color", "white"], [1, "modal-header-side-nav", 2, "text-align", "center", "justify-content", "center", "font-weight", "700", "padding-top", "20px", "font-size", "large", "background-color", "white"], [2, "width", "100%"], [2, "margin-right", "20px"], ["type", "button", "data-dismiss", "modal", 2, "background-color", "white", "border", "none"], [1, "modal-body-side-nav"], ["id", "accordionFlushExample", 1, "accordion", "accordion-flush"], ["hoverActivatedAccordion", "", 1, "accordion-item"], ["id", "flush-headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-trigger", "hover", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne", 1, "accordion-button", "collapsed"], ["id", "flush-collapseOne", "aria-labelledby", "flush-headingOne", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse"], [1, "accordion-body"], [2, "max-height", "200px", "overflow-y", "scroll"], ["style", "margin-bottom: 15px; cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["id", "flush-headingTwo", 1, "accordion-header"], ["type", "button", "data-trigger", "hover", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseTwo", "aria-expanded", "false", "aria-controls", "flush-collapseTwo", 1, "accordion-button", "collapsed"], ["id", "flush-collapseTwo", "aria-labelledby", "flush-headingTwo", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], [4, "ngFor", "ngForOf"], ["id", "flush-headingThree", 1, "accordion-header"], ["data-trigger", "hover", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseThree", "aria-expanded", "false", "aria-controls", "flush-collapseThree", 1, "accordion-button", "collapsed"], ["id", "flush-collapseThree", "aria-labelledby", "flush-headingThree", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["id", "colorList", 1, "facetGroup_facets__bE9U9", 2, "height", "200px", "overflow-y", "scroll"], ["class", "facet_facet__IMsMJ", 4, "ngFor", "ngForOf"], [1, "col-sm-10", "col-lg-10"], [1, "container-fluid", "vstack", "gap-2"], [1, "row", "btn-show-filter"], ["type", "button", "data-toggle", "modal", "data-target", "#rightModal", 1, "btn", "btn-primary", 2, "width", "fit-content", "border-radius", "20px"], [1, "cart-items-wrapper", "mb-5", "pb-5"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2"], ["class", "mb-0 h5 ", 4, "ngIf"], [1, "row", "row-cols-2", "row-cols-md-4"], ["class", "col", "style", "margin-bottom: 40px;", 4, "ngFor", "ngForOf"], [2, "padding-top", "20px"], [2, "margin-bottom", "15px", "cursor", "pointer", 3, "click"], [2, "text-transform", "lowercase", 3, "routerLink"], [1, "facet_facet__IMsMJ"], ["href", "", "rel", "noopener noreferrer", "data-e2e", "Color-0", 1, "facet_facetLink__VcUM4"], ["id", "color-Grey", 1, "cl-form-checkbox"], ["id", "f8gghb83ai4i", "name", "color", "type", "checkbox", "animation", "", "value", "on", 1, "cl-form-checkbox-input", 3, "ngModel", "value", "ngModelChange", "change"], ["for", "f8gghb83ai4i", 1, "cl-form-checkbox-label", "cl-form-checkbox--animation"], [1, "facet_facetLabel__9qyC5"], [1, "mb-0", "h5"], [3, "href"], [1, "col", 2, "margin-bottom", "40px"], [1, "position-relative", 2, "width", "255px"], [1, "scale-up", 2, "cursor", "pointer", "display", "flex", "justify-content", "center", "align-items", "center", "width", "255px", "height", "255px", "object-fit", "cover", "border", "1px solid whitesmoke", "border-radius", "10%", 3, "click"], ["style", "border-radius: 10%; ", "class", "card-img-top object-fit-cover", "alt", "item image", 3, "src", 4, "ngIf"], ["appDynamicSize", "", "class", "card-img-top object-fit-cover scale-up", 4, "ngIf"], ["style", "margin: 15px;", "class", "btn btn-light position-absolute end-0", 4, "ngIf"], ["style", "padding-top: 15px;", "class", "card-body px-2", 4, "ngIf"], ["alt", "item image", 1, "card-img-top", "object-fit-cover", 2, "border-radius", "10%", 3, "src"], ["appDynamicSize", "", 1, "card-img-top", "object-fit-cover", "scale-up"], [1, "btn", "btn-light", "position-absolute", "end-0", 2, "margin", "15px"], [1, "bi", "bi-heart"], [1, "card-body", "px-2", 2, "padding-top", "15px"], [1, "fw-normal", "mb-2", "small", "fw-bold", 2, "cursor", "pointer", 3, "click"], ["class", "ratings", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "", 2, "width", "100%", "display", "flex", "justify-content", "space-between"], ["style", "font-size: 15px;font-weight: 500;text-decoration: underline;", 4, "ngIf"], [2, "font-size", "15px", "font-weight", "500"], ["class", "h5 mb-0", 4, "ngIf"], [1, "ratings"], [1, "bi", "bi-star-fill", "text-warning"], [1, "text-muted"], [2, "padding-left", "10px"], [2, "font-size", "15px", "font-weight", "500", "text-decoration", "underline"], ["routerLink", "login"], [2, "color", "black"], [1, "h5", "mb-0"], [1, "fw-normal", "mb-2", "small", "fw-bold", 2, "cursor", "pointer", 3, "routerLink"], [2, "font-size", "13px", "font-weight", "500", "margin-right", "10px", "color", "#C1C7D6", "text-decoration", "line-through"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " X ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Categories ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SearchComponent_li_23_Template, 3, 1, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Collections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, SearchComponent_li_31_Template, 3, 2, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " Color ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, SearchComponent_li_39_Template, 7, 3, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Material ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Shipping Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "h2", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " Price Per Item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Sort & Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, SearchComponent_p_65_Template, 4, 5, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, SearchComponent_p_66_Template, 8, 11, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, SearchComponent_div_68_Template, 9, 6, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "footer", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.collections);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sub_category == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.sub_category != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, styles: ["*[_ngcontent-%COMP%] {\n  font-family: \"sofia\" !important;\n}\n\n.bottom-card[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  width: 100%;\n  min-height: 400px;\n  background-image: url(\"https://images.pexels.com/photos/271771/pexels-photo-271771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=2060\");\n}\n\n.card-text[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 400px;\n  background: -webkit-linear-gradient(rgba(0, 255, 2, 0), rgba(0, 255, 2, 0) 0%), -webkit-linear-gradient(-20deg, rgba(4, 0, 255, 0) 50%, rgba(255, 255, 235, 0.7) 0%);\n}\n\n.scale-up[_ngcontent-%COMP%] {\n  transition: transform 0.3s;\n}\n\n.scale-up[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.txt[_ngcontent-%COMP%] {\n  height: 400px;\n  display: table-cell;\n  vertical-align: middle;\n  width: inherit;\n}\n\n.txt2[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.w-100[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.brands-div[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-left: 50px;\n  padding-right: 50px;\n  display: flex;\n  position: relative;\n  justify-content: center;\n}\n\n.brands-cards[_ngcontent-%COMP%] {\n  width: calc(100% - 80px);\n  overflow: hidden;\n  height: 250px;\n}\n\n.overflow[_ngcontent-%COMP%] {\n  position: relative;\n  transition: left 0.5s ease-in-out;\n}\n\n.brand-card[_ngcontent-%COMP%] {\n  height: 250px;\n  background-color: #e0e1e2;\n  border-radius: 5px;\n  display: inline-block;\n  padding-right: 10px;\n  position: relative;\n}\n\n.no-right-margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.brand-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 48px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n  color: black;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.left.disabled[_ngcontent-%COMP%], .right.disabled[_ngcontent-%COMP%] {\n  color: #CCC;\n}\n\n.left[_ngcontent-%COMP%] {\n  margin-left: 50px;\n  left: 0;\n}\n\n.right[_ngcontent-%COMP%] {\n  right: 0;\n  margin-right: 50px;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: black;\n  font-size: large;\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  list-style: none;\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  color: #f68b1e;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: none;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #333;\n}\n\n.display-block[_ngcontent-%COMP%]   .accordion-collapse[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (max-width: 400.98px) {\n  .modal-side-nav.left-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    left: -100%;\n  }\n\n  .modal-side-nav.right-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    right: -100%;\n  }\n\n  .modal-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (min-width: 400.98px) and (max-width: 991.98px) {\n  .modal-side-nav.left-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    left: -320px;\n  }\n\n  .modal-side-nav.right-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    right: -320px;\n  }\n\n  .modal-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    width: 320px;\n  }\n}\n\n@media (min-width: 991.98px) {\n  .modal-header-side-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .search-content[_ngcontent-%COMP%] {\n    padding-top: 170px;\n  }\n\n  .btn-show-filter[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .search-content[_ngcontent-%COMP%] {\n    padding-top: 60px;\n  }\n\n  .modal-header-side-nav[_ngcontent-%COMP%] {\n    display: flex;\n    background-color: white;\n  }\n\n  .modal-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    margin: auto;\n    height: 100%;\n    transform: translate3d(0%, 0, 0);\n  }\n\n  .modal-side-nav[_ngcontent-%COMP%]   .modal-content-side-nav[_ngcontent-%COMP%] {\n    height: 100%;\n    overflow-y: auto;\n  }\n\n  .modal-side-nav[_ngcontent-%COMP%]   .modal-body-side-nav[_ngcontent-%COMP%] {\n    padding: 15px 15px 80px;\n    min-height: 100%;\n    background: white;\n  }\n\n  .modal-side-nav.left-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    transition: opacity 0.1s linear, left 0.1s ease-out;\n    min-height: 1000px;\n    top: 0px;\n    z-index: 10000;\n  }\n\n  .modal-side-nav.left-side-nav.fade-side-nav.show[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    left: 0;\n  }\n\n  .modal-side-nav.right-side-nav.fade-side-nav[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    transition: opacity 0.1s linear, right 0.1s ease-out;\n    min-height: 1000px;\n    top: 0px;\n    z-index: 10000;\n  }\n\n  .modal-side-nav.right-side-nav.fade-side-nav.show[_ngcontent-%COMP%]   .modal-dialog-side-nav[_ngcontent-%COMP%] {\n    right: 0;\n  }\n\n  .modal-content-side-nav[_ngcontent-%COMP%] {\n    border-radius: 0;\n    border: none;\n  }\n\n  .modal-header-side-nav[_ngcontent-%COMP%] {\n    border-bottom-color: #eeeeee;\n    background-color: #fafafa;\n  }\n\n  .container-side-nav[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n  }\n\n  .btn-side-nav[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n}\n\n@media (max-width: 991.98px) {\n  main[_ngcontent-%COMP%] {\n    padding-left: 15px !important;\n    padding-right: 15 !important;\n  }\n}\n\n.facetGroup_facets__bE9U9[_ngcontent-%COMP%] {\n  list-style: none;\n  max-height: inherit;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n}\n\n.facet_facet__IMsMJ[_ngcontent-%COMP%] {\n  color: #2f3337;\n  line-height: 20px;\n  padding: 8px 0 16px;\n}\n\n.facet_facetLink__VcUM4[_ngcontent-%COMP%] {\n  color: #545658;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  position: relative;\n  text-decoration: none;\n  vertical-align: -6px;\n  width: 100%;\n}\n\n.cl-form-checkbox[_ngcontent-%COMP%], .cl-form-toggle[_ngcontent-%COMP%], .cl-form-radio[_ngcontent-%COMP%] {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  position: relative;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%], input[type=radio][_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\n.cl-form-checkbox-input[_ngcontent-%COMP%], .cl-form-toggle-input[_ngcontent-%COMP%], .cl-form-radio-input[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  margin: 0;\n}\n\n.facet_facetLink__VcUM4[_ngcontent-%COMP%]   .cl-form-checkbox-label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  bottom: 5px;\n}\n\n.cl-form-checkbox-label[_ngcontent-%COMP%], .cl-form-toggle-label[_ngcontent-%COMP%], .cl-form-radio-label[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  cursor: pointer;\n  display: inline-flex;\n  font-size: 16px;\n  line-height: 1.5;\n  position: relative;\n  margin-left: 10px;\n}\n\n.accordion-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n\n.facet_facetLabel__9qyC5[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 5px;\n  text-decoration: none;\n  color: #333;\n}\n\n.facet_facetCount__FnICr[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLCtCQUFBO0FBQUY7O0FBSUM7RUFDRyxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNJQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvS0FDQTtBQURKOztBQUtBO0VBQ0UsMEJBQUE7QUFGRjs7QUFLQTtFQUNFLHNCQUFBO0FBRkY7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7QUFGSjs7QUFNQTtFQUNJLHNCQUFBO0FBSEo7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU9FO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFKSjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsaUNBQUE7QUFKSjs7QUFPRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0U7RUFDRSxpQkFBQTtBQUpKOztBQU9FO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUpKOztBQU9FOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBSko7O0FBT0U7RUFDRSxXQUFBO0FBSko7O0FBT0U7RUFDRSxpQkFBQTtFQUNBLE9BQUE7QUFKSjs7QUFPRTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU1FO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FBSEY7O0FBTUE7O0VBRUUscUJBQUE7QUFIRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFPRTtFQUNFLGNBQUE7QUFKSjs7QUFhQTtFQUNFO0lBQ0UsV0FBQTtFQVZGOztFQWVBO0lBQ0UsWUFBQTtFQVpGOztFQWdCQTtJQUNFLFdBQUE7RUFiRjtBQUNGOztBQWlCQTtFQUNFO0lBQ0UsWUFBQTtFQWZGOztFQW9CQTtJQUNFLGFBQUE7RUFqQkY7O0VBb0JBO0lBQ0UsWUFBQTtFQWpCRjtBQUNGOztBQW9CQTtFQUNFO0lBQ0UsYUFBQTtFQWxCRjs7RUFvQkE7SUFDRSxrQkFBQTtFQWpCRjs7RUFtQkE7SUFDRSxhQUFBO0VBaEJGO0FBQ0Y7O0FBbUJBO0VBQ0U7SUFDRSxpQkFBQTtFQWpCRjs7RUFtQkE7SUFDRSxhQUFBO0lBQ0EsdUJBQUE7RUFoQkY7O0VBa0JFO0lBQ0UsZUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0NBQUE7RUFmSjs7RUFpQkU7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUFkSjs7RUFnQkU7SUFDRSx1QkFBQTtJQUVBLGdCQUFBO0lBQ0EsaUJBQUE7RUFkSjs7RUFpQkU7SUFFRSxtREFBQTtJQUNBLGtCQUFBO0lBQ0EsUUFBQTtJQUNBLGNBQUE7RUFmSjs7RUFrQkU7SUFDRSxPQUFBO0VBZko7O0VBaUJFO0lBRUUsb0RBQUE7SUFDQSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxjQUFBO0VBZko7O0VBaUJFO0lBQ0UsUUFBQTtFQWRKOztFQWdCRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtFQWJKOztFQWVFO0lBQ0UsNEJBQUE7SUFDQSx5QkFBQTtFQVpKOztFQWNFO0lBQ0UsaUJBQUE7RUFYSjs7RUFhRTtJQUNFLG1CQUFBO0VBVko7QUFDRjs7QUFlQTtFQUVFO0lBQ0UsNkJBQUE7SUFDQSw0QkFBQTtFQWRGO0FBQ0Y7O0FBaUJBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWZGOztBQWtCQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQWZGOztBQWtCQTtFQUNFLDJEQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFpQkE7RUFDRSxzQkFBQTtFQUNBLFVBQUE7QUFkRjs7QUFnQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFiRjs7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFiRjs7QUFnQkE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFiRjs7QUFtQkU7RUFDRSxjQUFBO0FBaEJKOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQWxCRjs7QUFxQkE7RUFDRSxnQkFBQTtBQWxCRiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbip7XG4gIGZvbnQtZmFtaWx5OiAnc29maWEnICFpbXBvcnRhbnQ7XG59XG5cblxuIC5ib3R0b20tY2FyZHsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8yNzE3NzEvcGV4ZWxzLXBob3RvLTI3MTc3MS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD00MDAmdz0yMDYwXCIpO1xufVxuLmNhcmQtdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kOiBcbiAgICAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDI1NSwgMiwgMCksIHJnYmEoMCwgMjU1LCAyLCAwLjApIDAlKSxcbiAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC0yMGRlZywgcmdiYSg0LCAwLCAyNTUsIDApIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjM1LCAwLjcpIDAlKTtcbn1cblxuLnNjYWxlLXVwIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7IFxufVxuXG4uc2NhbGUtdXA6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xufVxuXG4udHh0e1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHdpZHRoOiBpbmhlcml0O1xuICAgIFxufVxuLnR4dDJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbn1cblxuXG4udy0xMDAge1xuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcbiAgfVxuXG4gIFxuLmJyYW5kcy1kaXYge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5icmFuZHMtY2FyZHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA4MHB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMjUwcHg7XG4gIH1cbiAgXG4gIC5vdmVyZmxvdyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLWluLW91dDtcbiAgfVxuICBcbiAgLmJyYW5kLWNhcmQge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTFlMjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAubm8tcmlnaHQtbWFyZ2luIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICBcbiAgLmJyYW5kLWNhcmQgc3BhbiB7XG4gICAgZm9udC1zaXplOjQ4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLmxlZnQsXG4gIC5yaWdodCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG4gIFxuICAubGVmdC5kaXNhYmxlZCwgLnJpZ2h0LmRpc2FibGVkIHtcbiAgICBjb2xvcjojQ0NDO1xuICB9XG4gIFxuICAubGVmdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbGVmdDogMDtcbiAgfVxuICBcbiAgLnJpZ2h0IHtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLnNpZGViYXItbmF2IGxpIGEge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcblxufVxuXG5cbi5zaWRlYmFyLW5hdntcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2Y2OGIxZTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xufVxuXG4uc2lkZWJhci1uYXYgbGkgYTphY3RpdmUsXG4uc2lkZWJhci1uYXYgbGkgYTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxufVxuXG51bHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IzMzMztcbn1cblxuLmRpc3BsYXktYmxvY2t7XG4gIC5hY2NvcmRpb24tY29sbGFwc2V7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuXG4vLyAuYWNjb3JkaW9uOmhvdmVyIGRpdntcbi8vICAgZGlzcGxheTpibG9jayAhaW1wb3J0YW50O1xuLy8gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDAwLjk4cHgpeyBcbiAgLm1vZGFsLXNpZGUtbmF2LmxlZnQtc2lkZS1uYXYuZmFkZS1zaWRlLW5hdiAubW9kYWwtZGlhbG9nLXNpZGUtbmF2IHtcbiAgICBsZWZ0OiAtMTAwJTtcblxuXG4gIH1cbiBcbiAgLm1vZGFsLXNpZGUtbmF2LnJpZ2h0LXNpZGUtbmF2LmZhZGUtc2lkZS1uYXYgLm1vZGFsLWRpYWxvZy1zaWRlLW5hdiB7XG4gICAgcmlnaHQ6IC0xMDAlO1xuXG4gIH1cblxuICAubW9kYWwtc2lkZS1uYXYgLm1vZGFsLWRpYWxvZy1zaWRlLW5hdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwLjk4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCl7IFxuICAubW9kYWwtc2lkZS1uYXYubGVmdC1zaWRlLW5hdi5mYWRlLXNpZGUtbmF2IC5tb2RhbC1kaWFsb2ctc2lkZS1uYXYge1xuICAgIGxlZnQ6IC0zMjBweDtcblxuXG4gIH1cbiBcbiAgLm1vZGFsLXNpZGUtbmF2LnJpZ2h0LXNpZGUtbmF2LmZhZGUtc2lkZS1uYXYgLm1vZGFsLWRpYWxvZy1zaWRlLW5hdiB7XG4gICAgcmlnaHQ6IC0zMjBweDtcblxuICB9XG4gIC5tb2RhbC1zaWRlLW5hdiAubW9kYWwtZGlhbG9nLXNpZGUtbmF2IHtcbiAgICB3aWR0aDogMzIwcHg7XG4gIH1cblxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MS45OHB4KXsgXG4gIC5tb2RhbC1oZWFkZXItc2lkZS1uYXZ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuc2VhcmNoLWNvbnRlbnR7XG4gICAgcGFkZGluZy10b3A6IDE3MHB4O1xuICB9XG4gIC5idG4tc2hvdy1maWx0ZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpeyBcbiAgLnNlYXJjaC1jb250ZW50e1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICB9XG4gIC5tb2RhbC1oZWFkZXItc2lkZS1uYXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICAgIC5tb2RhbC1zaWRlLW5hdiAubW9kYWwtZGlhbG9nLXNpZGUtbmF2IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xuICAgIH1cbiAgICAubW9kYWwtc2lkZS1uYXYgLm1vZGFsLWNvbnRlbnQtc2lkZS1uYXYge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG4gICAgLm1vZGFsLXNpZGUtbmF2IC5tb2RhbC1ib2R5LXNpZGUtbmF2IHtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweCA4MHB4O1xuXG4gICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICB9XG4gICAgLm1vZGFsLXNpZGUtbmF2LmxlZnQtc2lkZS1uYXYuZmFkZS1zaWRlLW5hdiAubW9kYWwtZGlhbG9nLXNpZGUtbmF2IHtcblxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGxpbmVhciwgbGVmdCAwLjFzIGVhc2Utb3V0O1xuICAgICAgbWluLWhlaWdodDogMTAwMHB4O1xuICAgICAgdG9wOiAwcHg7XG4gICAgICB6LWluZGV4OiAxMDAwMDtcblxuICAgIH1cbiAgICAubW9kYWwtc2lkZS1uYXYubGVmdC1zaWRlLW5hdi5mYWRlLXNpZGUtbmF2LnNob3cgLm1vZGFsLWRpYWxvZy1zaWRlLW5hdiB7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICAubW9kYWwtc2lkZS1uYXYucmlnaHQtc2lkZS1uYXYuZmFkZS1zaWRlLW5hdiAubW9kYWwtZGlhbG9nLXNpZGUtbmF2IHtcbiAgICBcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBsaW5lYXIsIHJpZ2h0IDAuMXMgZWFzZS1vdXQ7XG4gICAgICBtaW4taGVpZ2h0OiAxMDAwcHg7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIH1cbiAgICAubW9kYWwtc2lkZS1uYXYucmlnaHQtc2lkZS1uYXYuZmFkZS1zaWRlLW5hdi5zaG93IC5tb2RhbC1kaWFsb2ctc2lkZS1uYXYge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5tb2RhbC1jb250ZW50LXNpZGUtbmF2IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIC5tb2RhbC1oZWFkZXItc2lkZS1uYXYge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2VlZWVlZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgfVxuICAgIC5jb250YWluZXItc2lkZS1uYXYge1xuICAgICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIC5idG4tc2lkZS1uYXYge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG5cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpeyBcblxuICBtYWlue1xuICAgIHBhZGRpbmctbGVmdDogMTVweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmZhY2V0R3JvdXBfZmFjZXRzX19iRTlVOSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmFjZXRfZmFjZXRfX0lNc01KIHtcbiAgY29sb3I6ICMyZjMzMzc7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiA4cHggMCAxNnB4O1xufVxuXG4uZmFjZXRfZmFjZXRMaW5rX19WY1VNNCB7XG4gIGNvbG9yOiAjNTQ1NjU4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiAtNnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNsLWZvcm0tY2hlY2tib3gsIC5jbC1mb3JtLXRvZ2dsZSwgLmNsLWZvcm0tcmFkaW8ge1xuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLCBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xufVxuLmNsLWZvcm0tY2hlY2tib3gtaW5wdXQsIC5jbC1mb3JtLXRvZ2dsZS1pbnB1dCwgLmNsLWZvcm0tcmFkaW8taW5wdXQge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5mYWNldF9mYWNldExpbmtfX1ZjVU00IC5jbC1mb3JtLWNoZWNrYm94LWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm90dG9tOiA1cHg7XG59XG5cbi5jbC1mb3JtLWNoZWNrYm94LWxhYmVsLCAuY2wtZm9ybS10b2dnbGUtbGFiZWwsIC5jbC1mb3JtLXJhZGlvLWxhYmVsIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiBcbn1cblxuXG4uYWNjb3JkaW9uLWJvZHkgPiB1bCA+IGxpOmhvdmVye1xuICBhe1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICB9XG59XG5cblxuLmZhY2V0X2ZhY2V0TGFiZWxfXzlxeUM1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzMzNcbn1cblxuLmZhY2V0X2ZhY2V0Q291bnRfX0ZuSUNyIHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbn0iXX0= */"] });


/***/ }),

/***/ "wlfi":
/*!**********************************************!*\
  !*** ./src/app/views/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var src_app_services_login_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login-modal.service */ "5D85");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");
/* harmony import */ var _star_rate_bar_star_rate_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../star-rate-bar/star-rate-bar.component */ "lOie");










function CartComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_div_15_div_1_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", item_r7.pricing.first_cost, "");
} }
const _c0 = function () { return { "margin-top": "0px" }; };
const _c1 = function () { return { "margin-top": "30px" }; };
const _c2 = function (a1) { return ["/product", a1]; };
function CartComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-star-rate-bar", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_div_15_div_1_span_14_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_15_div_1_Template_span_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.reduceProductCount(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_15_div_1_Template_span_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.increaseProductCount(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Save for later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_15_div_1_Template_span_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r7 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.removeItem(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "u", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", item_r7.id == ctx_r6.cartItems[0].id ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, item_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r7.image_urls[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c2, item_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rate", item_r7.rating)("label", item_r7.reviews)("size", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.userInfoService.isLoggedIn());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.product_count);
} }
function CartComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_15_div_1_Template, 37, 16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cartItems);
} }
function CartComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.cart_summary.currency, "", ctx_r2.cart_summary.subtotal, "");
} }
function CartComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.cart_summary.currency, "", ctx_r3.cart_summary.freight_cost, "");
} }
function CartComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r4.cart_summary.currency, "", ctx_r4.cart_summary.estimated_tax, "");
} }
function CartComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r5.cart_summary.currency, "", ctx_r5.cart_summary.total_cost, "");
} }
const _c3 = function (a0) { return { "background-color": a0 }; };
class CartComponent {
    constructor(userInfoService, apiService, bizService, loginModalService, router) {
        this.userInfoService = userInfoService;
        this.apiService = apiService;
        this.bizService = bizService;
        this.loginModalService = loginModalService;
        this.router = router;
        this.cartItems = [];
        this.customer = "customer";
        this.business = "business";
        this.catalog = "catalog";
        this.cart_summary = {
            currency: '$',
            subtotal: 0,
            freight_cost: 0,
            estimated_tax: 0,
            total_cost: 0
        };
        this.cartItems = this.userInfoService.getCartItems();
    }
    ngOnInit() {
        this.calculateCartCost();
        this.type = this.bizService.getBizType();
    }
    reduceProductCount(item) {
        if (item.product_count > 1) {
            item.product_count = item.product_count - 1;
            this.userInfoService.updateItemCart(item);
        }
    }
    increaseProductCount(item) {
        item.product_count = item.product_count + 1;
        this.userInfoService.updateItemCart(item);
    }
    removeItem(item) {
        this.userInfoService.removeItemCart(item);
        this.cartItems = this.userInfoService.getCartItems();
        this.calculateCartCost();
    }
    calculateCartCost() {
        this.cart_summary.subtotal = 0;
        this.cart_summary.total_cost = 0;
        this.cart_summary.freight_cost = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            let item = this.cartItems[i];
            this.cart_summary.subtotal = this.cart_summary.subtotal + parseFloat(item.pricing.first_cost) * item.product_count;
            this.cart_summary.freight_cost = this.cart_summary.freight_cost + parseFloat(item.pricing.freight_cost) * item.product_count;
            this.cart_summary.total_cost = parseFloat(((this.cart_summary.subtotal + this.cart_summary.freight_cost)).toFixed(2));
            this.cart_summary.subtotal = this.cart_summary.total_cost;
        }
        // this.apiService.calculateCartCosts(this.cartItems).subscribe(res=>{
        //   this.cart_summary=res;
        // },err=>{});
    }
    checkout() {
        if (this.cartItems.length < 1)
            return;
        if (this.userInfoService.isLoggedIn()) {
            this.router.navigateByUrl("/" + this.bizService.getBizId() + "/shipping-detail");
        }
        else {
            this.loginModalService.open();
            // this.router.navigateByUrl("/"+this.bizService.getBizId()+"/login")
        }
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_1__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_3__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_login_modal_service__WEBPACK_IMPORTED_MODULE_4__["LoginModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 50, vars: 9, consts: [[2, "min-height", "100vh"], [2, "min-height", "100vh", "display", "flex", "flex-direction", "column", "max-width", "100vw", "overflow-x", "hidden"], [1, "container-fluid", "vstack", "gap-2", "main-div"], [1, "cart-items-wrapper", "mb-5", "pb-5"], [1, "d-flex", "align-items-center", "justify-content-between", "cart-items-header", "mb-3", "px-2"], [1, "row"], [1, "page-title"], [1, "card", "main-content", 2, "border", "none"], [1, "card-body"], [1, "row", "form-info"], [1, "col-lg-8", "col-sm-8", "col-12", "col-cart"], ["class", "row", 4, "ngIf"], [4, "ngIf"], [1, "col-lg-4", "col-sm-4", "col-12", "col-summary"], [1, "card", "summary-card"], [1, "row", 2, "margin-top", "15px"], [2, "display", "inline-block"], ["style", "float: right;", 4, "ngIf"], [1, "line"], [1, "row", 2, "margin-top", "20px"], [1, "btn", "submit-now-button", 3, "ngStyle", "click"], [1, "row", 2, "margin-top", "50px"], [2, "padding-top", "20px", "bottom", "0"], ["class", "item-cart", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "item-cart", 3, "ngStyle"], [1, "col-sm-3", "col-lg-3", 2, "overflow", "hidden"], [3, "routerLink"], ["width", "200px", "height", "200px", 3, "src"], [1, "col-sm-6", "col-lg-6"], [2, "font-weight", "400", "font-size", "large"], [2, "text-decoration", "none", "font-size", "x-large", 3, "routerLink"], [3, "rate", "label", "size"], [1, "col-sm-3", "col-lg-3"], [1, "row", "item-price"], ["style", "font-size: xx-large;font-weight: 400;", 4, "ngIf"], [1, "row", 2, "margin-top", "10px"], [1, "col-sm-12", "col-lg-12"], [1, "item-count", 2, "border", "2px solid rgb(90, 90, 90)", "border-radius", "30px", "width", "fit-content", "padding", "0px", "display", "flex", "height", "35px"], [2, "padding-left", "15px", "padding-right", "10px", "padding-top", "3px", "padding-bottom", "3px", "font-size", "medium", 3, "click"], [1, "fa", "fa-minus", 2, "font-family", "'Font Awesome 6 Free' !important"], [2, "padding-left", "10px", "padding-right", "10px", "padding-top", "3px", "padding-bottom", "3px", "font-weight", "500", "font-size", "large", "border-right", "2px solid rgb(90, 90, 90)", "border-left", "2px solid black", "width", "50px", "text-align", "center"], [2, "padding-left", "10px", "padding-right", "15px", "padding-top", "3px", "padding-bottom", "3px", "font-size", "medium", 3, "click"], [1, "fa", "fa-plus", 2, "font-family", "'Font Awesome 6 Free' !important"], [1, "row", "save-latter"], [1, "col-sm-12"], [2, "padding", "0px"], [1, "row", "remove", 2, "margin-top", "10px"], [2, "padding", "0px", "cursor", "pointer", 3, "click"], [1, "fa", "fa-trash", 2, "font-family", "'Font Awesome 6 Free' !important"], [2, "padding-left", "5px"], [2, "font-size", "xx-large", "font-weight", "400"], [2, "float", "right"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CartComponent_div_14_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CartComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Order Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CartComponent_span_23_Template, 2, 2, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Freight Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, CartComponent_span_28_Template, 2, 2, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Estimated Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CartComponent_span_33_Template, 2, 2, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CartComponent_span_40_Template, 2, 2, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_42_listener() { return ctx.checkout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Proceed to Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Add Gift Card/Promo Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "footer", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItems.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userInfoService.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx.bizService.get_background_color()));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerFooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _star_rate_bar_star_rate_bar_component__WEBPACK_IMPORTED_MODULE_9__["StarRateBarComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  color: #211e22;\n  font-family: \"sofia\" !important;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0 6px #777;\n}\n\n.submit-now-button[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #f68b1e;\n  color: #fff;\n  font-weight: 500;\n  border-radius: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 3px;\n  width: 98%;\n  margin: auto;\n}\n\n.item-cart[_ngcontent-%COMP%] {\n  padding: 10px;\n  box-shadow: var(--bs-box-shadow);\n}\n\n.item-cart[_ngcontent-%COMP%]:hover, .item-cart[_ngcontent-%COMP%]:focus {\n  box-shadow: 0px 0 10px #777;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 20px;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  font-size: xx-large;\n}\n\n.card-round[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n  border-radius: 50px;\n  height: 100%;\n  padding: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 900;\n  font-size: large;\n}\n\n.info-title-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.dash[_ngcontent-%COMP%] {\n  background-color: #0c0c0c;\n  height: 5px;\n  width: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 4px;\n  width: 98%;\n  margin: auto;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 20px !important;\n  height: 50px;\n  padding-left: 20px;\n  border: 3px solid #f1f1f1;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   .text-area-height[_ngcontent-%COMP%] {\n  height: 82%;\n}\n\n.img-table[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.table-borderless[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.submit-button-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  float: right;\n  height: 50px;\n  padding: auto;\n  border-radius: 40px;\n  font-size: large;\n}\n\n@media (min-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n\n  .col-cart[_ngcontent-%COMP%] {\n    padding-right: 50px;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .page-title[_ngcontent-%COMP%] {\n    font-size: x-large;\n    padding-left: 60px;\n  }\n\n  .main-div[_ngcontent-%COMP%] {\n    padding-top: 150px;\n  }\n\n  .item-price[_ngcontent-%COMP%] {\n    text-align: end;\n  }\n\n  .save-latter[_ngcontent-%COMP%] {\n    text-align: end;\n    padding: 0px;\n  }\n\n  .remove[_ngcontent-%COMP%] {\n    text-align: end;\n    padding: 0px;\n  }\n\n  .item-count[_ngcontent-%COMP%] {\n    float: right;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .main-div[_ngcontent-%COMP%] {\n    padding-top: 0px;\n  }\n\n  .cart-items-header[_ngcontent-%COMP%] {\n    padding-top: 5px;\n    top: 0px !important;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 0px !important;\n    padding-right: 0px !important;\n  }\n\n  .summary-card[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFBO0VBQ0EsK0JBQUE7QUFIRjs7QUFRQTtFQUdPLDBCQUFBO0FBTFA7O0FBUUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVdBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtBQVJGOztBQVlFO0VBSU8sMkJBQUE7QUFWVDs7QUFjQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQVhGOztBQWFBO0VBQ0UsbUJBQUE7QUFWRjs7QUFZQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVRGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVEY7O0FBWUE7RUFDRSxtQkFBQTtBQVRGOztBQWNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVhGOztBQWNFO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFYSjs7QUFjQTtFQUNFLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxnQkFBQTtBQVhGOztBQWNFO0VBQ0ksOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVhOOztBQWVBO0VBQ0UsWUFBQTtBQVpGOztBQWdCQTtFQUNFLFdBQUE7QUFiRjs7QUFrQkE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWZBOztBQW1CQTtFQUNFLFdBQUE7QUFoQkY7O0FBb0JBO0VBQ0Usa0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQWpCRjs7QUFxQkE7RUFDRTtJQUNFLGtCQUFBO0VBbEJGOztFQW9CQTtJQUNFLG1CQUFBO0VBakJGOztFQW1CQTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFoQkY7O0VBa0JBO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtFQWZGOztFQWlCQTtJQUNFLGtCQUFBO0VBZEY7O0VBZ0JBO0lBQ0UsZUFBQTtFQWJGOztFQWVBO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUFaRjs7RUFjQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VBWEY7O0VBYUE7SUFDRSxZQUFBO0VBVkY7QUFDRjs7QUFjQTtFQUNFO0lBQ0UsZ0JBQUE7RUFaRjs7RUFjQTtJQUNFLGdCQUFBO0lBQ0EsbUJBQUE7RUFYRjs7RUFjQTtJQUNFLDRCQUFBO0lBQ0EsNkJBQUE7RUFYRjs7RUFhQTtJQUNFLGdCQUFBO0VBVkY7QUFDRiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4qe1xuICBjb2xvcjojMjExZTIyO1xuICBmb250LWZhbWlseTogJ3NvZmlhJyAhaW1wb3J0YW50O1xufVxuXG5cblxuLnN1bW1hcnktY2FyZHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gICAgICAgYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3Nztcbn1cblxuLnN1Ym1pdC1ub3ctYnV0dG9ue1xuICB3aWR0aDoxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZjY4YjFlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuXG59XG5cblxuLmxpbmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiA5OCU7XG4gIG1hcmdpbjphdXRvO1xuXG59XG4uaXRlbS1jYXJ0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMtYm94LXNoYWRvdyk7XG59XG4uaXRlbS1jYXJ0IHtcblxuICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgIFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDAgMTBweCM3Nzc7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMCAxMHB4Izc3NztcbiAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwIDEwcHgjNzc3O1xuICB9XG59XG5cbi5jYXJke1xuICBib3JkZXItcmFkaXVzOjMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ucGFnZS10aXRsZXtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cbi5jYXJkLXJvdW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBGQkY5O1xuICBib3JkZXItcmFkaXVzOjUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmluZm8tdGl0bGV7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG5cbn1cbi5pbmZvLXRpdGxlLXNlY3Rpb257XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbn1cblxuXG4uZGFzaHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyLCAxMiwgMTIpO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbiAgLmxpbmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWFyZ2luOmF1dG87XG5cbiAgfVxuLmZvcm0taW5mb3tcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxubGFiZWx7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9ybS1ncm91cCB7XG4gIC5yb3VuZC1pbnB1dHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyNDEsIDI0MSwgMjQxKTtcbiAgfVxufVxuXG4uZnVsbC1oZWlnaHR7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG4uZm9ybS1ncm91cCAudGV4dC1hcmVhLWhlaWdodHtcbiAgaGVpZ2h0OiA4MiU7XG59XG5cblxuXG4uaW1nLXRhYmxle1xud2lkdGg6IDE2cHg7XG5oZWlnaHQ6IDE2cHg7XG59XG5cblxuLnRhYmxlLWJvcmRlcmxlc3N7XG4gIGJvcmRlcjowcHg7XG59XG5cblxuLnN1Ym1pdC1idXR0b24tc2VjdGlvbntcbiAgcGFkZGluZy10b3A6MTAwcHg7XG59XG5cbi5idG4tc3VibWl0e1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHsgXG4gIC5jb2wtc3VtbWFyeXtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cbiAgLmNvbC1jYXJ0e1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLm1haW4tY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxuICAucGFnZS10aXRsZXtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcGFkZGluZy1sZWZ0OiA2MHB4O1xuICB9XG4gIC5tYWluLWRpdntcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIH1cbiAgLml0ZW0tcHJpY2V7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICB9XG4gIC5zYXZlLWxhdHRlcntcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG4gIC5yZW1vdmV7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAuaXRlbS1jb3VudHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHsgXG4gIC5tYWluLWRpdntcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICB9XG4gIC5jYXJ0LWl0ZW1zLWhlYWRlcntcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRvcDowcHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLm1haW4tY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zdW1tYXJ5LWNhcmR7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "yquH":
/*!********************************************************************!*\
  !*** ./src/app/views/shipping-detail/shipping-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ShippingDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingDetailComponent", function() { return ShippingDetailComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user-info.service */ "lg7r");
/* harmony import */ var src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/biz.service */ "Epua");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "MR1q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../customer-footer/customer-footer.component */ "1zey");










function ShippingDetailComponent_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", c_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r1);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class ShippingDetailComponent {
    constructor(formBuilder, apiService, userInfoService, bizService, router) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.userInfoService = userInfoService;
        this.bizService = bizService;
        this.router = router;
        this.cartItems = [];
        this.customer = "customer";
        this.business = "business";
        this.catalog = "catalog";
        this.cart_summary = {
            currency: '$',
            subtotal: '0',
            freight_cost: '0',
            estimated_tax: '0',
            total_cost: '0'
        };
        this.countries = ["United States", "Germany", "United Kingdom"];
    }
    ngOnInit() {
        this.shippingForm = this.formBuilder.group({
            contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            address_2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            postal_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
        this.cartItems = this.userInfoService.getCartItems();
        this.calculateCartCost();
        this.type = this.bizService.getBizType();
    }
    saveShippingDetail() {
        this.cartItems = this.userInfoService.getCartItems();
        var payload = {
            customer: this.userInfoService.getCustomerId(),
            products: [],
            new_customer: "No",
            order_channel: "Webstore",
            customer_location_id: "",
            channel: this.cartItems[0].channel,
            "shipping": Object.assign({
                "shipping_method": "FOB",
                "carrier": "FredEx"
            }, this.shippingForm.value),
            amount: this.cart_summary.total_cost
        };
        payload["shipping"];
        for (var i = 0; i < this.cartItems.length; i++) {
            payload.products.push({
                id: this.cartItems[i].id,
                quantity: this.cartItems[i].product_count,
                channel: this.cartItems[i].channel
            });
        }
        this.apiService.createNewOrder(payload).subscribe(res => {
            this.router.navigateByUrl("/" + this.bizService.getBizId() + "/payment-method/" + res.order_id);
        }, err => {
        });
        // this.apiService.addCustomerLocation(this.shippingForm.value).subscribe(res=>{
        // },err=>{})
    }
    calculateCartCost() {
        this.cart_summary.subtotal = 0;
        this.cart_summary.total_cost = 0;
        this.cart_summary.freight_cost = 0;
        for (var i = 0; i < this.cartItems.length; i++) {
            let item = this.cartItems[i];
            this.cart_summary.subtotal = this.cart_summary.subtotal + parseFloat(item.pricing.first_cost) * item.product_count;
            this.cart_summary.freight_cost = this.cart_summary.freight_cost + parseFloat(item.pricing.freight_cost) * item.product_count;
            this.cart_summary.total_cost = parseFloat(((this.cart_summary.subtotal + this.cart_summary.freight_cost)).toFixed(2));
            this.cart_summary.subtotal = this.cart_summary.total_cost;
        }
        // this.apiService.calculateCartCosts(this.userInfoService.getCartItems()).subscribe(res=>{
        //   this.cart_summary=res;
        // },err=>{});
    }
}
ShippingDetailComponent.ɵfac = function ShippingDetailComponent_Factory(t) { return new (t || ShippingDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_biz_service__WEBPACK_IMPORTED_MODULE_4__["BizService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ShippingDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShippingDetailComponent, selectors: [["app-shipping-detail"]], decls: 104, vars: 14, consts: [[2, "min-height", "100vh", "display", "flex", "flex-direction", "column", "max-width", "100vw"], [2, "padding-top", "100px"], [1, "main-content"], [1, "row"], [1, "page-title"], [3, "formGroup"], [1, "row", "form-info"], [1, "col-lg-6", "col-sm-6", "col-12", "col-form"], [1, "form-group"], ["formControlName", "contact", "placeholder", "Full Name", 1, "form-control", "round-input"], ["formControlName", "phone", "placeholder", "Phone Number", 1, "form-control", "round-input"], [1, "row", 2, "margin-top", "20px"], ["formControlName", "country", "placeholder", "Select Country", 1, "form-select", "round-input"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "address", "placeholder", "Address", 1, "form-control", "round-input"], ["formControlName", "address_2", "placeholder", "Address 2", 1, "form-control", "round-input"], ["formControlName", "city", "placeholder", "City", 1, "form-control", "round-input"], [1, "col-sm-6", "col-lg-6"], ["formControlName", "state", "placeholder", "State/Region", 1, "form-control", "round-input"], [1, "col-sm-6", "col-lg-6", "small-margin-top-20"], ["formControlName", "postal_code", "placeholder", "Postal Code", 1, "form-control", "round-input"], [1, "row", 2, "margin-top", "30px", "justify-content", "center"], [1, "submit-now-button", 3, "ngStyle", "click"], [1, "col-lg-6", "col-sm-6", "col-12", "col-summary"], [1, "card", "summary-card"], [1, "card-body"], [2, "font-weight", "700"], [2, "font-size", "medium"], [1, "row", 2, "margin-top", "15px"], [1, "line"], [2, "display", "inline-block"], [2, "float", "right"], [1, "row", 2, "margin-top", "50px"], [2, "font-weight", "700", "font-size", "large"], [2, "padding-top", "20px"], [3, "value"]], template: function ShippingDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shipping Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ShippingDetailComponent_option_26_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "State/Region");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Zip/Postal Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShippingDetailComponent_Template_button_click_54_listener() { return ctx.saveShippingDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Save & Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Cart Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Order Subtotal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, " Freight Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Estimated Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Delivery Method");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Estimated Arrival May 15th, 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "UPS Ground");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "footer", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "app-customer-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.shippingForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countries);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.bizService.get_background_color()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.userInfoService.getCartItems().length, " items");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.subtotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.freight_cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.estimated_tax, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.cart_summary.currency, "", ctx.cart_summary.total_cost, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_8__["CustomerFooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".main[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0 6px #777;\n}\n\n.submit-now-button[_ngcontent-%COMP%] {\n  height: 50px;\n  color: #fff;\n  font-size: large;\n  padding: auto;\n  font-weight: 500;\n  border-radius: 15px;\n  border: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  padding: 20px;\n}\n\n.card-round[_ngcontent-%COMP%] {\n  background-color: #F0FBF9;\n  border-radius: 50px;\n  height: 100%;\n  padding: 20px;\n}\n\n.info-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-weight: 900;\n  font-size: large;\n}\n\n.info-title-section[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.dash[_ngcontent-%COMP%] {\n  background-color: #0c0c0c;\n  height: 5px;\n  width: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  height: 4px;\n  width: 98%;\n  margin: auto;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.form-group[_ngcontent-%COMP%]   .round-input[_ngcontent-%COMP%] {\n  border-radius: 15px !important;\n  height: 50px;\n  padding-left: 20px;\n  border: 2px solid #C1C7D6;\n}\n\n.full-height[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   .text-area-height[_ngcontent-%COMP%] {\n  height: 82%;\n}\n\n.img-table[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n}\n\n.table-borderless[_ngcontent-%COMP%] {\n  border: 0px;\n}\n\n.submit-button-section[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  float: right;\n  height: 50px;\n  padding: auto;\n  border-radius: 10px;\n  font-size: large;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  font-size: large;\n}\n\n@media (min-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-left: 50px;\n  }\n\n  .col-form[_ngcontent-%COMP%] {\n    padding-right: 50px;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .page-title[_ngcontent-%COMP%] {\n    margin-top: 50px;\n    font-size: x-large;\n  }\n\n  .submit-now-button[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .col-summary[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n\n  .submit-now-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 575.98px) {\n  .small-margin-top-20[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NoaXBwaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFHTywwQkFBQTtBQUNQOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJRTtFQUNJLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFETjs7QUFLQTtFQUNFLFlBQUE7QUFGRjs7QUFNQTtFQUNFLFdBQUE7QUFIRjs7QUFRQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTEE7O0FBU0E7RUFDRSxXQUFBO0FBTkY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBYUE7RUFDRTtJQUNFLGtCQUFBO0VBVkY7O0VBWUE7SUFDRSxtQkFBQTtFQVRGOztFQVdBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQVJGOztFQVVBO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQVBGOztFQVNBO0lBRUUsVUFBQTtFQVBGO0FBQ0Y7O0FBYUE7RUFDRTtJQUNFLGlCQUFBO0VBWEY7O0VBYUE7SUFDRSxXQUFBO0VBVkY7QUFDRjs7QUFjQTtFQUNFO0lBQ0UsZ0JBQUE7RUFaRjtBQUNGIiwiZmlsZSI6InNoaXBwaW5nLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4uc3VtbWFyeS1jYXJke1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwIDZweCM3Nzc7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDAgNnB4Izc3NztcbiAgICAgICBib3gtc2hhZG93OiAwcHggMCA2cHgjNzc3O1xufVxuXG4uc3VibWl0LW5vdy1idXR0b257XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIHBhZGRpbmc6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjpub25lO1xuXG59XG5cbi5jYXJke1xuICBib3JkZXItcmFkaXVzOjMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4uY2FyZC1yb3VuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRkJGOTtcbiAgYm9yZGVyLXJhZGl1czo1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5pbmZvLXRpdGxle1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IGxhcmdlO1xuXG59XG4uaW5mby10aXRsZS1zZWN0aW9ue1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG59XG5cblxuLmRhc2h7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMiwgMTIsIDEyKTtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ubGluZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjQxLCAyNDEpO1xuICBoZWlnaHQ6IDRweDtcbiAgd2lkdGg6IDk4JTtcbiAgbWFyZ2luOmF1dG87XG5cbn1cbi5mb3JtLWluZm97XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmxhYmVse1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvcm0tZ3JvdXAge1xuICAucm91bmQtaW5wdXR7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjQzFDN0Q2O1xuICB9XG59XG5cbi5mdWxsLWhlaWdodHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5mb3JtLWdyb3VwIC50ZXh0LWFyZWEtaGVpZ2h0e1xuICBoZWlnaHQ6IDgyJTtcbn1cblxuXG5cbi5pbWctdGFibGV7XG53aWR0aDogMTZweDtcbmhlaWdodDogMTZweDtcbn1cblxuXG4udGFibGUtYm9yZGVybGVzc3tcbiAgYm9yZGVyOjBweDtcbn1cblxuXG4uc3VibWl0LWJ1dHRvbi1zZWN0aW9ue1xuICBwYWRkaW5nLXRvcDoxMDBweDtcbn1cblxuLmJ0bi1zdWJtaXR7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwYWRkaW5nOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4ucGFnZS10aXRsZXtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkxLjk4cHgpIHsgXG4gIC5jb2wtc3VtbWFyeXtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIH1cbiAgLmNvbC1mb3Jte1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgLm1haW4tY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgfVxuICAucGFnZS10aXRsZXtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgfVxuICAuc3VibWl0LW5vdy1idXR0b257XG4gIFxuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICBcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpe1xuICAuY29sLXN1bW1hcnl7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgLnN1Ym1pdC1ub3ctYnV0dG9ueyAgXG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpe1xuICAuc21hbGwtbWFyZ2luLXRvcC0yMHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=home-module.js.map