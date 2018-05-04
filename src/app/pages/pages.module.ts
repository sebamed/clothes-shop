import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

// components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
    declarations: [
        HomeComponent,
        AboutComponent,
    ],
    imports: [
        PagesRoutingModule
    ]
})
export class PagesModule {
}