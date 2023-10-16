import { Component } from '@angular/core';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = this.sysSvc.loggedInUser;

  constructor(
    private sysSvc: SystemService,
  ) {}


}
