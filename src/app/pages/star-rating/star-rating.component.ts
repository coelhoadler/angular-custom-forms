import { Component } from '@angular/core';
import { StarRatingComponent } from '../../components/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-star-rating-page',
  imports: [StarRatingComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss'
})
export class StarRatingPageComponent {

  form = new FormGroup({
    rating: new FormControl(
      { value: null, disabled: false },
      Validators.required
    ),
    comment: new FormControl(''),
  });

  onSubmit(): void {
    console.log(this.form.value);
  }

}
