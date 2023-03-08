import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private httpClient: HttpClient) { }

  public get_all(idClinica: number): Observable<Oferta[]> {
    return null
  }

  public get(idOferta: string): Observable<Oferta> {
    return null;
  }

  public post(oferta: Oferta): Observable<Oferta> {
    return null;
  }

  public put(oferta: Oferta): Observable<Oferta> {
    return null;
  }

  public delete(idOferta: string): Observable<any> {
    return null;
  }

}
