import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]'
})
export class PhoneMaskDirective {
  
  constructor(public phoneControl: NgControl) { }

  @HostListener('ngModelChange') onModelChange() {

    let realValue = this.phoneControl.value.replace(/\D/g, '');
    if (realValue.length > 10) {
      realValue = realValue.substring(0, 10);
    }

    let masked = '';
    if (realValue.length == 0) {
    } else if (realValue.length <= 3) {
      masked = realValue.replace(/^(\d{0,3})/, '($1)');
    } else if (realValue.length <= 6) {
      masked = realValue.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
    } else if (realValue.length <= 8) {
      masked = realValue.replace(/^(\d{0,3})(\d{0,3})(\d{0,2})/, '($1) $2-$3');
    } else {
      masked = realValue.replace(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, '($1) $2-$3-$4');
    }

    this.phoneControl.valueAccessor!.writeValue(masked);
  }
}
