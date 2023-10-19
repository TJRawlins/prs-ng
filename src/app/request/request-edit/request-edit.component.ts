import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent {
  req: Request = new Request();

  userId!: number;
  user: User = new User();

  constructor(
    private reqSvc: RequestService,
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.reqSvc.change(this.req).subscribe({
      next: () => {
        this.router.navigateByUrl("/requests");
      },
      error: (err) => console.error(err)
    });
  }

  goBack(): void {
    window.history.back();
  }

  getUser(id: number): void {
    this.userSvc.get(this.userId).subscribe({
      next: (res) => {
        this.user = res
        console.debug(this.user)
      },
      error: (err) => console.error(err)
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.reqSvc.get(id).subscribe({
      next: (res) => {
        this.req = res;

        this.userId = res.userId as number;
        this.getUser(this.userId)
      },
      error: (err) => console.error(err)
    })
  }

}
