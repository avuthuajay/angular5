import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAddElement]'
})
export class AddElementDirective {

  @Input() elementToAdd: string;
  @Input() elementText: string;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') addElement(){
    const newElement = this.renderer.createElement(this.elementToAdd);
    const elementText = this.renderer.createText(this.elementText);

    this.renderer.appendChild(newElement, elementText);
    const rootElement = this.renderer.selectRootElement('article');
    this.renderer.appendChild(rootElement, newElement);
    console.log(newElement);
    console.log(elementText);
    // this.renderer.appendChild()
  }

}
