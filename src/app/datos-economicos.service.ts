import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosEconomicosService {

  constructor(private http: HttpClient) { }

  public getDatosEconomicos(url:string){
    return this.http.get(url)
  }
}
