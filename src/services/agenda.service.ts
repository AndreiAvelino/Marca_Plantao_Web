import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from 'src/models/entidades/evento';
import { Response } from 'src/models/response';

@Injectable({
  providedIn: 'root'
})

export class AgendaService {

  constructor(private httpCliente: HttpClient) { }

  public get_all_evento_por_clinica(clinicaId: string): Observable<Response<Evento[]>> {
    return this.httpCliente.get<Response<Evento[]>>(environment.api + "ObterEventosPorClinica?Id=" + clinicaId);
  }

  public get_all_evento_por_profissional(id: string): Observable<Response<Evento[]>> {
    return this.httpCliente.get<Response<Evento[]>>(environment.api + "ObterEventosPorProfissional?Id=" + id);
  }
}
