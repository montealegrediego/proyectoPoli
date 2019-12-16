import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalMenuComponent } from './pages/principal-menu/principal-menu.component';

import { URLS } from './const/urls';

const routes: Routes = [
  { path: URLS.HOME, component: PrincipalMenuComponent, data: { depth: 0 } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
