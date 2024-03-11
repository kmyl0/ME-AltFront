import { HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const cloneReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${token}`,
    }
  })
  return next(cloneReq);
};
