import { Component, OnInit } from '@angular/core';
import { BizService } from './services/biz.service';
import { AngularFaviconService } from 'angular-favicon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ecommerce';
 constructor(public bizService: BizService,
  private ngxFavicon: AngularFaviconService){

 }
 ngOnInit() {
  this.ngxFavicon.setFavicon(this.bizService.get_favicon_image());
  // this.ngxFavicon.setFavicon("https://static.vecteezy.com/system/resources/thumbnails/003/171/355/small/objective-lens-icon-with-six-rainbow-colors-vector.jpg");
}
}
