import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { ResolucionResults } from '../models/resolucion';

@Injectable({
  providedIn: 'root'
})
export class ResolucionService {

  constructor(private http:HttpClient) { }

  getResolucionesList():Observable<ResolucionResults>{
    return this.http.get<ResolucionResults>(environment.urlApi+ 'catalogos-academico/resolucionesAll');
  }
}
