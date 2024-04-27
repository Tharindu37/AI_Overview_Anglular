import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
interface PredictFlower {
  predicted_result: string;
}
@Component({
  selector: 'app-message-box',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './message-box.component.html',
  styleUrl: './message-box.component.scss',
})
export class MessageBoxComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: PredictFlower) {}
}
