import { NgModule } from '@angular/core';

// modules
import { PagesRoutingModule } from './pages-routing.module';
import { NguCarouselModule } from '@ngu/carousel';


// components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './home/our-services/our-services.component';


@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
        OurServicesComponent
    ],
    imports: [
        PagesRoutingModule,
        NguCarouselModule
    ]
})
export class PagesModule {
}