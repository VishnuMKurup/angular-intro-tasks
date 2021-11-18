import { AbstractControl, ValidationErrors, } from '@angular/forms';

export class customValidator {
    static validationSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { validationSpace: true };
        }
        return null;
    }
    static mailFormat(control: AbstractControl): ValidationErrors | null {
        var EMAIL_REGEXP = /^[a-z,A-Z,0-9,-,_,.]+@[a-z,A-Z]+\.[a-z,A-Z]{2,3}$/;
        if (control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { mailFormat: true };
        }
        return null;
    }

    static lengthFormat(control: AbstractControl): ValidationErrors | null {
        if (control.value > 40) {
            return { lengthFormat: true };
        }
        return null;
    }
}