import { Component } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { Request } from 'src/app/request/request.class';
import { ReviewService } from '../review.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  userL = this.sysSvc.loggedInUser;
  reqs!: Request[];
  locale: string = 'en';
  substr: string = '';


  userId: number = 0;
  user: User | null = null;
  loggedUser = this.sysSvc.loggedInUser; 

  sortCol: string = "description";
  sortAsc: boolean = true;

  constructor(
    private sysSvc: SystemService,
    private revSvc: ReviewService
  ) {}

  sortOrder(col: string): void {
    if(col === this.sortCol) {
      this.sortAsc = !this.sortAsc
      return;
    }
    this.sortCol = col;
    this.sortAsc = true
  }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn(this.userL)
    this.revSvc.getReviews(this.loggedUser.id).subscribe({
    next: (res) => {
      console.debug(res)
      this.reqs = res as any;
      for(let req of this.reqs) {
        req.username = req.user!.username
        }
    },
    error: (err) => console.error(err)
    })
  }
}
