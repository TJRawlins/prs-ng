import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SystemService } from '../core/system.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  get url() {return `${this.sysSvc.config.baseurl}/api/orders`};

  constructor(
    private http: HttpClient,
    private sysSvc: SystemService
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.url}`) as Observable<Request[]>
  }
  

}
