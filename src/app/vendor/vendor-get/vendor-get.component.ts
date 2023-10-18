import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-get',
  templateUrl: './vendor-get.component.html',
  styleUrls: ['./vendor-get.component.css']
})
export class VendorGetComponent {
  vend: Vendor = new Vendor();

  constructor(
    private vendSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  removeVendor(): void {
    let id = + this.route.snapshot.params['id'];
    this.vendSvc.get(id).subscribe({
      next: () => {
        this.router.navigateByUrl('/vendors')
      },
      error: (err) => console.error(err)
    })
  }

  goBack(): void {
    window.history.back()
  }

  toggleOn: boolean = false;
  toggleHide(): void {
    this.toggleOn = !this.toggleOn
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.vendSvc.get(id).subscribe({
      next: (res) => {
        this.vend = res;
      },
      error: (err) => console.error(err)
    })
  }

}
