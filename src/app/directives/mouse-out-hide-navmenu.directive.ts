
import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[mouseOutHideNavMenu]'
})
export class MouseOutHideNavMenuDirective {

  constructor() { }
  @HostBinding('class.menu-hide') mouseover: boolean;
  
  @Output() fileDropped = new EventEmitter<any>();

  @HostListener('mouseover', ['$event']) onMouseOver(evt: any) {
    console.log("ou")
    this.mouseover = true;
  }

  @HostListener('mouseout', ['$event']) public onMouseOut(evt: any) {
  
    this.mouseover = false;
  }
 

}
