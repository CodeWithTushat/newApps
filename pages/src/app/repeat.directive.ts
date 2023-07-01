/* Example of Structural Directive */

import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef : TemplateRef<any>
  ) { }

  @Input('appRepeat') set render(times: number){
    this.viewContainer.clear();
    for(let i=0;i<times;i++){
      this.viewContainer.createEmbeddedView(this.templateRef, {
        /* context Object */
        index: i
      });
    }
  }

}
