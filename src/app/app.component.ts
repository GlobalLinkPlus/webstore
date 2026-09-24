import { Component, OnInit } from '@angular/core';
import { BizService } from './services/biz.service';
import { AngularFaviconService } from 'angular-favicon';
import { Title} from '@angular/platform-browser';
import { Meta} from '@angular/platform-browser';
import { DomInjectorService } from './dom-injector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ecommerce';
 constructor(public bizService: BizService,
  private ngxFavicon: AngularFaviconService,
  private titleService: Title,
  private metaService: Meta,
  private domInjectorService: DomInjectorService
  ){

 }
 ngOnInit() {
  this.titleService.setTitle(this.bizService.get_meta_title());
  this.metaService.addTags([
    {name: 'description', content: this.bizService.get_meta_description()},
  ]);
  const keywords = this.bizService.get_keywords();
  if (keywords.length) {
    this.metaService.addTag({name: 'keywords', content: keywords.join(', ')});
  }
  this.ngxFavicon.setFavicon(this.bizService.get_favicon_image());
  // this.ngxFavicon.setFavicon("https://static.vecteezy.com/system/resources/thumbnails/003/171/355/small/objective-lens-icon-with-six-rainbow-colors-vector.jpg");
  this.domInjectorService.injectApiKey();
}
}
