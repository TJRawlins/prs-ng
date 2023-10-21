import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  userL = this.sysSvc.loggedInUser;
  user: User = new User();

  constructor(
    private sysSvc: SystemService,
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.userSvc.change(this.user).subscribe({
      next: () => {
        this.router.navigateByUrl("/users");
      },
      error: (err) => console.error(err)
    });
  }

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn(this.userL)
    let id = +this.route.snapshot.params['id'];
    this.userSvc.get(id).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => console.error(err)
    })
  }

}
