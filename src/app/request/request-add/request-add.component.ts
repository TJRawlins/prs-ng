import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-add',
  templateUrl: './request-add.component.html',
  styleUrls: ['./request-add.component.css']
})
export class RequestAddComponent {
  userL = this.sysSvc.loggedInUser;
  uId = this.sysSvc.loggedInUser.id;
  req: Request = new Request();
  user!: User;


  constructor(
    private reqSvc: RequestService,
    private router: Router,
    private sysSvc: SystemService,
    private userSvc: UserService
  ) {}

  addReq(): void {
    this.req.userId = this.uId
    console.debug(this.req)
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
    this.sysSvc.isLoggedIn(this.userL)
    let id = this.uId
    console.log(this.uId)
    this.userSvc.get(id).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => console.error(err)
    })
  }
}
