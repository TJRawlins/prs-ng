import { Injectable } from '@angular/core';
import { User } from '../user/user.class';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: any = new User();
  config: any;

  constructor(
    private http: HttpClient,
    private router: Router
    
  ) { }

  getSettings(): void {
    this.http.get("./assets/config.json").subscribe(
      (config) => {
        this.config = config;
      }
    )
  }

  isLoggedIn(user: User): void {
    if(user.id <= 0) {
      console.debug("NOT LOGGED IN")
      this.router.navigateByUrl('/login')
    }
    else {
      console.debug(`User: ${user.id}`)
    }
  }
}
