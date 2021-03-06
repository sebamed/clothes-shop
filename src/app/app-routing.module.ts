import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', loadChildren: './pages/pages.module#PagesModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'user', loadChildren: './user/user.module#UserModule' },
    { path: '**', redirectTo: '' }
];

const config: ExtraOptions = {
    useHash: true,
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}