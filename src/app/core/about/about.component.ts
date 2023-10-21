import { Component } from '@angular/core';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  user = this.sysSvc.loggedInUser;

  constructor(
    private sysSvc: SystemService,
  ) {}

  ngOnInit(): void {
    this.sysSvc.isLoggedIn(this.user)
  }
}
