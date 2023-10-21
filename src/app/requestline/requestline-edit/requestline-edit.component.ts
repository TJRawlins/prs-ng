import { Component } from '@angular/core';
import { Requestline } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { RequestlineService } from '../requestline.service';
import { ProductService } from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent {
  user = this.sysSvc.loggedInUser;
  rl: Requestline = new Requestline();

  prods: Product[] = [];
  prodId: number = 0;

  constructor(
    private sysSvc: SystemService,
    private rlSvc: RequestlineService,
    private prodSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  save(): void {
    // UPDATE REQUEST
    this.rlSvc.change(this.rl).subscribe({
      next: (res) => {
        // console.log(res);
        this.router.navigateByUrl(`/requests/lines/${this.rl.requestId}`);
      },
      error: (err) => console.error(err)
    });
  }

  goBack(): void {
    window.history.back();
  }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn(this.user)
    this.prodSvc.list().subscribe({
      next: (res) => {
        // console.debug(res)
        this.prods = res
      }, 
      error: (err) => console.error(err)
    })

    let id = +this.route.snapshot.params["rid"]
    this.rlSvc.get(id).subscribe({
      next: (res) => {
        // console.debug(res)
        this.rl = res
        this.prodId = +res.productId
      }, error: (err) => console.error(err)
    })
  }

}
