import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/main/layout.component';
import { ResolucionComponent } from './resolucion/resolucion.component';


export const CONFIG_ROUTES: Routes = [
    {
        path:'',component:LayoutComponent,
        children:[
           // {path:'',component:DashboardComponent},
            {path:'resolucion',component:ResolucionComponent},
            // {path:'periodo',component:PeriodoComponent},
            // {path:'operativo/:periodo_id',component:OperativoComponent},
            // {path:'duracion',component:DuracionComponent},
            // {path:'carrera',component:CarrerasComponent},
        ]
    }
//   {
//     path:'',
//   }
];
