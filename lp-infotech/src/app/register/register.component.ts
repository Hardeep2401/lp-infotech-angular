import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private http: HttpClient) {}
  pathUrl = 'http://localhost:3000/user';

  onSave() {
    this.http.get<any>('http://localhost:3000/user/').subscribe((response) => {
      console.log(response);
    });
  }
}
