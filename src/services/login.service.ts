import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, Response, ResponseLogin } from 'src/models/models';

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
