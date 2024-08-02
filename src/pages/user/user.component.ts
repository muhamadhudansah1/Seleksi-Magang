import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service'; 
import { User } from './user.model';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DatePipe],
  imports: [CommonModule, HttpClientModule]
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private datePipe: DatePipe 
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
    return this.datePipe.transform(date, 'short'); 
  }
}
