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

  // onSave() {
  //   this.http.get<any>('http://localhost:3000/user/').subscribe((response) => {
  //     console.log(response);
  //   });
  // }
  // getValues(value: any) {
  //   console.log(value);
  // }

  getValues(value: any) {
    this.http
      .post<any>('http://localhost:3000/user/', value)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
