import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodReportComponent } from './food-report.component';

describe('FoodReportComponent', () => {
  let component: FoodReportComponent;
  let fixture: ComponentFixture<FoodReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodReportComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
