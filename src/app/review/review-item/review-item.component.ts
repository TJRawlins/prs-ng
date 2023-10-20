import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/request/request.service';
import { Request } from 'src/app/request/request.class';
import { Requestline } from 'src/app/requestline/requestline.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent {
  req: Request = new Request;
  rls: Requestline[] = [];

  userId!: number;
  user: User = new User();

  constructor(
    private reqSvc: RequestService,
    private rlSvc: RequestlineService,
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  
  goBack(): void {
    window.history.back();
  }
  
  toggleHide() {
    document.querySelector('.confirm')!.classList.toggle('hide')
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
  
  reject(): void {
    let statusEl = document.getElementById('status')
    this.reqSvc.reject(this.req).subscribe({
      next: () => {
        console.debug("Request status REJECTED!");
        statusEl!.classList.add('status-rejected')
        statusEl!.classList.remove('status-approved')
        statusEl!.classList.remove('status-review')
        this.refresh();
        this.router.navigateByUrl("/reviews")
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
    this.refresh();
  }
}
