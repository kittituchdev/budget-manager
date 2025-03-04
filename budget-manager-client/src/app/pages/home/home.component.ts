import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faRotate, faPlus, faArrowUp, faGear, faClockRotateLeft, faBurger } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from '../../services/header.service';
import { ChartStackedBarComponent } from '../../components/chart-stacked-bar/chart-stacked-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FontAwesomeModule,
    ChartStackedBarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  faRotate = faRotate;
  faPlus = faPlus;
  faArrowUp = faArrowUp;
  faClockRotateLeft = faClockRotateLeft;
  faGear = faGear;
  faBurger = faBurger;

  transactions = [
    {
      label: 'Food',
      type: 'expense',
      category: 'Food/Drink',
      date: '14 Feb 2025',
      value: 2450
    },
    {
      label: 'Food',
      type: 'expense',
      category: 'Food/Drink',
      date: '14 Feb 2025',
      value: 2450
    },
    {
      label: 'Salary',
      type: 'income',
      category: 'Salary',
      date: '14 Feb 2025',
      value: 200000
    },
    {
      label: 'Food',
      type: 'expense',
      category: 'Food/Drink',
      date: '14 Feb 2025',
      value: 2450
    },
    {
      label: 'Food',
      type: 'expense',
      category: 'Food/Drink',
      date: '14 Feb 2025',
      value: 2450
    },
    {
      label: 'Food',
      type: 'expense',
      category: 'Food/Drink',
      date: '14 Feb 2025',
      value: 2450
    },
    {
      label: 'Food',
      type: 'expense',
      category: 'Food/Drink',
      date: '14 Feb 2025',
      value: 2450
    }
  ]


  constructor(
    readonly headerService: HeaderService
  ) {
    this.headerService.setTitle('Home')
  }


}
