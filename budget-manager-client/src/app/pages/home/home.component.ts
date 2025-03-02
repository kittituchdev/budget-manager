import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-home',
  imports: [
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
