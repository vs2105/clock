import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function maxWordsValidator(maxWords: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // If the control is empty, validation passes
    }

    const words = control.value.split(/\s+/).filter((word: any) => word.length > 0);

    if (words.length > maxWords) {
      return { 'maxWordsExceeded': true };
    }

    return null; // Validation passes
  };
}
