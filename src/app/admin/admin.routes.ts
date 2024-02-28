import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout/layout.component';

export const ADMIN_ROUTES: Routes = [
    {
        path:'',component:LayoutComponent,
        children:[
            {path:'dashboard',component:DashboardComponent}
        ]
    }
//   {
//     path:'',
//   }
];
