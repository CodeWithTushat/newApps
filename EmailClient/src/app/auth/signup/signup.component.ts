import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

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
    private uniqueUsername: UniqueUsername
  ) {}

  ngOnInit(): void {

  }

}
