import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Roasted Meat',
      'Tasty meat',
      'https://www.foodandwine.com/thmb/D7B4gf5cIwqtffzxq-uxJ_qhoGI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/steak-au-poivre-red-wine-pan-sauce-hero-01-FT-RECIPE1222-c9e1da15f33f4076986b6ce37ae5bbb0.jpg',
      [
        new Ingredient('meat', 6),
        new Ingredient('fries', 20)
      ]
    ),
    new Recipe(
      'Mediterane Pasta',
      'Tasty pasta',
      'https://media.self.com/photos/5e87967c5767ab0008aab371/4:3/w_320%2Cc_limit/Pasta-Aglio-e-Olio.jpg',
      [
        new Ingredient('pasta', 4),
        new Ingredient('tomatoes', 3)
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addToShopList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}