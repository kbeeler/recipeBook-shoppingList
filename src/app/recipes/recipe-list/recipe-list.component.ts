import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [

    new Recipe('Brownies', 'chocolate brownies', 'https://media.istockphoto.com/id/178634141/photo/stack-of-brownies.jpg?s=1024x1024&w=is&k=20&c=LcpfWHfs8fZoXtZaqdluTYKZHALPtCdrwoUBCIXsOaI='),
    new Recipe('Weed Brownies', 'THC infused chocolate brownies', 'https://media.istockphoto.com/id/178634141/photo/stack-of-brownies.jpg?s=1024x1024&w=is&k=20&c=LcpfWHfs8fZoXtZaqdluTYKZHALPtCdrwoUBCIXsOaI=')  
  ];

  contructor() { }
}
