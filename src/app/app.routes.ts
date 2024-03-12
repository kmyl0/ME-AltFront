import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path:'',redirectTo:'auth',pathMatch:'full'
    },
    {
        path:'auth',
        loadChildren:() => import('./auth/auth.routes').then(m=>m.AUTH_ROUTES)
    },
    {
        path:'admin',
        canActivateChild:[authGuard],
        loadChildren:() => import('./admin/admin.routes').then(m=>m.ADMIN_ROUTES)
    },
    {
        path:'config',
        canActivateChild:[authGuard],
        loadChildren:() => import('./config/config.routes').then(m=>m.CONFIG_ROUTES)
    }
];
