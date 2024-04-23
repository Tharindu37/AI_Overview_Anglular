import { Component } from '@angular/core';
import { Movie } from './models/movie';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MovieService } from './service/movie.service';
import { MessageBoxComponent } from './components/message-box/message-box.component';
import { NavBarComponent } from '../../../../../../../nav-bar/nav-bar.component';
import { FooterComponent } from '../../../../../../../footer/footer.component';

interface MovieRating {
  predicted_result: number;
}
@Component({
  selector: 'app-movie-rating',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    NavBarComponent,
    FooterComponent,
  ],
  templateUrl: './movie-rating.component.html',
  styleUrl: './movie-rating.component.scss',
})
export class MovieRatingComponent {
  protected movieForm: FormGroup;
  constructor(
    private movieService: MovieService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) {
    this.movieForm = this.formBuilder.group({
      year: [null, [Validators.required, Validators.min(2000)]],
      time: [null, [Validators.required, Validators.min(30)]],
      votes: [null, [Validators.required, Validators.min(0)]],
    });
  }

  getMovieRating() {
    const year: number = this.movieForm.get('year')?.value as number;
    const time: number = this.movieForm.get('time')?.value as number;
    const votes: number = this.movieForm.get('votes')?.value as number;
    const moviedata: Movie = {
      year: year,
      time: time,
      votes: votes,
    };

    this.movieService
      .predictMovieRating(moviedata)
      .subscribe((res: MovieRating) => {
        this.openDialog(res);
      });
  }

  openDialog(data: MovieRating) {
    this.dialog.open(MessageBoxComponent, {
      data: data,
    });
  }
}
