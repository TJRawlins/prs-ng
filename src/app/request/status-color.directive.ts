import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective {
  id = 0;
  
  constructor(
    private el: ElementRef,
  ) { 
    setTimeout(() => {
      let td = this.el.nativeElement
        if (td.innerText === "APPROVE") {
          td.classList.add('status-approved')
        }
        else if (td.innerText === "REVIEW") {
          td.classList.add('status-review')
        } 
        else if (td.innerText === "REJECTED") {
          td.classList.add('status-rejected')
        } 
        else {
          td.classList.add('status-approved')
        }
    }, 10);
  }
}
