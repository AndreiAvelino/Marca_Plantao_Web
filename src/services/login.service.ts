import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from 'src/models/entidades/auth';
import { ResponseLogin } from 'src/models/entidades/usuario';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(login: Login): Observable<Response<ResponseLogin>> {
    return this.httpClient.post<Response<ResponseLogin>>(environment.api + `Login?email=${login.Email}&senha=${login.Senha}`, null)
  }

  public logout(): void {
    
  }
  
}
