// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// NgStickyModule
import { NgStickyDirective } from 'ng-sticky';

// routing
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

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
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
