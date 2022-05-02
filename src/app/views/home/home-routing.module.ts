import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/shared/auth/auth.guard';

import { HomeComponent } from './main/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'dashboard', 
        pathMatch: 'full' 
      },
      {
        path: 'dashboard',
        loadChildren: () => import('@app/views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
        data: { 
          roles: ["admin", "user"] 
        }
      },
      {
        path: 'product',
        loadChildren: () => import('@app/views/product/product.module').then(m => m.ProductModule),
        canActivate: [AuthGuard],
        data: { 
          roles: ["admin", "user"] 
        }
      },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }