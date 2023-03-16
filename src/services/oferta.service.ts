import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Oferta } from 'src/models/entidades/oferta';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private httpClient: HttpClient) { }

  public get_all(): Observable<Response<Oferta[]>> {
    return this.httpClient.get<Response<Oferta[]>>(environment.api + "ObterTodasOfertas");
  }

  public get(idPlantao: string): Observable<Response<Oferta>> {
    return this.httpClient.get<Response<Oferta>>(environment.api + "ObterOferta?Id=" + idPlantao);
  }

  public post(plantao: Oferta): Observable<Response<Oferta>> {
    return this.httpClient.post<Response<Oferta>>(environment.api + "AdicionarOferta", plantao);
  }

  public put(plantao: Oferta): Observable<Response<Oferta>> {
    return this.httpClient.put<Response<Oferta>>(environment.api + "AtualizarOferta", plantao);
  }

  public delete(idPlantao: string): Observable<any> {
    return this.httpClient.delete<Response<any>>(environment.api + "RemoverOferta?Id=" + idPlantao);
  }

  // public adicionar_profissional_na_oferta(): Observable<Response> {

  // }


}
