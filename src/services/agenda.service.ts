import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Corevento } from 'src/enum/enum';

const eventSources = [
  {
    id: '1',
    events: 
    [
      { title: 'Oferta medico X', date: '2023-02-03', extendedProps: {tipo: 1}},
    ],
    color: Corevento.Oferta,
    extraParams: {tipo: 1}
  },
  {
    id: '2',
    events: 
    [
      { title: 'Plantao medico Y', date: '2023-02-16', extendedProps: {tipo: 2}}
    ],
    color: Corevento.Plantao
  }
]

@Injectable({
  providedIn: 'root'
})

export class AgendaService {

  constructor(private httpCliente: HttpClient) { }

  public get_all_evento(): Observable<any[]> {
    return of(eventSources);
  }
}
