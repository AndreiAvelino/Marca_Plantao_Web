import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdicionarAvaliacaoPlantaoProfissional, AvaliacaoPlantao } from 'src/models/entidades/avaliacao';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  constructor(private httpClient: HttpClient) { }

  public get(idPlantao: string): Observable<Response<AvaliacaoPlantao>> {
    return this.httpClient.get<Response<AvaliacaoPlantao>>(environment.api + "ObterAvaliacaoPlantao?Id=" + idPlantao);
  }

  public get_avaliacoes(idPlantao: string): Observable<Response<AvaliacaoPlantao>> {
    return this.httpClient.get<Response<AvaliacaoPlantao>>(environment.api + "ObterAvaliacaoClinicaParaProfissional?Id=" + idPlantao);
  }

  public put(avaliacao: AdicionarAvaliacaoPlantaoProfissional): Observable<Response<AdicionarAvaliacaoPlantaoProfissional>> {
    return this.httpClient.put<Response<AdicionarAvaliacaoPlantaoProfissional>>(environment.api + "AdicionarAvaliacaoPlantaoProfissional", avaliacao);
  }


}
