import { Component } from '@angular/core';
import { Request } from '../request.class';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent {
  req: Request = new Request();
  users!: User[];

  constructor(
    private userSvc: UserService,

  ) {}

}
