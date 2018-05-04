import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { NguCarouselModule } from '@ngu/carousel';

// components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
    ],
    imports: [
        PagesRoutingModule,
        NguCarouselModule
    ]
})
export class PagesModule {
}