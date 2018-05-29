import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from '../pages/about/about.component';
import { AdminComponent } from './admin.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddProductComponent } from './admin-products/add-product/add-product.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';

const routes: Routes = [
    { path: '', component: AdminComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: AdminHomeComponent },
        { path: 'services', component: AdminServicesComponent },
        { path: 'users', children: [
            { path: 'all', component: AdminUsersComponent },
            { path: '', redirectTo: 'all', pathMatch: 'full'}
        ]},
        { path: 'products', children: [
            { path: 'add', component: AddProductComponent },
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all', component: AdminProductsComponent }
        ]}
    ]},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}