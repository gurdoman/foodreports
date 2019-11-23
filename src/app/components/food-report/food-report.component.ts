import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service'
import { FoodReport } from 'src/app/models/FoodReport';

@Component({
  selector: 'app-food-report',
  templateUrl: './food-report.component.html',
  styleUrls: ['./food-report.component.scss'],
})
export class FoodReportComponent implements OnInit {
  foodReport: FoodReport;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
  ) { }

  ngOnInit() {
    this.getReport();
  }

  getReport(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.foodService.getFoodReport(id).subscribe(food => this.foodReport = food);
  }

}
