import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable, catchError, map, of } from "rxjs";
import { AuthService } from "../auth.service";

@Injectable({
    providedIn: 'root'
})

export class UniqueUsername implements AsyncValidator{

    constructor (private http: HttpClient,
        private authservice: AuthService) { }

    validate = (control: AbstractControl) :any => {
        const { value } = control;
        return this.authservice.usernameAvailable(value)
        .pipe(
            map((value) => {
                console.log(value);
                return null;
            }),
            catchError((err) => {
                console.log(err);
                if(err.error.username){
                    return of({ nonUniqueUsername: true })
                }else {
                    return of({ noConnection: true });
                }
            })
            
        );
    }
}
