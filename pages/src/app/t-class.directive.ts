/* Example of Attribute directive */

import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTClass]'
})
export class TClassDirective {

  constructor(private element: ElementRef) { 
    
   }

   /* Code ID: CODE001
   @Input() set bgColor(color: string){
    this.element.nativeElement.style.backgroundColor = color;
   } */

   /* @Input() set appTClass(color: string){
    this.element.nativeElement.style.backgroundColor = color;
   } */

   // another way
   @Input('appTClass') set bgColor(color: string){
    this.element.nativeElement.style.backgroundColor = color;
   }

}
