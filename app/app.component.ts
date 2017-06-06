import { Component } from '@angular/core';
import { Recipe } from './recipe-book';



@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe List {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <p>{{hour}}:{{minute}}</p>
    <div class='recipe' *ngFor="let recipe of recipes">
      <hr>
      <h2 (click)="chooseRecipe(recipe)">{{recipe.title}}</h2>
    </div>

    <button (click)="newRecipeCreate()" class='btn btn-primary'>Create New Recipe</button>

    <button (click)="hideDetails()" class='btn btn-warning'>Hide Recipe</button>

    <div *ngIf="chosenRecipe">
      <h1>A recipe has been chosen for the 70th annual Hunger Games!</h1>
      <h1>{{chosenRecipe.title}}</h1><button (click)="editRecipe(chosenRecipe); ingredient = null; step = null" class="btn btn-info">Edit Recipe</button>
        <h4>Ingredients Required:</h4>
        <ul>
          <li *ngFor="let ingredient of chosenRecipe.ingredients">{{ingredient}}</li>
        </ul>
        <h4>Directions for preparation:</h4>
        <ul>
          <li *ngFor="let direction of chosenRecipe.directions">{{direction}}</li>
        </ul>
    </div>


    <div *ngIf="newRecipe">
      <h2>New Recipe</h2>
      <div>
        <label for='title'>Recipe Name</label>
        <input [(ngModel)]="newRecipe.title" type='text' class='form-control'>

        <label for='ingredient'>Recipe Ingredient</label>
        <input (input)="ingredient = $event.target.value" type='text' class='form-control'>

        <label for='step'>Recipe Step</label>
        <input (input)="step = $event.target.value" type='text' class='form-control'>

        <button (click)="newRecipeSubmit(newRecipe, step, ingredient)" class='btn btn-info'>Submit</button>
      </div>
    </div>

    <div *ngIf="editingRecipe">
      <h2>Edit Recipe</h2>
      <div>
        <label for='title'>Change Recipe Name</label>
        <input [(ngModel)]="chosenRecipe.title" type='text' class='form-control'>

        <label for='ingredient'>Add Recipe Ingredient</label>
        <input (input)="ingredient = $event.target.value" type='text' class='form-control'>

        <label for='step'>Add Recipe Step</label>
        <input (input)="step = $event.target.value" type='text' class='form-control'>

        <button (click)="editRecipeSubmit(chosenRecipe, step, ingredient)" class='btn btn-info'>Submit</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Awesome Recipes';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  hour: number = this.currentTime.getHours();
  minute: number = this.currentTime.getMinutes();
  selectedRecipe: Recipe;
  chosenRecipe = null;
  newRecipe = null;
  editingRecipe = null;
  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  newRecipeCreate() {
    this.newRecipe = new Recipe('', [], []);
  }

  hideDetails() {
    this.chosenRecipe = null;
  }

  newRecipeSubmit(recipe, step, ingredient) {
    recipe.ingredients = [ingredient];
    recipe.directions = [step];
    this.recipes.push(recipe);
    this.newRecipe = null;
  }

  chooseRecipe(recipe) {
    this.chosenRecipe = recipe;
  }

  editRecipe(recipe) {
    this.editingRecipe = true;
  }

  editRecipeSubmit(recipe, step, ingredient) {
    if (ingredient != null) {
      recipe.ingredients.push(ingredient);
    }
    if (step != null) {
      recipe.directions.push(step);
    }
    this.editingRecipe = false;
  }

  recipes: Recipe[] = [
    new Recipe('Cookies', ['Milk', 'Sugar', 'Vanilla'], ['mix', 'bake', 'serve']),
    new Recipe('Bread', ['Oats', 'Flour', 'Yeast'], ['mix', 'bake', 'serve']),
    new Recipe('Icecream', ['Milk', 'Sugar', 'Vanilla'], ['mix', 'freeze', 'mix more', 'serve'])
  ];
}
