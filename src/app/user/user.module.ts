import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';

import { MyProductsComponent } from './my-products/my-products.component';
import { UserComponent } from './user.component';

@NgModule({
    declarations: [
        UserComponent,
        MyProductsComponent
    ],
    imports: [
        UserRoutingModule,
        CommonModule,
        FormsModule
    ]
})
export class UserModule {
}