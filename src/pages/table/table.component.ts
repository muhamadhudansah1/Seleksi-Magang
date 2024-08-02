import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service'; // Import UserService
import { User } from './user.model';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';  // Impor CommonModule
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DatePipe],
  imports: [CommonModule]
})
export class TableComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private datePipe: DatePipe // Tambahkan DatePipe ke constructor
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
  
  formatDate(date: string): string | null {
    return this.datePipe.transform(date, 'short'); // Format tanggal dengan DatePipe
  }
}
