import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'profile', component: ProfileComponent }
];
