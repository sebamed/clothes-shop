import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';


import { AdminServicesComponent } from './admin-services/admin-services.component';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';



// components

@NgModule({
    declarations: [
        AdminComponent,
        AdminHomeComponent,
        AdminServicesComponent
    ],
    imports: [
        AdminRoutingModule
    ]
})
export class AdminModule {
}