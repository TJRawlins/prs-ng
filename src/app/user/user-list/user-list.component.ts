import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users!: User[];
  locale: string= "en";
  substr: string= "";

  sortCol: string = "firstname";
  sortAsc: boolean = true;

  constructor(
    private userSvc: UserService
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
    this.userSvc.list().subscribe({
      next: (res) => {
        this.users = res as User[]
      },
      error: (err) => console.error(err)
    })
  }

}
