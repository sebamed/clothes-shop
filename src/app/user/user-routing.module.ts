import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { MyProductsComponent } from './my-products/my-products.component';

const routes: Routes = [
    { path: '', component: UserComponent, children: [
        { path: '', redirectTo: 'my-products', pathMatch: 'full' },
        { path: 'my-products', component: MyProductsComponent }
    ]},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}