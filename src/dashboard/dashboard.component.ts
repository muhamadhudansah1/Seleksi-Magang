import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html', // Pastikan path ini sesuai
  styleUrls: ['./dashboard.component.css']   // Pastikan path ini sesuai
})
export class DashboardComponent {
  title = 'dashboard';

  constructor(private router: Router) {}

  goToTable() {
    this.router.navigate(['/pages/table']);
  }
  goToUser() {
    this.router.navigate(['/pages/user']);
  }
}

