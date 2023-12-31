import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, Subscriber, skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor (
    private authService: AuthService,
    private router: Router
    ) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.authService.signedIn$.pipe(
      skipWhile(value => value === null),
      take(1),
      tap((authenicated) => {
        if(!authenicated){
          this.router.navigateByUrl('/');
        }
      })
   );
  }
  
}
