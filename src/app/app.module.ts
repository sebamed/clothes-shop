// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { PagesModule } from './pages/pages.module';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';
// NgStickyModule
import { NgStickyDirective } from 'ng-sticky';

// routing
import { AppRoutingModule } from './app-routing.module';

// services
import { UserService } from './services/user.service';
import { ToastSerice } from './pages/shared/toast/toast.service';
import { ServicesService } from './services/services.service';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';

// components
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/shared/menu/menu.component';
import { IconModalComponent } from './admin/admin-services/icons-modal/icons-modal.component';
import { ToastComponent } from './pages/shared/toast/toast.component';

// pipes
import { FilterPipe } from './admin/pipe/filter.pipe';
import { UserModalComponent } from './admin/admin-users/user-modal/user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NgStickyDirective,
    IconModalComponent,
    UserModalComponent,
    FilterPipe,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    PagesModule,
    AdminModule,
    UserModule,
    HttpModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicesService, UserService, ToastSerice, ProductService, CategoryService, OrderService],
  bootstrap: [AppComponent],
  entryComponents: [IconModalComponent, UserModalComponent]
})
export class AppModule { }
