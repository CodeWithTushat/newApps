import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, tap } from 'rxjs';

interface SignupCredentials {
  username ? : string | null | undefined;
  password ?: string | null | undefined;
  passwordConfirmation?: string | null | undefined;
}

interface SignedinResponse {
  authenticated: boolean,
  username: string
}

interface SigninCredentails {
  username ? : string | null | undefined,
  password ? : string | null | undefined
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* erty007 */

  baseUrl: string = 'https://api.angular-email.com/';

  signedIn$:any = new BehaviorSubject(null); /* $ is optinal no change occure just to analyze its a observable */

  constructor(
    private http: HttpClient
  ) { }

  usernameAvailable(username: string) {
    return this.http.post<{available: boolean}>( `${this.baseUrl}auth/username`, {
      username: username
    });
  }

  signUp(credentials:SignupCredentials){
    return this.http.post<SignupCredentials>(`${this.baseUrl}auth/signup`,credentials, {
      /* withCredentials: true */
    })
    .pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }

  checkAuth() {
    return this.http.get<SignedinResponse>(`${this.baseUrl}auth/signedin`, {
      /* withCredentials:true */
    }).pipe(
      tap(({authenticated}) => {
        this.signedIn$.next(authenticated);
      })
    )
  }

  signout() {
    return this.http.post(`${this.baseUrl}auth/signout`, {})
    .pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signin(credentials:SigninCredentails) {
    return this.http.post(`${this.baseUrl}auth/signin`, credentials)
    .pipe(
      tap((val) => {
        this.signedIn$.next(true);
      })
    );
  }
}
