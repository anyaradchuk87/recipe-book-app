import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'Simply test',
      'https://www.foodandwine.com/thmb/D7B4gf5cIwqtffzxq-uxJ_qhoGI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steak-au-poivre-red-wine-pan-sauce-hero-01-FT-RECIPE1222-c9e1da15f33f4076986b6ce37ae5bbb0.jpg'
    ),
  ];
}
