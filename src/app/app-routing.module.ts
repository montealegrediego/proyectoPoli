import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalMenuComponent } from './pages/principal-menu/principal-menu.component';

import { URLS } from './const/urls';
import { SubMenuComponent } from './pages/sub-menu/sub-menu.component';

const routes: Routes = [
  { path: URLS.HOME, component: HomeComponent, data: { depth: 0 } },
  { path: URLS.PRINCIPAL_MENU, component: PrincipalMenuComponent, data: { depth: 1 } },
  { path: URLS.SUB_MENU, component: SubMenuComponent, data: { depth: 2 } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
