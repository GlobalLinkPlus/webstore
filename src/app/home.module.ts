import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './views/cart/cart.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { ItemDetailDesktopComponent } from './views/item-detail-desktop/item-detail-desktop.component';
import { ItemDetailComponent } from './views/item-detail/item-detail.component';
import { LoginComponent } from './views/login/login.component';
import { PaymentMethodComponent } from './views/payment-method/payment-method.component';
import { SearchComponent } from './views/search/search.component';
import { ShippingDetailComponent } from './views/shipping-detail/shipping-detail.component';
import { AccountComponent } from './views/account/account.component';
import { OrdersComponent } from './views/orders/orders.component';
import { StarRateBarComponent } from './views/star-rate-bar/star-rate-bar.component';
import { HoverActivatedAccordionDirective } from './directives/hover-activated-accordion.directive';
import { DynamicSizeDirective } from './directives/dynamic-size.directive';
import { HoverActivatedNavMenuDirective } from './directives/hover-activated-navmenu.directive';
import { MouseOutHideNavMenuDirective } from './directives/mouse-out-hide-navmenu.directive';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { ConfirmOrderComponent } from './views/confirm-order/confirm-order.component';
import { LoginModalService } from './services/login-modal.service';
import { SpinLoaderComponent } from './views/spin-loader/spin-loader.component';
import { TitleCasePipe } from './pipe/title-case.pipe';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { ContactUsModalComponent } from './views/contact-us-modal/contact-us-modal.component';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { CustomerFooterComponent } from './views/customer-footer/customer-footer.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { AccordionModule } from 'primeng/accordion';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { CompanyPolicyComponent } from './views/company-policy/company-policy.component';
import { AboutComponent } from './views/about/about.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AlertComponent } from './views/alert/alert.component';

@NgModule({
  declarations: [  
    TitleCasePipe, 
    HomeComponent,
    ItemDetailComponent,
    ItemDetailDesktopComponent,
    StarRateBarComponent,
    LoginComponent,
    PaymentMethodComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CartComponent,
    ConfirmOrderComponent,
    ShippingDetailComponent,
    AccountComponent,
    OrdersComponent,
    AccountComponent,
    HoverActivatedAccordionDirective,
    HoverActivatedNavMenuDirective,
    MouseOutHideNavMenuDirective,
    DynamicSizeDirective,
    SpinLoaderComponent,
    ForgotPasswordComponent,
    ContactUsModalComponent,
    CustomerFooterComponent,
    CreateAccountComponent,
    FaqsComponent,
    ContactUsComponent,
    CompanyPolicyComponent,
    AboutComponent,
    AlertComponent,
     ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,     
    HomeRoutingModule,
    NgbModule,
    GalleriaModule,
    CarouselModule,
    AccordionModule,
    ToastModule,
    GoogleMapsModule,
  ],
  exports:[
    SpinLoaderComponent
  ],
  providers: [
    MessageService,
    DialogService,
    ToastModule,
    AccordionModule,
    GoogleMapsModule,
  ],
  entryComponents:[
    ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],

})
export class HomeModule { 
  constructor() {
  }
}
