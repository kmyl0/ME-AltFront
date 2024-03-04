import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodoResults } from '../models/periodo';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {

  constructor(private http:HttpClient) { 
  }
  getPeriodosList():Observable<PeriodoResults>{
    return this.http.get<PeriodoResults>('http://localhost:3000/gestionesPeriodosAll');
     
  }

}
