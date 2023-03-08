import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Especializacao } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class EspecializacaoService {

  constructor(private httpClient: HttpClient) { }

  public get_all(): Observable<Especializacao[]> {
    return this.httpClient.get<Especializacao[]>(environment.api + "ObterTodasEspecializacao");
  }

  public get(id: string): Observable<Especializacao> {
    return this.httpClient.get<Especializacao>(environment.api + "ObterTodasEspecializacao" + id);
  }
}
