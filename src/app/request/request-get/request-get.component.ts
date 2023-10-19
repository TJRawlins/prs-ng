import { Component } from '@angular/core';
import { Request } from '../request.class'
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-get',
  templateUrl: './request-get.component.html',
  styleUrls: ['./request-get.component.css']
})
export class RequestGetComponent {
  req: Request = new Request();

  constructor(
    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  removeRequest(): void {
    
  }

}
