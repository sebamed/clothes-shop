// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AdminModule } from './admin/admin.module';
import { PagesModule } from './pages/pages.module';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';
// NgStickyModule
import { NgStickyDirective } from 'ng-sticky';

// routing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/shared/menu/menu.component';
import { IconModalComponent } from './admin/admin-services/icons-modal/icons-modal.component';
import { ServicesService } from './services/services.service';
import { FilterPipe } from './admin/pipe/filter.pipe';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NgStickyDirective,
    IconModalComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    PagesModule,
    AdminModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [ServicesService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [IconModalComponent]
})
export class AppModule { }
