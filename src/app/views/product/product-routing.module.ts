import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './main/product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class ProductRoutingModule { }