import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDynamicSize]'
})
export class DynamicSizeDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('load') onLoad() {
    const container = this.el.nativeElement.parentElement;
    const image = this.el.nativeElement;
    this.renderer.setStyle(image, 'width', `${container.clientWidth}px`);
    this.renderer.setStyle(image, 'height', `${container.clientWidth}px`);
  }

  @HostListener('window:resize') onResize() {
    const container = this.el.nativeElement.parentElement;
    const image = this.el.nativeElement;
    this.renderer.setStyle(image, 'width', `${container.clientWidth}px`);
    this.renderer.setStyle(image, 'height', `${container.clientWidth}px`);
  }
}
