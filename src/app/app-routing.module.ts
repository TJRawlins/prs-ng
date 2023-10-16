import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { RequestListComponent } from './request/request-list/request-list.component';

const routes: Routes = [
  {path: "", redirectTo:"/login", pathMatch:"full"},
  {path: "login", component: UserLoginComponent},
  {path: "requests", component: RequestListComponent},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
