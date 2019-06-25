import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MartisorComponent } from './components/martisor/martisor.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsPage } from './pages/products/products.page'

@NgModule({
  declarations: [
    AppComponent,
    MartisorComponent,
    MenuComponent,
    ProductsPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
