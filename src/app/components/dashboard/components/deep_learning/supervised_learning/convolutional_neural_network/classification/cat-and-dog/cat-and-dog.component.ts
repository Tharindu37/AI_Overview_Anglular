import { Component } from '@angular/core';
import { NavBarComponent } from '../../../../../../../nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CatAndDogService } from './service/cat-and-dog.service';

@Component({
  selector: 'app-cat-and-dog',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './cat-and-dog.component.html',
  styleUrl: './cat-and-dog.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [animate('0.3s ease-in-out')]),
    ]),
    trigger('moveLeftToRight', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('2s linear', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class CatAndDogComponent {
  imageUrl: string | ArrayBuffer | null = null;
  imageFile: File | null | undefined;
  result: string | undefined;

  constructor(private catAndDogService: CatAndDogService) {}

  onFileSelected(event: any) {
    this.result = undefined;
    const file: File = event.target.files[0];
    if (file) {
      this.imageFile = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }

  predict() {
    if (this.imageFile)
      this.catAndDogService
        .predictCatOrDog(this.imageFile)
        .subscribe((res: { predicted_result: string }) => {
          console.log(res.predicted_result);
          this.result = res.predicted_result;
        });
    else console.log('Please Select Image');
  }
}
