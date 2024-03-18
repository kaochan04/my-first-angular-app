import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 
      'This is a simply a test', 
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_487/k%2FEdit%2F2024-03-lobster-bisque-pasta%2Flobster-bisque-pasta-1_ab76d8-crop'
    ),
    new Recipe(
      'Another Test Recipe', 
      'This is a simply a test', 
      'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_730,h_487/k%2FEdit%2F2024-03-lobster-bisque-pasta%2Flobster-bisque-pasta-1_ab76d8-crop'
    )
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
