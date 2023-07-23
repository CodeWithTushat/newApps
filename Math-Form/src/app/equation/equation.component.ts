import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from "@angular/forms";
import { MathValidators } from '../math-validators';
import { delay, filter } from 'rxjs';


@Component({
  selector: 'eq-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit{

  secoundsPerSolution : number = 0;

  mathForm = new FormGroup({
    a: new FormControl(this.randomNumber()),
    b: new FormControl(this.randomNumber()),
    answer: new FormControl('')
  }, [
    // MathValidators.addition,
    MathValidators.additionV2('answer', 'a', 'b')
    // (form: AbstractControl) => {
    //   const { a, b, answer } = form.value;
    //   if(a + b === parseInt(answer)){
    //     return null;
    //   }

    //   return { addition: true };
    // }
  ]);

  constructor () {}

  ngOnInit(): void {
    const startTime = new Date();
    let numberSolved = 0;
      // console.log(this.mathForm.statusChanges);
      // this.mathForm.statusChanges.subscribe((value) => {
      //   console.log(value);
      // });
      this.mathForm.statusChanges.pipe(
        filter(value => value === 'VALID'),
        delay(100)
        ).subscribe(value => {

        /* if(value === 'INVALID'){
          return;
        } */

       /* instead of this use below way 
        this.mathForm.controls.a.setValue(this.randomNumber());
        this.mathForm.controls.b.setValue(this.randomNumber());
        this.mathForm.controls.answer.setValue(''); 
        when you have to update all value use setValue() 
        or you have to update some value then use patchValue()
        */
        numberSolved++;
        this.secoundsPerSolution = (new Date().getTime() - startTime.getTime()) / numberSolved / 1000;
        this.mathForm.setValue({
          a: this.randomNumber(),
          b: this.randomNumber(),
          answer: ''
        });
      });
  }

  get a() {
    return this.mathForm.value.a;
  }

  get b() {
    return this.mathForm.value.b;
  }

  randomNumber() {
    return Math.floor(Math.random() * 10);
  }
}
