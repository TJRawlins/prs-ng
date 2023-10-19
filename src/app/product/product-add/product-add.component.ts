import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  prod: Product = new Product();
  vends!: Vendor[];

  constructor(
    private prodSvc: ProductService,
    private vendSvc: VendorService,
    private router: Router
  ) {}

  goBack(): void {
    window.history.back();
  }

  addProd(): void {
    this.prodSvc.create(this.prod).subscribe({
      next: (res) => {
        console.log(res)
        this.router.navigateByUrl("/products");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.vendSvc.list().subscribe({
      next: (res) => {
        console.debug(res)
        this.vends = res
      }, error: (err) => console.error(err)
    })
  }
}
