import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/user';

  getValues(value: any) {
    this.http
      .post<any>('http://localhost:3000/user/', value)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
