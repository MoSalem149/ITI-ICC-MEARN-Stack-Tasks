import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]'
})
export class DisableAfterClickDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click')
  onClick(): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
    this.renderer.setProperty(this.el.nativeElement, 'textContent', 'Processing…');

    setTimeout(() => {
      this.renderer.setProperty(this.el.nativeElement, 'disabled', false);
      this.renderer.setProperty(this.el.nativeElement, 'textContent', 'Register Now');
    }, 3000);
  }
}
