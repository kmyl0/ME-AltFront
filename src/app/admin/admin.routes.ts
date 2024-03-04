import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from '../layout/main/layout.component';
import { PeriodoComponent } from './periodo/periodo.component';
import { OperativoComponent } from './operativo/operativo.component';
import { DuracionComponent } from './duracion/duracion.component';
import { CarrerasComponent } from './carreras/carreras.component';


export const ADMIN_ROUTES: Routes = [
    {
        path:'',component:LayoutComponent,
        children:[
            {path:'',component:DashboardComponent},
            {path:'dashboard',component:DashboardComponent},
            {path:'periodo',component:PeriodoComponent},
            {path:'operativo/:periodo_id',component:OperativoComponent},
            {path:'duracion',component:DuracionComponent},
            {path:'carrera',component:CarrerasComponent},
        ]
    }
//   {
//     path:'',
//   }
];
