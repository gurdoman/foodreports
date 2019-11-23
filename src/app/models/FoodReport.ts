import { FoodNutrient } from './FoodNutrient'

export class FoodReport{
  "foodClass": string;
  "description": string;
  "foodNutrients": Array<FoodNutrient>
  "foodComponents": Array<any>;
  "foodAttributes": Array<any>;
  "tableAliasName":string;
  "brandOwner": string;
  "gtinUpc": string;
  "dataSource": string;
  "ingredients": string;
  "modifiedDate": string;
  "availableDate": string;
  "servingSize": number;
  "servingSizeUnit": string;
  "householdServingFullText": string;
  "labelNutrients": Object;
  "brandedFoodCategory": string;
  "fdcId": number;
  "dataType": string;
  "publicationDate": string;
  "foodPortions": Array<any>;
  "changes": string;
}