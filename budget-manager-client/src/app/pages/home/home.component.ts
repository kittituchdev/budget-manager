import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faRotate, faArrowUp, faGear, faClockRotateLeft, faBurger, faDeleteLeft, faXmark, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { MatRippleModule } from '@angular/material/core';
import { DatePickerModule } from 'primeng/datepicker';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    SelectModule,
    InputTextModule,
    MatRippleModule,
    FormsModule,
    DatePickerModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  readonly bottomSheet = inject(MatBottomSheet);
  @ViewChild('add')
  add!: TemplateRef<any>;

  faRotate = faRotate;
  faArrowDown = faArrowDown;
  faArrowUp = faArrowUp;
  faClockRotateLeft = faClockRotateLeft;
  faGear = faGear;
  faBurger = faBurger;
  faDeleteLeft = faDeleteLeft;
  faXMark = faXmark;

  Math = Math;

  card = {
    summary: 44412
  }

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




  activeMenu: string = '';

  formGroup = new FormGroup({
    type: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    date: new FormControl<Date>(new Date(), [Validators.required]),
  })

  transactionConfig = {
    type: [
      {
        label: 'Income',
        key: 'income'
      },
      {
        label: 'Expense',
        key: 'expense'
      }
    ],
    currentType: 'expense',
    value: null as number | null,
    displayValue: '',
    category: [
      {
        label: 'Food/Drink',
        value: 'food'
      },
      {
        label: 'Travel',
        value: 'travel'
      },
      {
        label: 'Home',
        value: 'home'
      },
      {
        label: 'Family',
        value: 'family'
      },
      {
        label: 'Salary',
        value: 'salary'
      },
      {
        label: 'Gift',
        value: 'gift'
      },
      {
        label: 'Other',
        value: 'other'
      },
    ],
    currentCategory: 'other'
  }

  constructor(
    readonly headerService: HeaderService,
    readonly router: Router
  ) {
    this.headerService.setTitle('Home')
  }


  // Transaction modal function

  openBottomSheet(type: string) {
    const buttonElement = document.activeElement as HTMLElement; // Get the currently focused element
    buttonElement.blur(); // Remove focus from the button
    this.transactionConfig.currentType = type;
    this.formGroup.patchValue({
      type: this.transactionConfig.currentType,
      category: this.transactionConfig.currentCategory,
      date: new Date()
    }) // set default transaction type
    return this.bottomSheet.open(this.add, { disableClose: true }).afterDismissed().subscribe(() => {
      this.resetData()
    });
  }

  closeBottomSheet() {
    this.bottomSheet.dismiss();
  }

  /**
   * Submit transaction
   * @returns transaction object
   */
  submitTransaction() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      // format request and call api create transaction
      this.bottomSheet.dismiss();
      return {}; // transaction object
    } else {
      return null;
    }
  }

  resetData() {
    this.formGroup.reset();
    this.transactionConfig.currentCategory = 'other';
    this.transactionConfig.value = null;
    this.transactionConfig.displayValue = '';
  }

  addNumberValue(numberValue: string) {
    let currentValue = this.formGroup.value.value;
    if ((numberValue == '.' && currentValue?.indexOf('.') == -1) || numberValue != '.') { // found . at curent value, dont add .
      if (!currentValue) {
        currentValue = '';
      }
      currentValue += numberValue;
      this.formGroup.patchValue({ value: currentValue }) // set default transaction type
      this.transactionConfig.displayValue = (+currentValue).toLocaleString();
    }
  }

  removeNumberValue() {
    let currentValue = this.formGroup.value.value;
    if (currentValue) {
      if (currentValue[currentValue.length - 2] == '.') { // remove .
        currentValue = currentValue.slice(0, currentValue.length - 2)
        this.formGroup.patchValue({ value: currentValue }) // set default transaction type
      } else {
        currentValue = currentValue.slice(0, currentValue.length - 1)
        this.formGroup.patchValue({ value: currentValue }) // set default transaction type
      }
      this.transactionConfig.displayValue = (+currentValue).toLocaleString()
      this.transactionConfig.value = +currentValue;
    } else {
      this.formGroup.patchValue({ value: null }) // set default transaction type
      this.transactionConfig.displayValue = '';
      this.transactionConfig.value = null;
    }
  }

  categoryChange(category: string) {
    this.formGroup.patchValue({ category: category })
    this.transactionConfig.currentCategory = category;
  }

  goToHistoryPage() {
    this.router.navigate(['history']);
  }


}
