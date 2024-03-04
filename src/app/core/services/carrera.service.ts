import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarreraResults } from '../models/carrera';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  constructor(private http:HttpClient) { 
  }
  getCarreraList():Observable<CarreraResults>{
    //return this.http.get<CarreraResults>('http://localhost:3000/carrerasTipoAll');
    return this.http.get<CarreraResults>(environment.urlApi+ 'catalogos/carrerasTipoAll');
     
  }

}
