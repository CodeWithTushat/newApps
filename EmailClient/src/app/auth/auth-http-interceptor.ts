import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, filter, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthHttpInterceptor implements HttpInterceptor{
    /* for avoding to write 'withCredentials: true' in every https request we create http interceptors class*/
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        /* Modify or log the outgoing request */
        const modifiedReq = req.clone({
            withCredentials: true,
        })
        console.log(modifiedReq);
        return next.handle(modifiedReq)
        .pipe(
        //    filter(val => val.type === HttpEventType.Sent), only when you want only sent requetest in tap methos
            tap((val) => {
                if(val.type === HttpEventType.Sent){
                    console.log('Request was sent to server');
                }
                if(val.type === HttpEventType.Response){
                    console.log('Got a response to API');
                }
            })
        );
    }
   
}
