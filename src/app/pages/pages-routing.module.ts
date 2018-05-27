import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SingleProductComponent } from './products/product/singleProduct.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'about', component: AboutComponent },
  { path: 'product/:id', component: SingleProductComponent },
  { path: 'products', component: ProductsComponent, pathMatch: 'full' },
  {
    path: 'auth', children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: '**', redirectTo: 'pages' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}