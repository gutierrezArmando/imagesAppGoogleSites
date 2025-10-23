import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { GaleriaComponent } from './components/galeria/galeria.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home.component'),
    children: [
      {
        path: 'galeria',
        loadComponent: ()=> import('./components/galeria/galeria.component')
      },
      {
        path: 'dashboard',
        loadComponent: ()=> import('./components/dashboard/dashboard.component')
      },
    ]
  },
  { path:'**', redirectTo: 'home' },
];


