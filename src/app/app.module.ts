import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {UserModule} from "./module/user/user.module";
import {GuestModule} from "./module/guest/guest.module";
import {UserComponent} from "./layout/user/user.component";
import {GuestComponent} from "./layout/guest/guest.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GuestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    GuestModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
