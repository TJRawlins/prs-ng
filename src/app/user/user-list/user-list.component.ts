import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  user = this.sysSvc.loggedInUser;
  users!: User[];
  locale: string= "en";
  substr: string= "";

  sortCol: string = "firstname";
  sortAsc: boolean = true;

  constructor(
    private userSvc: UserService,
    private sysSvc: SystemService
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
    this.sysSvc.isLoggedIn(this.user)
    this.userSvc.list().subscribe({
      next: (res) => {
        // console.debug(res)
        this.users = res as User[]
        // console.debug(this.user.isAdmin)
      },
      error: (err) => console.error(err)
    })
  }

}
