import { Component } from '@angular/core';
import { User } from '../user.class';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent {
  user: User = new User();

}
