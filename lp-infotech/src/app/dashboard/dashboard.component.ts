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
  userForm: any;
  tableData: any=[];
  constructor(private http: HttpClient) {}

  ngOnInit(value: any) {
    this.http
      .get<any>('http://localhost:3000/user', value)
      .subscribe((response) => {
        this.tableData = response;
      });
  }
  onEdit(tableData:any) {
   console.log(tableData)
  }
 

}
