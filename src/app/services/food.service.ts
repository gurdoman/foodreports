import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from '../models/Food';
import { FoodSearch } from '../models/FoodSearch';
import { FoodReport } from '../models/FoodReport';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foodsUrl = "https://api.nal.usda.gov/fdc/v1/";
  apiKey = "api_key=ihLda4JvVmX3QhYPRnUJHqhwlzGMF6oSCIOazoSn";

  constructor(private http:HttpClient) { }

  getFood(foodName: string):Observable<FoodSearch>{
    const foodUrl = `${this.foodsUrl}search?${this.apiKey}`;
    return this.http.post<FoodSearch>(foodUrl, 
      {
        "generalSearchInput" : foodName
      }, httpOptions);
  }

  getFoodReport(foodId:string):Observable<any>{
    const foodUrl = `${this.foodsUrl}${foodId}?${this.apiKey}`;
    return this.http.get<FoodReport>(foodUrl);
  }
}
