import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './api/product.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ProductService
  ],
})
export class BackendModule { }
