import { FoodNutrientSource } from './FoodNutrientSource'

export class FoodNutrientDerivation{
  id: number;
  code: string;
  description: string;
  foodNutrientSource: FoodNutrientSource;
}