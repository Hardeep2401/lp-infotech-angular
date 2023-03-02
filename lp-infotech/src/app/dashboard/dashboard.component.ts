import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

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
  userForm: any = [];
  tableData: any = [];
  constructor(private http: HttpClient) {}

  ngOnInit(tableData: any, index: number) {
    this.http
      .get<any>('http://localhost:3000/user', tableData)
      .subscribe((response) => {
        this.tableData = response;
      });
  }

  onEdit(tableData: any, index: number) {
    console.log(this.tableData[index].id, tableData);

    this.tableData = new FormGroup({
      id: new FormControl(''),
    });
  }

  // getAll(tableData: any, index: number) {

  // }

  getData(index: number) {
    console.log(this.tableData[index].id);

    return this.http.get<any>(`${this.url}/${this.tableData[index].id}`)
      .subscribe((response) => {

        this.userForm.setValue({
          id: this.tableData[index].id,
          userFirstName: this.tableData[index].userFirstName,
          userLastName: this.tableData[index].userLastName,
          userEmail: this.tableData[index].userEmail,
          userProfessional: this.tableData[index].userProfessional,
          userPhoneNumber: this.tableData[index].userPhoneNumber,
          userPassword: this.tableData[index].userPassword,
        });
      });
  }
}
