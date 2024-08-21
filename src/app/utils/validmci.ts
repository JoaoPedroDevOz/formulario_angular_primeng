import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = /^\d*$/.test(control.value);
    return isValid ? null : { 'invalidNumber': { value: control.value } };
  };
}
