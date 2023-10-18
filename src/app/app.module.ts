import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MenuComponent } from './menu/menu/menu.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { SortPipe } from './core/sort.pipe';
import { BoolPipe } from './core/bool.pipe';
import { SystemService } from './core/system.service';
import { SearchUserPipe } from './user/search-user.pipe';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { E404Component } from './core/e404/e404.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserGetComponent } from './user/user-get/user-get.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { SearchRequestPipe } from './request/search-request.pipe';
import { StatusColorDirective } from './request/status-color.directive';
import { RequestAddComponent } from './request/request-add/request-add.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { SearchVendorPipe } from './vendor/search-vendor.pipe';
import { VendorAddComponent } from './vendor/vendor-add/vendor-add.component';
import { VendorGetComponent } from './vendor/vendor-get/vendor-get.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

export const startupServiceFactory = (sysSvc: SystemService) => {
  return () => sysSvc.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    MenuComponent,
    RequestListComponent,
    UserListComponent,
    SortPipe,
    BoolPipe,
    SearchUserPipe,
    HomeComponent,
    AboutComponent,
    E404Component,
    UserAddComponent,
    UserGetComponent,
    UserEditComponent,
    SearchRequestPipe,
    StatusColorDirective,
    RequestAddComponent,
    VendorListComponent,
    SearchVendorPipe,
    VendorAddComponent,
    VendorGetComponent,
    VendorEditComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    DatePipe, 
    AppRoutingModule
  ],
  providers: [
    SystemService, {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [SystemService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
