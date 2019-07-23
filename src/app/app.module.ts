import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MartisorComponent } from './components/martisor/martisor.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsPage } from './pages/products/products.page';
import { LoginPage } from './pages/login/login.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import { ImageComponent } from './components/image/image.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MartisorComponent,
    MenuComponent,
    ProductsPage,
    LoginPage,
    SignUpPage,
    ImageComponent,
    SignUpFormComponent,
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
