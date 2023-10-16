import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppInitService } from '../app-init.service';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  get url() {return `${this.init.config.baseurl}/api/users`};

  constructor(
    private http: HttpClient,
    private init: AppInitService 
  ) { }

  list(): Observable<User[]> {
    return this.http.get(`${this.url}`) as Observable<User[]>;
  }
  get(id: number) {
    return this.http.get(`${this.url}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.http.post(`${this.url}`, user) as Observable<User>;
  }
  change(user: User): Observable<any> {
    return this.http.put(`${this.url}/${user.id}`, user) as Observable<any>;
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`) as Observable<any>;
  }
}
