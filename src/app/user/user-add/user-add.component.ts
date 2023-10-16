import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  user: User = new User();

  constructor(
    private userSvc: UserService,
    private router: Router
  ) {}

  goBack(): void {
    window.history.back();
  }

  addUser(): void {
    this.userSvc.create(this.user).subscribe({
      next: (res) => {
        this.router.navigateByUrl("/users")
      },
      error: (err) => console.error(err)
    })
  }

}
