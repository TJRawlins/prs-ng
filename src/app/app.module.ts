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
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestGetComponent } from './request/request-get/request-get.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestlineAddComponent } from './requestline/requestline-add/requestline-add.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { SearchProductPipe } from './product/search-product.pipe';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductGetComponent } from './product/product-get/product-get.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ReviewComponent } from './review/review/review.component';
import { ReviewItemComponent } from './review/review-item/review-item.component';


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
    VendorEditComponent,
    RequestEditComponent,
    RequestGetComponent,
    RequestLinesComponent,
    ProductListComponent,
    RequestlineAddComponent,
    RequestlineEditComponent,
    SearchProductPipe,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,
    ReviewComponent,
    ReviewItemComponent,
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
