import { Component } from '@angular/core';
import { User } from '../user.class';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user: User = new User();
  message: string = "";

  constructor(
    private userSvc: LoginService,
    private sysSvc: SystemService,
    private router: Router
  ) {}

  login(): void {
    console.debug("test")
    this.message = "";
    this.sysSvc.loggedInUser = null;
    this.userSvc.loginSvc(this.user.password, this.user.password).subscribe({
      next: (res) => {
        this.sysSvc.loggedInUser = res;
        // this.router.navigateByUrl("/request-list");
        this.router.navigateByUrl("/users");
      },
      error: (err) => err.status === 404 ? this.message = "Invalid username or password" : console.debug(err)
    })
    
  }
}
