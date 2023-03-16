import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Especializacao } from 'src/models/entidades/especializacao';
import { Response } from 'src/models/response';


@Injectable({
  providedIn: 'root'
})
export class EspecializacaoService {

  constructor(private httpClient: HttpClient) { }

  public get_all(): Observable<Response<Especializacao[]>> {
    return this.httpClient.get<Response<Especializacao[]>>(environment.api + "ObterTodasEspecializacao");
  }

  public get(id: string): Observable<Response<Especializacao>> {
    return this.httpClient.get<Response<Especializacao>>(environment.api + "ObterTodasEspecializacao" + id);
  }
}
