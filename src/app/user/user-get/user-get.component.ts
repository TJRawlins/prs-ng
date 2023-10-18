import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent {
  user: User = new User();

  constructor(
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
    let id = +this.route.snapshot.params['id'];
    this.userSvc.get(id).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => console.error(err)
    })
  }

}
