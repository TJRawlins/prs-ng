import { Component } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  reqs!: Request[];
  locale: string = 'en';
  substr: string = '';

  userId: number = 0;
  user: User | null = null;

  sortCol: string = "description";
  sortAsc: boolean = true;

  constructor(
    private reqSvc: RequestService
  ) {}

  sortOrder(col: string): void {
    if(col === this.sortCol) {
      // console.debug(this.sortCol)
      this.sortAsc = !this.sortAsc
      return;
    }
    this.sortCol = col;
    this.sortAsc = true
  }

  // BUG: Not pulling the user
  // FIXED: Added 'return await _context.Requests.Include(x => x.User).ToListAsync();' to Backend Request Controller (GET)
  ngOnInit(): void {
    this.reqSvc.list().subscribe({
      next: (res) => {
        // console.debug(res)
        this.reqs = res as Request[];
      },
      error: (err) => console.error(err)
    })
  }
}
