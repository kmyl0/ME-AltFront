import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResults } from '../models/user';
import { Observable, Subject } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public $refreshToken = new Subject<boolean>;
  public $refreshTokenReceived = new Subject<boolean>;

  constructor(private http:HttpClient) { 
    this.$refreshToken.subscribe((res:any)=>{
      this.refreshToken();
    })
  }
  login(username:string, password:string):Observable<UserResults>{
    const obj= {
      username:username,
      password:password
    }
    return this.http.post<UserResults>(environment.urlApi+ 'auth/login',obj);
  }
  
  refreshToken(){
    const obj = {
      token:"",
      refreshToken:"",
    }
    this.http.post<UserResults>(environment.urlApi+ 'auth/refresh',obj)
    .subscribe((result:any)=>{
      localStorage.setItem('token',result.token);
      this.$refreshTokenReceived.next(true)
    })
  }

}
