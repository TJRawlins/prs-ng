import { Injectable } from '@angular/core';
import { AppInitService } from '../app-init.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  get url() {return `${this.init.config.baseurl}/api/orders`};

  constructor(
    private http: HttpClient,
    private init: AppInitService
  ) { }

  list(): Observable<Request[]> {
    return this.http.get(`${this.url}`) as Observable<Request[]>
  }
  

}
