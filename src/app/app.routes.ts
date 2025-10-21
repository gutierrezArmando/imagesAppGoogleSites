import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'**',
    redirectTo: 'home'
  },
];
