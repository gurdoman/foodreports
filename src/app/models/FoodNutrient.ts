import { Nutrient } from './Nutrient';
import { FoodNutrientDerivation } from './FoodNutrientDerivation';

export class FoodNutrient{
  type: string;
  id: number;
  nutrient: Nutrient;
  foodNutrientDerivation: FoodNutrientDerivation
  amount: number;
}