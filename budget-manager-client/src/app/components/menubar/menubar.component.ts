import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWallet, faHome, faChartPie, faClockRotateLeft, faUser } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';
@Component({
  selector: 'app-menubar',
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent implements OnInit {

  faWallet = faWallet;
  faHome = faHome;
  faChartPie = faChartPie;
  faClockRotateLeft = faClockRotateLeft;
  faUser = faUser;

  activeMenu: string = 'home';

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
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
    const path = urlWithoutQuery.replace(/^\//, '').split('/')[0];       // "home"
    return path;
  }

  menuNavigate(path: string) {
    this.router.navigateByUrl(path);
  }

}
