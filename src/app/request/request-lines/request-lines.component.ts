import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Requestline } from 'src/app/requestline/requestline.class';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent {
  userLog = this.sysSvc.loggedInUser;
  req: Request = new Request;
  rls: Requestline[] = [];

  userId!: number;
  user: User = new User();

  constructor(
    private reqSvc: RequestService,
    private rlSvc: RequestlineService,
    private userSvc: UserService,
    private route: ActivatedRoute,
    private sysSvc: SystemService
  ) {}

  
  removeRl(id: number): void {
    //DELETE ORDER
    this.rlSvc.remove(id).subscribe({
      next: () => {
        console.log("Deleted");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }
  
  goBack(): void {
    window.history.back();
  }
  
  toggleHide(i:number) {
    document.querySelectorAll('.confirm')[i].classList.toggle('hide')
  }

  approve(): void {
    let statusEl = document.getElementById('status')
    this.reqSvc.approve(this.req).subscribe({
      next: () => {
        console.debug("Order status APPROVED!");
        statusEl!.classList.remove('status-rejected')
        statusEl!.classList.add('status-approved')
        statusEl!.classList.remove('status-review')
        this.refresh();
      },
      error: (err) => console.error(err)
    })
  }
  
  review(): void {
    let statusEl = document.getElementById('status')
    this.reqSvc.review(this.req).subscribe({
      next: () => {
        console.debug("Request status REVIEW!");
        statusEl!.classList.remove('status-rejected')
        statusEl!.classList.remove('status-approved')
        statusEl!.classList.add('status-review')
        this.refresh();
      },
      error: (err) => console.error(err)
    })
  }

  reject(): void {
    let statusEl = document.getElementById('status')
    this.reqSvc.reject(this.req).subscribe({
      next: () => {
        console.debug("Request status REVIEW!");
        statusEl!.classList.add('status-rejected')
        statusEl!.classList.remove('status-approved')
        statusEl!.classList.remove('status-review')
        this.refresh();
      },
      error: (err) => console.error(err)
    })
  }
  
  statusColor(): void {
    let statusEl = document.getElementById('status');
    if (this.req.status === "APPROVED") {
      statusEl!.classList.add('status-approved')
      statusEl!.classList.remove('status-review')
      statusEl!.classList.remove('status-rejected')
    }
    else if (this.req.status === "REVIEW") {
      statusEl!.classList.remove('status-approved')
      statusEl!.classList.add('status-review')
      statusEl!.classList.remove('status-rejected')
    } 
    else if (this.req.status === "REJECTED") {
      statusEl!.classList.remove('status-approved')
      statusEl!.classList.remove('status-review')
      statusEl!.classList.add('status-rejected')
    } 
    else {
      statusEl!.classList.add('status-approved')
      statusEl!.classList.remove('status-review')
      statusEl!.classList.remove('status-rejected')
    }
  }

  getUser(id: number): void {
    this.userSvc.get(this.userId).subscribe({
      next: (res) => {
        this.user = res
        // console.debug(this.user)
      },
      error: (err) => console.error(err)
    })
  }
  
  // refresh screen when status updated
  refresh(): void {
    let id = this.route.snapshot.params['id'];
    this.reqSvc.get(id).subscribe({
      next: (res) => {
        // console.debug(res);
        this.req = res;

        console.debug(res)
        console.debug(res.requestLines)
        
        this.statusColor();
        this.userId = res.userId as number;
        this.getUser(this.userId);
      }
    })
  }
  
  ngOnInit(): void {
    this.sysSvc.isLoggedIn(this.userLog)
    this.refresh();
  }
  
}
