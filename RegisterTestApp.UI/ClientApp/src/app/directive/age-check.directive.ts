import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appAgeCheck]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AgeCheckDirective,
      multi: true
    }
  ]
})
export class AgeCheckDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value === '' || !control.dirty) {
      return null;
    }

    const age = new Date().getFullYear() - new Date(control.value).getFullYear();
    return age < 18 ? { ageInvalid: { value: control.value } } : null;
  }
}
