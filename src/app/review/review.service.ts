import { Injectable } from '@angular/core';
import { SystemService } from '../core/system.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  loggedUser = this.sysSvc.loggedInUser;

  get url() {return `${this.sysSvc.config.baseurl}/api/requests`};

  constructor(
    private sysSvc: SystemService,
    private http: HttpClient
  ) { }

  getReviews(id: number): Observable<Request[]> {
    return this.http.get(`${this.url}/reviews/${id}`) as Observable<Request[]>
  }
}
