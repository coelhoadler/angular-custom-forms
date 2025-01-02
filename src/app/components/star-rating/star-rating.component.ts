import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type Rating = { stars: number; text: string };

@Component({
  selector: 'app-star-rating',
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent),
      multi: true,
    },
  ],
})
export class StarRatingComponent implements ControlValueAccessor {

  @Input() ratings: Rating[] = [
    { stars: 1, text: 'Péssimo' },
    { stars: 2, text: 'Ruim' },
    { stars: 3, text: 'Regular' },
    { stars: 4, text: 'Bom' },
    { stars: 5, text: 'Ótimo!' },
  ];

  ratingText = '';
  displayText = '';

  protected disabled!: boolean;
  protected value!: number;

  onChanged!: (stars: number) => void;
  onTouched!: () => void;

  public writeValue(rating: number): void {
    this.value = rating;
  }

  public registerOnChange(fn: (stars: number) => void): void {
    this.onChanged = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setRating(rating: Rating): void {
    if (!this.disabled) {
      this.ratingText = rating.text;
      this.writeValue(rating.stars);
      this.onChanged(rating.stars);
      this.onTouched();
    }
  }

}
