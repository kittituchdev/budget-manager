import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class HistoryComponent implements OnInit {


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


  incomeExpenseBar = {
    items: [] as any[],
    summary: 0
  }

  incomeCategoryBar = {
    items: [] as any[],
    summary: 0
  }

  expenseCategoryBar = {
    items: [] as any[],
    summary: 0
  }

  incomeColorPalette = [
    '#B9B28A',
    '#D0C89E',
    '#EBE5C2',
    '#F5F2E0',
    '#FAF8EB',
  ];
  expenseColorPalette = [
    '#B9B28A',
    '#D0C89E',
    '#EBE5C2',
    '#F5F2E0',
    '#FAF8EB',
  ];


  constructor(
    readonly headerService: HeaderService
  ) {
    this.headerService.setTitle('History');
    this.currentHeight = window.innerHeight;
    window.addEventListener('resize', () => {
      this.currentHeight = window.innerHeight;
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // get data from api
    this.incomeExpenseSetup();
    this.incomeCategorySetup();
    this.expenseCategorySetup();
  }

  incomeExpenseSetup() {
    this.incomeExpenseBar.items = [];
    this.incomeExpenseBar.summary = 0;

    const items = [
      {
        label: 'Income',
        value: 65000,
      },
      {
        label: 'Expense',
        value: 26000,
      }
    ]
    this.incomeExpenseBar.summary = items.reduce((sum, item) => sum + item.value, 0);
    for (const item of items) {
      this.incomeExpenseBar.items.push({
        label: item.label,
        value: item.value,
        color: item.label.toLowerCase() == 'income' ? '#B9B28A' : '#EBE5C2',
        percentage: (item.value / this.incomeExpenseBar.summary) * 100
      });
    }

    console.log(this.incomeExpenseBar)

  }

  incomeCategorySetup() {
    this.incomeCategoryBar.items = [];
    this.incomeCategoryBar.summary = 0;

    const items = [
      {
        label: 'Salary',
        value: 60000,
      },
      {
        label: 'Freelance',
        value: 5000,
      }
    ]
    this.incomeCategoryBar.summary = items.reduce((sum, item) => sum + item.value, 0);
    for (const [index, item] of items.entries()) {
      this.incomeCategoryBar.items.push({
        label: item.label,
        value: item.value,
        color: this.incomeColorPalette[index % 5],
        percentage: (item.value / this.incomeCategoryBar.summary) * 100
      });
    }

    console.log(this.incomeCategoryBar)

  }

  expenseCategorySetup() {
    this.expenseCategoryBar.items = [];
    this.expenseCategoryBar.summary = 0;

    const items = [
      {
        label: 'Food/Drink',
        value: 9000,
      },
      {
        label: 'Travel',
        value: 2500,
      },
      {
        label: 'Family',
        value: 5000,
      },
      {
        label: 'Other',
        value: 1700,
      }
    ]
    items.sort((a, b) => b.value - a.value);
    this.expenseCategoryBar.summary = items.reduce((sum, item) => sum + item.value, 0);
    for (const [index, item] of items.entries()) {
      this.expenseCategoryBar.items.push({
        label: item.label,
        value: item.value,
        color: this.expenseColorPalette[index % 5],
        percentage: (item.value / this.expenseCategoryBar.summary) * 100
      });
    }

    console.log(this.expenseCategoryBar)

  }


}
