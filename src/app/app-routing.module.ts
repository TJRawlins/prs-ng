import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';

const routes: Routes = [
  {path: "", redirectTo:"/login", pathMatch:"full"},
  {path: "login", component: UserLoginComponent},
  {path:"home", component: HomeComponent},
  {path: "users", component: UserListComponent},
  {path: "requests", component: RequestListComponent},
  {path:"about", component: AboutComponent},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
