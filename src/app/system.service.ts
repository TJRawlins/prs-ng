import { Injectable } from '@angular/core';
import { User } from './user/user.class';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: any = new User();

  constructor() { }
}
