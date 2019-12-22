import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from "./layout/user/user.component";


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    loadChildren: () => import('src/app/module/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'out',
    component: UserComponent,
    loadChildren: () => import('src/app/module/guest/guest.module').then(m => m.GuestModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
