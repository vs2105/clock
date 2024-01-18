import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export function maxWordsValidator(maxWords: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }

    const words = control.value.trim().split(/\s+/).length;

    return words > maxWords ? { 'maxWordsExceeded': true } : null;
  };
}
