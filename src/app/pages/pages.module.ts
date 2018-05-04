import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

// components
import { HomeComponent } from './home/home.component';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        PagesRoutingModule
    ]
})
export class PagesModule {
}