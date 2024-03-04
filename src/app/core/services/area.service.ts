import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AreaResults } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  constructor(private http:HttpClient) { 
  }

  getAreaList():Observable<AreaResults>{
    //return this.http.get<OperativoResults>('http://172.20.196.191:3006/api/catalogos/areaTipo');
    return this.http.get<AreaResults>('http://localhost:3000/areaTipo');
     
  }
}
