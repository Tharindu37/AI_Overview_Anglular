import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieRatingComponent } from './components/dashboard/components/deep_learning/supervised_learning/feed_forward_neural_network/regression/movie-rating/movie-rating.component';
import { HomeComponent } from './components/home/home.component';
import { IrisFlowerComponent } from './components/dashboard/components/deep_learning/supervised_learning/feed_forward_neural_network/classification/iris-flower/iris-flower.component';
import { CatAndDogComponent } from './components/dashboard/components/deep_learning/supervised_learning/convolutional_neural_network/classification/cat-and-dog/cat-and-dog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'movie-rating', component: MovieRatingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'iris-flower', component: IrisFlowerComponent },
  { path: 'cat-and-dog', component: CatAndDogComponent },
];
