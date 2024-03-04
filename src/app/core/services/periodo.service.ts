import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodoResults } from '../models/periodo';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  constructor(private http:HttpClient) { 
  }
  getPeriodosList():Observable<PeriodoResults>{
    return this.http.get<PeriodoResults>(environment.urlApi+ 'catalogos/gestionesPeriodosAll');
     
  }

}
