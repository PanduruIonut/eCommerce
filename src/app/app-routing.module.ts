import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPage } from './pages/products/products.page';
import { LoginPage } from './pages/login/login.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'products', component: ProductsPage },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'sign-up',
    component: SignUpPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
