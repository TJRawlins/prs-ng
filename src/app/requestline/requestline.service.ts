import { Injectable } from '@angular/core';
import { SystemService } from '../core/system.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  get url() {return `${this.sysSvc.config.baseurl}/api/requestlines`};

  constructor(
    private sysSvc: SystemService,
    private http: HttpClient
  ) { }

  list(): Observable<Requestline[]> {
    return this.http.get(`${this.url}`) as Observable<Requestline[]>
  }
  get(id: number): Observable<Requestline> {
    return this.http.get(`${this.url}/${id}`) as Observable<Requestline>;
  }
  create(reql: Requestline): Observable<Requestline> {
    return this.http.post(`${this.url}`, reql) as Observable<Requestline>
  }
  change(reql: Requestline): Observable<any> {
    return this.http.put(`${this.url}/${reql.id}`, reql) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
