import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../model/product'

@Injectable()
export class ProductService {
    protected basePath = 'http://localhost:8088';

    constructor(protected httpClient: HttpClient) {
    }

    public getAll(): Observable<Array<Product>> {
        return this.httpClient.get<Array<Product>>(this.basePath + '/api/products');
    }
}