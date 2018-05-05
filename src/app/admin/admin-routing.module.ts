import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from '../pages/about/about.component';
import { AdminComponent } from './admin.component';
import { AdminServicesComponent } from './admin-services/admin-services.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

const routes: Routes = [
    { path: '', component: AdminComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: AdminHomeComponent },
        { path: 'services', component: AdminServicesComponent },
    ]},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}