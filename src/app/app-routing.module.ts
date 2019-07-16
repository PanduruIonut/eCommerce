import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsPage } from './pages/products/products.page';
import { LoginPage } from './pages/login/login.page';
import { SingUpPage } from './pages/sing-up/sing-up.page';

const routes: Routes = [
  { path: '', component: ProductsPage },
  { path: 'products', component: ProductsPage },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'sing-up',
    component: SingUpPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
