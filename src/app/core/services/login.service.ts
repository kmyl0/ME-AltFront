import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResults } from '../models/login';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { 
  }
  login(username:string, password:string):Observable<LoginResults>{
    return this.http.post<LoginResults>(environment.urlApi+ 'auth/login',{username:username,password:password});
  }
  
}
