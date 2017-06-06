import { Component, Input } from '@angular/core';
import { Recipe } from './recipe-book';


@Component({
  selector: 'recipe-detail',
  template: `
  <div class='recipe'>
    <hr>
    <h2>{{recipe.title}}</h2>
    <h4>Ingredients:</h4>
    <ul>
       <li *ngFor="let ingredient of recipe.ingredients">{{ingredient}}</li>
    </ul>
    <h4>Directions</h4>
    <ul>
       <li *ngFor="let direction of recipe.directions">{{direction}}</li>
    </ul>
  </div>
  `,
})

export class RecipeDetailComponent {
  @Input() recipe: Recipe;
}
