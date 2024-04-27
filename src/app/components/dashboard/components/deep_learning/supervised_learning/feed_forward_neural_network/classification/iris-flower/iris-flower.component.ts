import { Component } from '@angular/core';
import { NavBarComponent } from '../../../../../../../nav-bar/nav-bar.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FooterComponent } from '../../../../../../../footer/footer.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Flower } from './models/flower';
import { FlowerService } from './service/flower.service';
import { MatDialog } from '@angular/material/dialog';
import { MessageBoxComponent } from './components/message-box/message-box.component';

interface PredictFlower {
  predicted_result: string;
}
@Component({
  selector: 'app-iris-flower',
  standalone: true,
  imports: [
    NavBarComponent,
    FooterComponent,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatButton,
  ],
  templateUrl: './iris-flower.component.html',
  styleUrl: './iris-flower.component.scss',
})
export class IrisFlowerComponent {
  protected flowerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private flowerService: FlowerService,
    private dialog: MatDialog
  ) {
    this.flowerForm = this.formBuilder.group({
      sepalLength: [null, [Validators.required]],
      sepalWidth: [null, [Validators.required]],
      petalLength: [null, [Validators.required]],
      petalWidth: [null, [Validators.required]],
    });
  }

  getFlowerName() {
    const sepalLength: number = this.flowerForm.get('sepalLength')
      ?.value as number;
    const sepalWidth: number = this.flowerForm.get('sepalWidth')
      ?.value as number;
    const petalLength: number = this.flowerForm.get('petalLength')
      ?.value as number;
    const petalWidth: number = this.flowerForm.get('petalWidth')
      ?.value as number;
    const flower: Flower = {
      sepalLength: sepalLength,
      sepalWidth: sepalWidth,
      petalLength: petalLength,
      petalWidth: petalWidth,
    };

    this.flowerService
      .predictFlowerName(flower)
      .subscribe((res: PredictFlower) => {
        this.openDialog(res);
      });
  }

  openDialog(data: PredictFlower) {
    this.dialog.open(MessageBoxComponent, { data: data });
  }
}
