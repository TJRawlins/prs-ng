import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent {
  userL = this.sysSvc.loggedInUser;
  user: User = new User();

  constructor(
    private sysSvc: SystemService,
    private userSvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  removeUser(): void {
    let id = +this.route.snapshot.params['id'];
    this.userSvc.remove(id).subscribe({
      next: () => {
        this.router.navigateByUrl('/users')
      },
      error: (err) => console.error(err)
    })
  }

  goBack(): void {
    window.history.back();
  }

  toggleOn: boolean = false;
  toggleHide() {
    this.toggleOn = !this.toggleOn;
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
