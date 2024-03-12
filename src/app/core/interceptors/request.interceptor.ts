import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { UserService } from '../services/user.service';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {

  const ursServ = inject(UserService);

  const token = localStorage.getItem('token');
 
    const cloneReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`,
      }
    });
    return next(cloneReq)
    .pipe(
      catchError((err:HttpErrorResponse) => {
      if (err.status == 401) { //unauthorized
        const isRefresh = confirm("Su session expiró, ¿desea continuar?");
        if (isRefresh) {
          ursServ.$refreshToken.next(true);
        }
      }
      return throwError(err);
      })
    );
};
