import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';
import { SystemService } from '../core/system.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  get url() {return `${this.sysSvc.config.baseurl}/api/users`};
  // url: string = "http://localhost:5555/api/users";
  
  constructor( 
    private http: HttpClient,
    private sysSvc: SystemService
    ) { }

  loginSvc(username: string, password: string): Observable<User[]> {
    return this.http.get(`${this.url}/${username}/${password}`) as Observable<User[]>
  }
}
