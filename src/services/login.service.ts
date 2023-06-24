import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from 'src/models/entidades/auth';
import { RegistrarAdministrador, RegistrarUsuario, ResponseLogin } from 'src/models/entidades/usuario';
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

  public registrar_usuario(usuario: RegistrarUsuario): Observable<Response<any>> {
    return this.httpClient.post<Response<ResponseLogin>>(environment.api + `registrarusuario`, usuario)
  }
  
  public registrar_administrador(usuario: RegistrarAdministrador): Observable<Response<any>> {
    return this.httpClient.post<Response<any>>(environment.api + `registraradministrador`, usuario)
  }

}
