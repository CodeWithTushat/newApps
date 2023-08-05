import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor (private authService: AuthService, private router: Router) {  }

  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(3), 
      Validators.pattern(/^[a-z0-9]+/)
    ]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(6), 
      Validators.maxLength(20)
    ])
  });

  ngOnInit() {

  }

  onSubmit() {
    if(this.authForm.invalid){
      return;
    }

    this.authService.signin(this.authForm.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/inbox');
      },
      error: ({ error }) => {
        if(error.username || error.password){
          this.authForm.setErrors({credential: true});
        }
      }
    });

  }

}
