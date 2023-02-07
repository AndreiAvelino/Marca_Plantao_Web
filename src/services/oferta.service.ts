import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private httpClient: HttpClient) { }

  public get_all(idClinica: number): Observable<Oferta> {
    return null
  }

  public post(oferta: Oferta): Observable<any> {
    return null;
  }

  public put(oferta: Oferta): Observable<any> {
    return null;
  }

  public delete(idOferta: number): Observable<any> {
    return null;
  }

}
