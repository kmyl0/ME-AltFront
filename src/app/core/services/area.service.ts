import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AreaResults } from '../models/area';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  constructor(private http:HttpClient) { 
  }

  getAreaList():Observable<AreaResults>{
   // return this.http.get<AreaResults>('http://localhost:3000/areaTipo');
    return this.http.get<AreaResults>(environment.urlApi+'catalogos-academico/areaTipo');
     
  }
}
