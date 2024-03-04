import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarreraResults } from '../models/carrera';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http:HttpClient) { 
  }
  getCarreraList():Observable<CarreraResults>{
    return this.http.get<CarreraResults>('http://localhost:3000/carrerasTipoAll');
     
  }

}
