import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PadraoComponent } from "src/app/@padrao/padrao.component";

@Injectable()

export class AuthInterceptor extends PadraoComponent {

    constructor(){
        super();
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.usuarioLogado) {
            const clone = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + this.usuarioLogado.token)
            });

            return next.handle(clone)
        }
        else {
            return next.handle(req);
        }
    }
}