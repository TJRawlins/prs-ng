import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.class';
import { HttpClient } from '@angular/common/http';
import { SystemService } from '../core/system.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  get url() {return `${this.sysSvc.config.baseurl}/api/products`};

  constructor(
    private http: HttpClient,
    private sysSvc: SystemService
  ) { }

  list(): Observable<Product[]> {
    return this.http.get(`${this.url}`) as Observable<Product[]>
  }
  get(id: number): Observable<Product> {
    return this.http.get(`${this.url}/${id}`) as Observable<Product>;
  }
  create(itm: Product): Observable<Product> {
    return this.http.post(`${this.url}`, itm) as Observable<Product>
  }
  change(itm: Product): Observable<any> {
    return this.http.put(`${this.url}/${itm.id}`, itm) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
