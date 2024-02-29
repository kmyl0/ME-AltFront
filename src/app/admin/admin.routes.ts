import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from '../layout/main/layout.component';
import { GestionComponent } from './gestion/gestion.component';

export const ADMIN_ROUTES: Routes = [
    {
        path:'',component:LayoutComponent,
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'gestion',component:GestionComponent}
        ]
    }
//   {
//     path:'',
//   }
];
