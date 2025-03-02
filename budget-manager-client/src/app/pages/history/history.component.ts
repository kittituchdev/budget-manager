import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { SelectModule } from 'primeng/select';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-history',
  imports: [
    CommonModule,
    FontAwesomeModule,
    SelectModule,
    FormsModule
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {


  faBurger = faBurger;

  months = [
    {
      label: 'Feb 2025',
      value: '2025-02'
    },
    {
      label: 'Jan 2025',
      value: '2025-01'
    },
    {
      label: 'Dec 2024',
      value: '2024-12'
    },
    {
      label: 'Nov 2024',
      value: '2024-11'
    },
    {
      label: 'Oct 2024',
      value: '2024-10'
    },
    {
      label: 'Sep 2024',
      value: '2024-09'
    }
  ]

  monthSelected = '2025-02';

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
  ]

  currentHeight: number;

  constructor(
    readonly headerService: HeaderService
  ) {
    this.headerService.setTitle('History');
    this.currentHeight = window.innerHeight;
    window.addEventListener('resize', () => {
      this.currentHeight = window.innerHeight;
    })
  }


}
