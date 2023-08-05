import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmailClient';
  /* signedin = false; */
  signedin$: BehaviorSubject<boolean> | undefined;

  constructor (private authService: AuthService) {}

  ngOnInit() : void {
    /* this.authService.signedIn$.subscribe((signdin)=> {
      this.signedin = signdin;
    }); */

    this.signedin$ = this.authService.signedIn$;
  }
}
