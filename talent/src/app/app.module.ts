import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComComponent } from './first-com/first-com.component';
import { SecondComComponent } from './second-com/second-com.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComComponent,
    SecondComComponent,
    NavCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
