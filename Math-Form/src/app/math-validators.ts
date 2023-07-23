import { AbstractControl } from "@angular/forms";

export class MathValidators {
    static addition(form: AbstractControl) {
        const { a, b, answer } = form.value;
        if(a + b === parseInt(answer)){
            return null;
        }

        return { addition: true };
    }

    static additionV2(target: string, source1: string, source2: string) {
        return (form: AbstractControl) => {
            const sum = form.value[target]
            const firstNumber = form.value[source1];
            const seconfNumber = form.value[source2]
            if(firstNumber + seconfNumber === parseInt(sum)){
                return null;
            }

            return { addition: true };
        }
    }

    static subtraction() {

    }
}

