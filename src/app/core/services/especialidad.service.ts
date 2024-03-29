import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EspecialidadResults } from '../models/especialidad';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  constructor(private http:HttpClient) { 
  }
  getEspecialidadList():Observable<EspecialidadResults>{
     return this.http.get<EspecialidadResults>(environment.urlApi+ 'catalogos-academico/especialidadTipo');
   
  }
}
