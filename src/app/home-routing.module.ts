import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './views/account/account.component';
import { CartComponent } from './views/cart/cart.component';
import { ConfirmOrderComponent } from './views/confirm-order/confirm-order.component';
import { HomeComponent } from './views/home/home.component';
import { ItemDetailDesktopComponent } from './views/item-detail-desktop/item-detail-desktop.component';
import { ItemDetailComponent } from './views/item-detail/item-detail.component';
import { LoginComponent } from './views/login/login.component';
import { OrdersComponent } from './views/orders/orders.component';
import { PaymentMethodComponent } from './views/payment-method/payment-method.component';
import { SearchComponent } from './views/search/search.component';
import { ShippingDetailComponent } from './views/shipping-detail/shipping-detail.component';
import { ForgotPasswordComponent } from './views/forgot-password/forgot-password.component';
import { CreateAccountComponent } from './views/create-account/create-account.component';
import { FaqsComponent } from './views/faqs/faqs.component';
import { CompanyPolicyComponent } from './views/company-policy/company-policy.component';
import { AboutComponent } from './views/about/about.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'products',
    component:SearchComponent
  },
  {
    path:'products/:category',
    component:SearchComponent
  },
  {
    path:'products/:category/:subcategory',
    component:SearchComponent
  },
  {
    path:'partner/:partner_id',
    component:SearchComponent
  },
  {
    path:'collections/:collection',
    component:SearchComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'resetpassword',
    component:ForgotPasswordComponent
  },
  {
    path:'resetpassword/:section_no',
    component:ForgotPasswordComponent
  },
  {
    path:'resetpassword/:section_no/:activation_code',
    component:ForgotPasswordComponent
  },
  {
    path:'payment-method/:order_id',
    component:PaymentMethodComponent
  },
  {
    path:'shipping-detail',
    component:ShippingDetailComponent
  },
  {
    path:'confirm-order/:order_id',
    component:ConfirmOrderComponent
  },
  {
    path:'account',
    component:AccountComponent
  },
  {
    path:'faqs',
    component:FaqsComponent
  },
  {
    path:'policies',
    component:CompanyPolicyComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'create-account',
    component:CreateAccountComponent
  },
  {
    path:'my-orders',
    component:OrdersComponent
  },
  // {
  //   path:'product/:id',
  //   component:ItemDetailComponent
  // },
  {
    path:'product/:id',
    component:ItemDetailDesktopComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' }),
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
