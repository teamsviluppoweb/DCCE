import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {MieDomandeComponent} from "./components/mie-domande/mie-domande.component";
import {AnagraficaComponent} from "./components/anagrafica/anagrafica.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'mie-domande',
    component: MieDomandeComponent,
  },
  {
    path: 'dati-anagrafici',
    component: AnagraficaComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutesModule { }



