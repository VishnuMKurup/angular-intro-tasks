import { AbstractControl, ValidationErrors, } from '@angular/forms';

export class UsernameValidator {
    static validationSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { validationSpace: true };
        }
        return null;
    }
    static mailFormat(control: AbstractControl): ValidationErrors | null {

        var EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/i;

        if (control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { mailFormat: true };
        }
         return null;
    }
}