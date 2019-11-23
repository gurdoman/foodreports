import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/Food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent implements OnInit {
  @Input() food: Food;
  @Input() foodName: string;

  constructor() { }

  ngOnInit() {}

}
