import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';

export const routes: Routes = [
    {
        path:'auth',
        loadChildren:() => import('./auth/auth.routes').then(m=>m.AUTH_ROUTES)
    },
    {
        path:'admin',
        loadChildren:() => import('./admin/admin.routes').then(m=>m.ADMIN_ROUTES)
    }
];
