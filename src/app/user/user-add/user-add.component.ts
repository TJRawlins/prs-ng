import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  userL = this.sysSvc.loggedInUser;
  user: User = new User();

  constructor(
    private sysSvc: SystemService,
    private userSvc: UserService,
    private router: Router
  ) {}

  goBack(): void {
    window.history.back();
  }

  addUser(): void {
    this.sysSvc.isLoggedIn(this.userL)
    this.userSvc.create(this.user).subscribe({
      next: () => {
        this.router.navigateByUrl("/users")
      },
      error: (err) => console.error(err)
    })
  }

}
