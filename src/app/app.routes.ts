import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'; // Pastikan path ini sesuai
import { TableComponent } from '../pages/table/table.component'; // Pastikan path ini sesuai
import { UserComponent } from '../pages/user/user.component'; // Pastikan path ini sesuai


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pages/table', component: TableComponent },
  { path: 'pages/user', component: UserComponent },
  { path: 'http://localhost:4200/', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'http://localhost:4200/', redirectTo: '/pages/table', pathMatch: 'full' },
  { path: 'http://localhost:4200/', redirectTo: '/pages/user', pathMatch: 'full' },
  // Tambahkan rute lainnya di sini
];
