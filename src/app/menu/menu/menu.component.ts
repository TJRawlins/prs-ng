import { Component } from '@angular/core';
import { Menu } from '../menu.class'
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  user = this.sysSvc.loggedInUser;

  menus: Menu[] = [
    new Menu("HOME", "/home"),
    new Menu("USERS", "/users"),
    new Menu("VENDORS", "/vendors"),
    new Menu("REQUESTS", "/requests"),
    new Menu("ABOUT", "/about")
  ];

  constructor(
    private sysSvc: SystemService
  ) {}
}
