import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-add',
  templateUrl: './vendor-add.component.html',
  styleUrls: ['./vendor-add.component.css']
})
export class VendorAddComponent {
  vend: Vendor = new Vendor();

  constructor(
    private vendSvc: VendorService,
    private router: Router
  ) {}

  goBack(): void {
    window.history.back();
  }

  addVendor(): void {
    this.vendSvc.create(this.vend).subscribe({
      next: () => {
        console.debug(this.vend)
        this.router.navigateByUrl("/vendors")
      },
      error: (err) => console.error(err)
    })
  }

}
