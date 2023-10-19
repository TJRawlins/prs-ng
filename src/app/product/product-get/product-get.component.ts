import { Component } from '@angular/core';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent {
  prod: Product = new Product();
  
  vendorId!: number;
  vend: Vendor = new Vendor();

  constructor(
    private prodSvc: ProductService,
    private vendSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  removeProd(): void {
    let id = +this.route.snapshot.params['id'];
    this.prodSvc.remove(id).subscribe({
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

  getVendor(id: number): void {
    this.vendSvc.get(id).subscribe({
      next: (res) => {
        this.vend = res
        console.debug(this.vend)
      },
      error: (err) => console.error(err)
    })
  }


  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.prodSvc.get(id).subscribe({
      next: (res) => {
        this.prod = res;

        this.vendorId = res.vendorId as number;
        this.getVendor(this.vendorId)
      },
      error: (err) => console.error(err)
    })
  }

}
