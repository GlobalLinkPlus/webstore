import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRateBarComponent } from './star-rate-bar.component';


@NgModule({
  declarations: [
    StarRateBarComponent,
  ],
  exports:[
    StarRateBarComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class StarRateBarModule { }