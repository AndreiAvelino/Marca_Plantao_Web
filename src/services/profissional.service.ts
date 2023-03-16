import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profissional, Response } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private httpClient: HttpClient) { }

  public get_all(): Observable<Response<Profissional[]>> {
    return this.httpClient.get<Response<Profissional[]>>(environment.api + "ObterTodosProfissionais");
  }

  public get(idProfissional: string): Observable<Response<Profissional>> {
    return this.httpClient.get<Response<Profissional>>(environment.api + "ObterProfissional?Id=" + idProfissional);
  }

  public put(profissional: Profissional): Observable<Response<Profissional>> {
    return this.httpClient.put<Response<Profissional>>(environment.api + "AtualizarProfissional", profissional);
  }

  public delete(idProfissional: string): Observable<any> {
    return this.httpClient.delete<Response<Profissional>>(environment.api + "RemoverProfissional?Id=" + idProfissional);
  }

}
