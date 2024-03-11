import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';


//route auth
export const AUTH_ROUTES: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'
},
  {path:'login',component:LoginComponent}
];
