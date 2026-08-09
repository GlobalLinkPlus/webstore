import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomInjectorService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  injectApiKey(): void {
    const metaTag = this.renderer.createElement('meta');
    this.renderer.setAttribute(metaTag, 'name', 'api-key');
    this.renderer.setAttribute(metaTag, 'content', environment.GOOGLE_API_KEY);
    this.renderer.appendChild(document.head, metaTag);
  }
}
