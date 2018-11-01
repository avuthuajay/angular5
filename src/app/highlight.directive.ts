import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {}
    @HostListener('mouseover') over(){
      this.renderer.addClass(this.element.nativeElement, 'rotate');
      this.renderer.setStyle(this.element.nativeElement, 'test-decoratin', 'underline');
      console.log('over called');
    }
    @HostListener('mouseout') out(){
      this.renderer.removeClass(this.element.nativeElement, 'rotate')
      console.log('out called');
    }
}
