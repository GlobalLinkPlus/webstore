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
    path:'resetpassword/:section_no',
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
