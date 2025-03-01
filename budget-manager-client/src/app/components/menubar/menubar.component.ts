import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWallet, faHome, faChartPie, faClockRotateLeft, faUser, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SelectModule } from 'primeng/select';
import { filter } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MatRippleModule } from '@angular/material/core';
@Component({
  selector: 'app-menubar',
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatBottomSheetModule,
    SelectModule,
    InputTextModule,
    MatRippleModule,
    FormsModule
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent implements OnInit {

  readonly bottomSheet = inject(MatBottomSheet);
  @ViewChild('add')
  add!: TemplateRef<any>;

  faWallet = faWallet;
  faHome = faHome;
  faChartPie = faChartPie;
  faClockRotateLeft = faClockRotateLeft;
  faUser = faUser;
  faDeleteLeft = faDeleteLeft;

  activeMenu: string = '';

  formGroup = new FormGroup({
    type: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required])
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
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('Route changed to:', event.urlAfterRedirects);
        this.activeMenu = this.getCurrentPath()
      });
  }

  getCurrentPath(): string {
    // this.router.url returns something like "/home?sdasdsd=sss"
    const urlWithoutQuery = this.router.url.split('?')[0]; // "/home"
    const path = urlWithoutQuery.replace(/^\//, '').split('/')[0]; // "home"
    return path;
  }

  menuNavigate(path: string) {
    this.router.navigateByUrl(path);
  }

  openBottomSheet() {
    const buttonElement = document.activeElement as HTMLElement; // Get the currently focused element
    buttonElement.blur(); // Remove focus from the button
    this.formGroup.patchValue({
      type: this.transactionConfig.currentType,
      category: this.transactionConfig.currentCategory
    }) // set default transaction type
    return this.bottomSheet.open(this.add);
  }

  /**
   * Submit transaction
   * @returns transaction object
   */
  submitTransaction() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      // call api create transaction
      this.bottomSheet.dismiss();
      this.resetData();
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

}
