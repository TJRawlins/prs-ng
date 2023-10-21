import { Component } from '@angular/core';
import { Requestline } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { RequestlineService } from '../requestline.service';
import { ProductService } from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-requestline-add',
  templateUrl: './requestline-add.component.html',
  styleUrls: ['./requestline-add.component.css']
})
export class RequestlineAddComponent {
  user = this.sysSvc.loggedInUser;
  rl: Requestline = new Requestline();
  products: Product[] = [];

  constructor(
    private sysSvc: SystemService,
    private rlSvc: RequestlineService,
    private prodSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  addRl(): void {
    // ADD REQUESTLINE
    this.rlSvc.create(this.rl).subscribe({
      next: () => {
        this.router.navigateByUrl(`/requests/lines/${this.rl.requestId}`);
      },
      error: (err) => console.error(err)
    });
  }

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    // FOREIGN KEY - Use ActiveRoute to get the url id variable (related to app-routing module), then assign to request id
    this.sysSvc.isLoggedIn(this.user)
    this.rl.requestId = +this.route.snapshot.params["rid"]
    console.log(this.rl)
    // Get the items list when page loads
    this.prodSvc.list().subscribe({
      next: (res) => {
        // console.debug(res)
        this.products = res
      }, error: (err) => console.error(err)
    })
  }

}
