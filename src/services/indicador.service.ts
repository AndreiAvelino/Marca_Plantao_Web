import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlantaoXMes, ValorXDia } from 'src/models/entidades/indicador';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})
export class IndicadorService {

  constructor(private httpClient: HttpClient) { }

  public get_plantaoxmes(idClinica: string): Observable<Response<PlantaoXMes[]>> {
    return this.httpClient.get<Response<PlantaoXMes[]>>(environment.api + "ObterPlantaoMesClinica?Id=" + idClinica);
  }

  public get_valorxdia(idClinica: string): Observable<Response<ValorXDia[]>> {
    return this.httpClient.get<Response<ValorXDia[]>>(environment.api + "ObterValorDiaClinica?Id=" + idClinica);
  }

}
