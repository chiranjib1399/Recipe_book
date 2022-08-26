import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';


@Injectable()
export class RecipeService{
recipeSelected = new EventEmitter<Recipe>();


  private  recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          'This is simply a test',
          'https://thumbs.dreamstime.com/z/recipe-word-text-green-leaf-logo-icon-design-white-background-suitable-card-typography-143638205.jpg',
          [
            new Ingredient('meat',1),
            new Ingredient('Burger',3)
          ]
        ),
        new Recipe(
            'A  good recipe',
            'five star hotel',
            'https://thumbs.dreamstime.com/z/recipe-word-text-green-leaf-logo-icon-design-white-background-suitable-card-typography-143638205.jpg'
         ,[   
            new Ingredient('buns',4),
            new Ingredient('fish',1)
        
        ] ),
      ];
        constructor(private slService: ShoppingListService){

        }
      getRecipes(){
        return this.recipes.slice();

      }
      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients); 
      }
}