import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SecondMenuComponent } from './components/second-menu/second-menu.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [MainMenuComponent, SecondMenuComponent],
  exports: [
    MainMenuComponent,
    SecondMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class UserModule { }
