import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

// components
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
    declarations: [
        HomeComponent,
        MenuComponent
    ],
    imports: [
        PagesRoutingModule
    ], bootstrap: [MenuComponent]
})
export class PagesModule {
}