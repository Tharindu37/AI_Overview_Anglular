import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieRatingComponent } from './components/dashboard/components/deep_learning/supervised_learning/feed_forward_neural_network/regression/movie-rating/movie-rating.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movie-rating', component: MovieRatingComponent },
  { path: 'home', component: HomeComponent },
];
