import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notificacao } from 'src/models/entidades/notificacao';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  constructor(private httpClient: HttpClient) { }

  public get_notificacao_usuario(idUsuario: string): Observable<Response<Notificacao[]>> {
    return this.httpClient.get<Response<Notificacao[]>>(environment.api + "ObterAlertaUsuario?profissionalId=" + idUsuario);
  }
  
  public get_notificacao_clinica(idClinica: string): Observable<Response<Notificacao[]>> {
    return this.httpClient.get<Response<Notificacao[]>>(environment.api + "ObterAlertaClinica?Id=" + idClinica);
  }

  public delete(id: string): Observable<Response<Notificacao>> {
    return this.httpClient.delete<Response<Notificacao>>(environment.api + "RemoverAlerta?Id=" + id);
  }

  


}
