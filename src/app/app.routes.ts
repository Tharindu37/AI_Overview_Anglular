import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieRatingComponent } from './components/dashboard/components/deep_learning/supervised_learning/feed_forward_neural_network/regression/movie-rating/movie-rating.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movie-rating', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movie-rating', component: MovieRatingComponent },
];
