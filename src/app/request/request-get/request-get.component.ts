import { Component } from '@angular/core';
import { Request } from '../request.class'
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-get',
  templateUrl: './request-get.component.html',
  styleUrls: ['./request-get.component.css']
})
export class RequestGetComponent {
  userL = this.sysSvc.loggedInUser;
  req: Request = new Request();

  userId!: number;
  user: User = new User();

  constructor(
    private sysSvc: SystemService,
    private reqSvc: RequestService,
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  removeRequest(): void {
    let id = +this.route.snapshot.params['id'];
    this.reqSvc.remove(id).subscribe({
      next: () => {
        this.router.navigateByUrl('/requests')
      },
      error: (err) => console.error(err)
    })
  }

  goBack(): void {
    window.history.back();
  }

  toggleOn: boolean = false;
  toggleHide(): void {
    this.toggleOn = !this.toggleOn;
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
    this.sysSvc.isLoggedIn(this.userL)
    let id = +this.route.snapshot.params['id'];
    this.reqSvc.get(id).subscribe({
      next: (res) => {
        this.req = res as Request;
        
        this.userId = res.userId as number;
        this.getUser(this.userId)
        
      },
      error: (err) => console.error(err)
    })
    
  }

}
