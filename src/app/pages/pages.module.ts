import { NgModule } from '@angular/core';

// modules
import { PagesRoutingModule } from './pages-routing.module';
import { NguCarouselModule } from '@ngu/carousel';
import { CommonModule } from '@angular/common';

// components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './home/our-services/our-services.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        OurServicesComponent,
        ProductsComponent,
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        PagesRoutingModule,
        NguCarouselModule,
        CommonModule,
        FormsModule
    ]
})
export class PagesModule {
}