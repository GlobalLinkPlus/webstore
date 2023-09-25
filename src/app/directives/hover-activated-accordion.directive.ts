
import {
  Directive,
  Output,
  Input,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[hoverActivatedAccordion]'
})
export class HoverActivatedAccordionDirective {

  constructor() { }
  @HostBinding('class.display-block') mouseover: boolean;
  @Output() fileDropped = new EventEmitter<any>();

  @HostListener('mouseover', ['$event']) onMouseOver(evt: any) {
    this.mouseover = true;
   
  }

  @HostListener('mouseout', ['$event']) public onMouseOut(evt: any) {
  
    this.mouseover = false;
  }
 

}
