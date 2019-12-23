import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { SecondMenuComponent } from './components/second-menu/second-menu.component';
import {SharedModule} from "../../shared/shared.module";
import { HomeComponent } from './components/home/home.component';
import {UserRoutesModule} from "./user-routes.module";
import {MieDomandeComponent} from "./components/mie-domande/mie-domande.component";



@NgModule({
  declarations: [MainMenuComponent, SecondMenuComponent, HomeComponent, MieDomandeComponent],
  exports: [
    MainMenuComponent,
    SecondMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutesModule,
  ]
})
export class UserModule { }
