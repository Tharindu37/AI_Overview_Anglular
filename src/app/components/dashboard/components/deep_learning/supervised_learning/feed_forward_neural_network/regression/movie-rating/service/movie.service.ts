import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

interface MovieRating {
  predicted_result: number;
}
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}
  predictMovieRating(movieData: Movie): Observable<MovieRating> {
    const url = 'http://192.168.1.200:8002/predict';
    return this.http.post<MovieRating>(url, movieData);
  }
}
