import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'lorem ipsum', 'https://static01.nyt.com' +
      '/images/2013/06/26/dining/26JPFLEX1/26JPFLEX1-articleLarge-v3.jpg'),
    new Recipe('Second Recipe', 'dolor sir aemet', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/' +
      'images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg')];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
