import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { RestrauntsCompComponent } from './restraunts-comp/restraunts-comp.component';
import { NavComComponent } from './nav-com/nav-com.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    RestrauntsCompComponent,
    NavComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
