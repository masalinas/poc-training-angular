import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@app/shared/auth/auth.guard';

import { Page404Component } from '@app/views/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  /*{ 
    path: '**', 
    component: Page404Component 
  },*/
  {
    path: 'home',
    loadChildren: () => import('@app/views/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
    data: { 
      roles: ["admin", "user"] 
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
