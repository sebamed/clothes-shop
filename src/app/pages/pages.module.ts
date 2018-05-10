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


@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        OurServicesComponent,
        ProductsComponent
    ],
    imports: [
        PagesRoutingModule,
        NguCarouselModule,
        CommonModule
    ]
})
export class PagesModule {
}