import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plantao } from 'src/models/entidades/plantao';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})
export class PlantaoService {

  constructor(private httpClient: HttpClient) { }

  public get_all(): Observable<Response<Plantao[]>> {
    return this.httpClient.get<Response<Plantao[]>>(environment.api + "ObterTodasPlantoes");
  }

  public get(idPlantao: string): Observable<Response<Plantao>> {
    return this.httpClient.get<Response<Plantao>>(environment.api + "ObterPlantao?Id=" + idPlantao);
  }

  public post(plantao: Plantao): Observable<Response<Plantao>> {
    return this.httpClient.post<Response<Plantao>>(environment.api + "AdicionarPlantao", plantao);
  }

  public put(plantao: Plantao): Observable<Response<Plantao>> {
    return this.httpClient.put<Response<Plantao>>(environment.api + "AtualizarPlantao", plantao);
  }

  public delete(idPlantao: string): Observable<any> {
    return this.httpClient.delete<Response<any>>(environment.api + "RemoverPlantao?Id=" + idPlantao);
  }
  
  
}
