import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OperativoResults } from '../models/operativo';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperativoService {

  constructor(private http:HttpClient) { 
  }
  getOperativoByPeriodoList(periodo:number):Observable<OperativoResults>{
    //return this.http.get<OperativoResults>('http://172.20.196.191:3006/api/catalogos/gestionesPeriodosAll');
    return this.http.get<OperativoResults>(environment.urlApi+ 'catalogos-academico/fechasOperativosByGestionPeriodoId/'+periodo);
     
  }
}
