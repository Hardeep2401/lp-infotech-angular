import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  url = 'http://localhost:3000/user';
  constructor(private http: HttpClient) {}

  users() {
    return this.http.get<any>('this.url').subscribe((response) => {
      console.log(response);
    });
  }
}
