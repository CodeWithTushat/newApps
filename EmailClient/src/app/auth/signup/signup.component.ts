import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.pattern(/^[a-z0-9]+/)   //syncronous validators
    ], 
    [this.uniqueUsername.validate]      //Asynconoes validators
    ), 
    password: new FormControl('', [
      Validators.required, Validators.minLength(6), Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required, Validators.minLength(6), Validators.maxLength(20)
    ])
  }, { validators: [this.matchPassword.validate] });

  constructor (
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  onFormSubmit(){
    if(this.authForm.invalid){
      return ;
    }

    /* code section A (CS-A)
    this.authService.signUp(this.authForm.value).subscribe((res) => {
      console.log(res);
    }); */

    /* Another sysntex to do (CS-A)  */
    this.authService.signUp(this.authForm.value).subscribe({
      next: res => {
        this.router.navigateByUrl('/inbox');
      },
      complete() {
          /* not much usable */
      },
      error: err => {
        if(!err.status){
          this.authForm.setErrors({ noConnection: true});
        }else {
          this.authForm.setErrors({ unknownError: true});
        }
      }
    });
  }

}
