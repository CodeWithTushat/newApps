import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  authForm = new FormGroup({
    username: new FormGroup(''),
    password: new FormGroup(''),
    passwordConfirmation: new FormGroup('')
  });

  constructor () {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
