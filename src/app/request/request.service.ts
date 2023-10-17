import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';
import { SystemService } from '../core/system.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  get url() {return `${this.sysSvc.config.baseurl}/api/requests`};

  constructor(
    private http: HttpClient,
    private sysSvc: SystemService
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.url}`) as Observable<Request[]>
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${this.url}/${id}`) as Observable<Request>
  }
  create(req: Request): Observable<Request> {
    return this.http.post(`${this.url}`, req) as Observable<Request>
  }
  change(req: Request): Observable<any> {
    return this.http.put(`${this.url}/${req.id}`, req) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
  
  // Status Update
  review(req: Request): Observable<any> {
    return this.http.put(`${this.url}/review/${req.id}`, req) as Observable<any>
  }
  approve(req: Request): Observable<any> {
    return this.http.put(`${this.url}/approve/${req.id}`, req) as Observable<any>
  }
  reject(req: Request): Observable<any> {
    return this.http.put(`${this.url}/reject/${req.id}`, req) as Observable<any>
  }
  

}
