import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
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
    private reqSvc: RequestService,
    private router: Router,
    private userSvc: UserService
  ) {}

  addReq(): void {
    this.reqSvc.create(this.req).subscribe({
      next: () => {
        this.router.navigateByUrl("/requests");
      },
      error: (err) => console.error(err)
    })
  }

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    this.userSvc.list().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => console.error(err)
    })
  }

}
