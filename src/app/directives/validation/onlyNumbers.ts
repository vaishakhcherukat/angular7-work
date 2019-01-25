import { Directive, ElementRef, HostListener, Input, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
//Directive to prevent user from entering except digits
export class OnlyNumber {
  //Regular expression for digits
  //regexStr = '^[0-9]*$';
  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: boolean;
  //Event handler which listen for keydown events
  @HostListener('keypress', ['$event']) onKeyDown(event) {
    if (this.OnlyNumber) {
      let e = <KeyboardEvent>event;
      const pattern = /[0-9]/;
      let inputChar = String.fromCharCode(event.charCode);

      if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
      }
    }
    //check for selector.
    // if (this.OnlyNumber) {
    //     //find first element and check whether it start with 9,8,7

    //     if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
    //     // Allow: Ctrl+A
    //     (e.keyCode == 65 && e.ctrlKey === true) ||
    //     // Allow: Ctrl+C
    //     (e.keyCode == 67 && e.ctrlKey === true) ||
    //     // Allow: Ctrl+V
    //     //(e.keyCode == 86 && e.ctrlKey === true) ||
    //     // Allow: Ctrl+X
    //     (e.keyCode == 88 && e.ctrlKey === true) ||
    //     // Allow: home, end, left, right
    //     (e.keyCode >= 35 && e.keyCode <= 39)) {
    //       // let it happen, don't do anything
    //       return;
    //     }
    //   let ch = String.fromCharCode(e.keyCode);
    //   let regEx =  new RegExp(this.regexStr);   
    //   if(regEx.test(ch))
    //     return;
    //   else
    //      e.preventDefault();
    //   }
  }
}