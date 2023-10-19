import { Component } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent {
  vends!: Vendor[];
  substr: string = "";
  sortCol: string = "code";
  sortAsc: boolean = true;

  constructor(
    private vendSvc: VendorService
  ) {}

  sortOrder(col: string): void {
    if(col === this.sortCol) {
      this.sortAsc = !this.sortAsc
      return;
    }
    this.sortCol = col;
    this.sortAsc = true
  }

  ngOnInit(): void {
    this.vendSvc.list().subscribe({
      next: (res) => {
        // console.debug(res)
        this.vends = res as Vendor[]
      },
      error: (err) => console.error(err)
    })
  }

  
}
