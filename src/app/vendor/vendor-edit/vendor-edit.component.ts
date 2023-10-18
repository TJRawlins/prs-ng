import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
  vend: Vendor = new Vendor();

  constructor(
    private vendSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.vendSvc.change(this.vend).subscribe({
      next: () => {
        this.router.navigateByUrl("/vendors")
      },
      error: (err) => console.error(err)
    })
  }

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.vendSvc.get(id).subscribe({
      next: (res) => {
        this.vend = res
      },
      error: (err) => console.error(err)
    })
  }

}
