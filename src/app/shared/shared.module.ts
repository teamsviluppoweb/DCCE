import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { UserComponent } from '../layout/user/user.component';
import { GuestComponent } from '../layout/guest/guest.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [UserComponent, GuestComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
