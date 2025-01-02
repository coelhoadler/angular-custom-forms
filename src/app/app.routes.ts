import { Routes } from '@angular/router';
import { StarRatingPageComponent } from './pages/star-rating/star-rating.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/star-rating/star-rating.component').then(m => m.StarRatingPageComponent),
        title: 'Home'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
