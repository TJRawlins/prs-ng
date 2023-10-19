import { Component } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  prods!: Product[];
  locale: string = "en";
  substr: string = "";

  sortCol: string = "name";
  sortAsc: boolean = true;
  sortOrder(col: string): void {
    if(col === this.sortCol) {
      this.sortAsc = !this.sortAsc
      return;
    }
    this.sortCol = col;
    this.sortAsc = true
  }

  constructor(
    private prodSvc: ProductService
  ) {}

  ngOnInit(): void {
    this.prodSvc.list().subscribe({
      next: (res) => {
        // console.debug(res)
        this.prods = res as Product[]
      },
      error: (err) => console.error(err)
    })
  }

}
