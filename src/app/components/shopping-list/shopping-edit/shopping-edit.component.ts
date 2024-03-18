import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientDetail = new EventEmitter<Ingredient>();

  submitIngredient() {
    const body = new Ingredient(
      this.nameInputRef.nativeElement.value,
      Number(this.amountInputRef.nativeElement.value)
    );
    console.log
    this.ingredientDetail.emit(body);
  }
}
