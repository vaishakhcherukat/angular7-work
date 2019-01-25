
import { Directive, ElementRef, HostListener, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[OnlyAlphabets]'
})
//Directive to prevent user from entering except alphabets
export class OnlyAlphabets {
  //Regular expression for digits
  //regexStr = '^[0-9]*$';
  constructor(private el: ElementRef) { }

  @Input() OnlyAlphabets: boolean;
  //Event handler which listen for keydown events
  @HostListener('keypress', ['$event']) onKeyDown(event) {
    if (this.OnlyAlphabets) {
      let e = <KeyboardEvent>event;
      const pattern = /^[a-z A-Z]*$/;
      let inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }    
  }
}