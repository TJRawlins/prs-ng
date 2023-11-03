import { Component } from '@angular/core';
import { User } from '../user.class';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: User = new User();
  message: string = "";

  constructor(
    private loginSvc: LoginService,
    private sysSvc: SystemService,
    private router: Router
  ) {}

  login(): void {
    this.message = "";
    this.sysSvc.loggedInUser = null;
    this.loginSvc.loginSvc(this.user.username, this.user.password).subscribe({
      next: (res) => {
        this.sysSvc.loggedInUser = res;
        this.router.navigateByUrl("/home");
      },
      error: (err) => err.status === 404 ? this.message = "Invalid username or password" : console.debug(err)
    });
  }
}