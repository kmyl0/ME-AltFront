import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from '../layout/main/layout.component';
import { PeriodoComponent } from './periodo/periodo.component';

export const ADMIN_ROUTES: Routes = [
    {
        path:'',component:LayoutComponent,
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'periodo',component:PeriodoComponent}
        ]
    }
//   {
//     path:'',
//   }
];
