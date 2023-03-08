import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public login(login: Login): Observable<any> {
    return this.httpClient.post(environment.api + "Login", { queryParams: { email: login.Email, senha: login.Senha } })
  }

  public logout(): void {
    
  }
  
}
