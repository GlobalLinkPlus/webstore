import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeRoutingComponent } from './home-routing.component';
import { BizInfoResolver } from './services/biz-info-resolver';


const routes: Routes = [
  {
    path: ':biz_id',
    component: HomeRoutingComponent,
    data: {
      title: ''
    },
    resolve: {
      bizInfo: BizInfoResolver
    },
    children: [
      {
        path: '',
        loadChildren:() => import('./home.module').then(m => m.HomeModule),  
        data: { preload: true }
      }
    ]
  },
  // {
  //   path: '',
  //   loadChildren:() => import('./home.module').then(m => m.HomeModule),  
  //   data: { preload: true }
  // }
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 200]
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
