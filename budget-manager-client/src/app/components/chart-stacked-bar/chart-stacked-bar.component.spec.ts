import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartStackedBarComponent } from './chart-stacked-bar.component';

describe('ChartStackedBarComponent', () => {
  let component: ChartStackedBarComponent;
  let fixture: ComponentFixture<ChartStackedBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartStackedBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartStackedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
