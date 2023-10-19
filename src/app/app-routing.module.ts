import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserGetComponent } from './user/user-get/user-get.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { RequestAddComponent } from './request/request-add/request-add.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { VendorGetComponent } from './vendor/vendor-get/vendor-get.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { RequestGetComponent } from './request/request-get/request-get.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';

const routes: Routes = [
  {path: "", redirectTo:"/login", pathMatch:"full"},
  {path: "login", component: UserLoginComponent},
  {path: "home", component: HomeComponent},
  {path: "users", component: UserListComponent},
  {path: "users/add", component: UserAddComponent},
  {path: "users/get/:id", component: UserGetComponent},
  {path: "users/edit/:id", component: UserEditComponent},
  {path: "users", component: UserListComponent},
  {path: "vendors", component: VendorListComponent},
  {path: "vendors/add", component: VendorAddComponent},
  {path: "vendors/get/:id", component: VendorGetComponent},
  {path: "vendors/edit/:id", component: VendorEditComponent},
  {path: "requests", component: RequestListComponent},
  {path: "requests/add", component: RequestAddComponent},
  {path: "requests/get/:id", component: RequestGetComponent},
  {path: "requests/edit/:id", component: RequestEditComponent},
  {path: "about", component: AboutComponent},
  {path: "**", component: E404Component}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
