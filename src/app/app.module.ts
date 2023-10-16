import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common'


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { MenuComponent } from './menu/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    DatePipe, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
