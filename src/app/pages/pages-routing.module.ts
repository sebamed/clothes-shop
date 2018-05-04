import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './shared/menu/menu.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [{
      path: 'home',
      component: HomeComponent
    }]
  },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}