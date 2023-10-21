import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  user = this.sysSvc.loggedInUser;
  prod: Product = new Product();
  vends!: Vendor[];

  constructor(
    private sysSvc: SystemService,
    private prodSvc: ProductService,
    private vendSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  save(): void {
    this.prodSvc.change(this.prod).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/products");
      },
      error: (err) => console.error(err)
    });
  }

  goBack(): void {
    window.history.back();
  }

  getVends(): void {
    this.sysSvc.isLoggedIn(this.user)
    this.vendSvc.list().subscribe({
      next: (res) => {
        console.debug(res)
        this.vends = res
      }, error: (err) => console.error(err)
    })
  }
  

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.prodSvc.get(id).subscribe({
      next: (res) => {
        this.prod = res;
        this.getVends();
      },
      error: (err) => console.error(err)
    })
  }
}
