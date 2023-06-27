import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdicionarRemoverProfissionalOfertaDados, Oferta } from 'src/models/entidades/oferta';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private httpClient: HttpClient) { }

  public get_all(dataInicio?: string, dataFinal?: string, valorInicial?: number, valorFinal?: number, turno?: string): Observable<Response<Oferta[]>> {

    console.log(dataInicio, dataFinal, valorInicial, valorFinal, turno)

    let params = new HttpParams()

    if(dataInicio || dataFinal || valorInicial || valorFinal || turno){

      if(dataInicio){
        params = params.append('dataInicio', dataInicio);
      }

      if(dataFinal){
        params = params.append('dataFinal', dataFinal);
      }

      if(valorInicial){
        params = params.append('valorInicial', valorInicial);
      }

      if(valorFinal){
        params = params.append('valorFinal', valorFinal);
      }

      if(turno){
        params = params.append('turno', turno);
      }
    }

    return this.httpClient.get<Response<Oferta[]>>(environment.api + "ObterTodasOfertas", { params: params });
  }

  public get(idOferta: string): Observable<Response<Oferta>> {
    return this.httpClient.get<Response<Oferta>>(environment.api + "ObterOferta?Id=" + idOferta);
  }

  public post(oferta: Oferta): Observable<Response<Oferta>> {
    return this.httpClient.post<Response<Oferta>>(environment.api + "AdicionarOferta", oferta);
  }

  public put(oferta: Oferta): Observable<Response<Oferta>> {
    return this.httpClient.put<Response<Oferta>>(environment.api + "AtualizarOferta", oferta);
  }

  public delete(idOferta: string): Observable<any> {
    return this.httpClient.delete<Response<any>>(environment.api + "RemoverOferta?Id=" + idOferta);
  }

  public adicionar_candidato_oferta(obj: AdicionarRemoverProfissionalOfertaDados){
    return this.httpClient.put<Response<boolean>>(environment.api + "AdicionarProfissionalOferta", obj);
  }

  public remover_candidato_oferta(obj: AdicionarRemoverProfissionalOfertaDados){
    return this.httpClient.put<Response<boolean>>(environment.api + "RemoverProfissionalOferta", obj);
  }

  public obterOfertasParaProfissional(ProfissionalId: string): Observable<Response<Oferta>> {
    return this.httpClient.get<Response<Oferta>>(environment.api + "ObterOfertasParaProfissional?ProfissionalId" + ProfissionalId);
  }

}
