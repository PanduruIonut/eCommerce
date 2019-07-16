import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MartisorComponent } from './components/martisor/martisor.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsPage } from './pages/products/products.page';
import { LoginPage } from './pages/login/login.page';
import { SingUpPage } from './pages/sing-up/sing-up.page';
import { ImageComponent } from './components/image/image.component';
import { FormsComponent } from './components/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MartisorComponent,
    MenuComponent,
    ProductsPage,
    LoginPage,
    SingUpPage,
    ImageComponent,
    FormsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
