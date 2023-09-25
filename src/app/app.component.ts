import { Component, OnInit } from '@angular/core';
import { BizService } from './services/biz.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ecommerce';
 constructor(public bizService: BizService){

 }

}
