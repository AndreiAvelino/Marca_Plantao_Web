import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdministradoresPorClinica, Clinica } from 'src/models/entidades/clinica';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  constructor(private httpClient: HttpClient) { }

  public get(idClinica: string): Observable<Response<Clinica>> {
    return this.httpClient.get<Response<Clinica>>(environment.api + "ObterClinica?Id=" + idClinica);
  }

  public put(clinica: any): Observable<Response<Clinica>> {
    return this.httpClient.put<Response<Clinica>>(environment.api + "AtualizarClinica", clinica);
  }

  public administradores_por_clinica(idClinica: string): Observable<Response<AdministradoresPorClinica[]>> {
    return this.httpClient.get<Response<AdministradoresPorClinica[]>>(environment.api + "AdministradoresPorClinica?clinicaId=" + idClinica);
  }

}
