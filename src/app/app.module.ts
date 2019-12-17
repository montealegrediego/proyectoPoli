import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from './marerial-module';
import { PrincipalMenuComponent } from './pages/principal-menu/principal-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { SubMenuComponent } from './pages/sub-menu/sub-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalMenuComponent,
    HeaderComponent,
    SubMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
