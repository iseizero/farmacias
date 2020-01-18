import { ContentLayoutComponent } from './layout/content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [{
      path: '',
      loadChildren: './pages/web/web.module#WebModule'
    }]
  },
  {
    path: '**',
    redirectTo: '/'
  }
]