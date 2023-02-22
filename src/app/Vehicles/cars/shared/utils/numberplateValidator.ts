import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function numberPlateValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }
        const hasFirst3Letters = /^[A-Z()]+$/.test(value.substring(0,3));
        const hasLast3Numbers = /^[0-9()]+$/.test(value.substring(value.length -3));

        const numberplateValid = hasFirst3Letters && hasLast3Numbers ;
        return !numberplateValid ? {numberplateValue:true}: null;
    }
}
