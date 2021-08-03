import { Directive, HostListener } from '@angular/core';


@Directive({ selector: '[ui-ripple]' })
export class RippleDirective {
  constructor() {}

  @HostListener('click', ['$event']) onClick($event :any){
    console.info('clicked: ' + $event);
  }
}
