import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plantao } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class PlantaoService {

  constructor(private httpClient: HttpClient) { }

  public get_all(idClinica: number): Observable<Plantao> {
    return null
  }

  public post(oferta: Plantao): Observable<any> {
    return null;
  }

  public put(oferta: Plantao): Observable<any> {
    return null;
  }

  public delete(idOferta: number): Observable<any> {
    return null;
  }
  
}
