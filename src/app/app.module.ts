// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AdminModule } from './admin/admin.module';
import { PagesModule } from './pages/pages.module';
// NgStickyModule
import { NgStickyDirective } from 'ng-sticky';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/shared/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NgStickyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
