import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';
import { AppInitService } from '../app-init.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  get url() {return `${this.init.config.baseurl}/api/users`};
  
  constructor( 
    private http: HttpClient,
    private init: AppInitService
    ) { }

  loginSvc(username: string, password: string) {
    return this.http.get(`${this.url}/${username}/${password}`) as Observable<User[]>
  }
}
