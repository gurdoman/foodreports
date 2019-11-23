import { Food } from './Food';

export class FoodSearch{
  foodSearchCriteria: Object;
  totalHits: number;
  currentPage: number;
  totalPages: number;
  foods: Array<Food>
}