import { Injectable } from '@angular/core';
import { SystemService } from '../core/system.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  get url() {return `${this.sysSvc.config.baseurl}/api/users`};

  constructor(
    private http: HttpClient,
    private sysSvc: SystemService
  ) { }

  list(): Observable<Vendor[]> {
    return this.http.get(`${this.url}`) as Observable<Vendor[]>
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.url}/${id}`) as Observable<Vendor>
  }
  create(vend: Vendor): Observable<Vendor> {
    return this.http.post(`${this.url}`, vend) as Observable<Vendor>
  }
  change(vend: Vendor): Observable<Vendor> {
    return this.http.put(`${this.url}/${vend.id}`, vend) as Observable<Vendor>
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<Vendor>
  }

}
