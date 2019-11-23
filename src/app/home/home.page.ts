import { Component } from '@angular/core';
import { Food } from '../models/Food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  foods:Food[];
  foodName: string;

  constructor(private foodService:FoodService) {}

  ngOnInit(){
    
  }

  search(){
    if(localStorage.getItem(this.foodName)){
      this.foods = JSON.parse(localStorage.getItem(this.foodName));
    }else{
      this.foodService.getFood(this.foodName).subscribe( f =>{
        this.foods = f.foods;
        localStorage.setItem(this.foodName, JSON.stringify(this.foods));
      });
    }
  }
}
