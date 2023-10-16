import { Injectable } from '@angular/core';
import { User } from '../user/user.class';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: any = new User();
  config: any;

  constructor(
    private http: HttpClient
  ) { }

  getSettings(): void {
    this.http.get("./assets/config.json").subscribe(
      (config) => {
        this.config = config;
      }
    )
  }

}
