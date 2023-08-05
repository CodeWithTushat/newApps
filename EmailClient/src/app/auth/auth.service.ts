import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, tap } from 'rxjs';

interface SignupCredentials {
  username ? : string | null | undefined;
  password ?: string | null | undefined;
  passwordConfirmation?: string | null | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://api.angular-email.com/';

  signedIn$ = new BehaviorSubject(false); /* $ is optinal no change occure just to analyze its a observable */

  constructor(
    private http: HttpClient
  ) { }

  usernameAvailable(username: string) {
    return this.http.post<{available: boolean}>( `${this.baseUrl}auth/username`, {
      username: username
    });
  }

  signUp(credentials:SignupCredentials){
    return this.http.post<SignupCredentials>(`${this.baseUrl}auth/signup`,credentials)
    .pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }
}
