import { Component, OnInit, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';

import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Product } from '@app/shared/backend/model/product';
import { ProductService } from '@app/shared/backend/api/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'price', 'active'];
  dataSource = new MatTableDataSource<Product>();
  products: Array<Product> = [];  

  @ViewChild(MatSort) sort: MatSort;

  constructor(private productService: ProductService,
              private _liveAnnouncer: LiveAnnouncer) {     
  }

  ngOnInit(): void {
    this.productService.getAll()
      .subscribe(products => {
        this.products = products; 
        this.dataSource.data = products;
      },
      error => {
        console.log(error);
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  
  sortData(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
