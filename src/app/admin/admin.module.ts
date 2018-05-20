import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminServicesComponent } from './admin-services/admin-services.component';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddProductComponent } from './admin-products/add-product/add-product.component';


@NgModule({
    declarations: [
        AdminComponent,
        AdminHomeComponent,
        AdminServicesComponent,
        AddProductComponent
    ],
    imports: [
        AdminRoutingModule,
        CommonModule,
        FormsModule
    ]
})
export class AdminModule {
}