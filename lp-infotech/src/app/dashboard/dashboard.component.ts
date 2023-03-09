import { HttpClient } from '@angular/common/http';
import { Component, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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
  @ViewChild('userForm') ngForm: any;
  constructor(private http: HttpClient, private route: Router) {}

  ngOnInit(tableData: any, index: number) {
    return this.http
      .get<any>('http://localhost:3000/user', tableData)
      .subscribe((response) => {
        this.tableData = response;
      });
  }

  onEdit(tableData: any, index: number) {
    // console.log(this.tableData[index].id);
    this.route.navigateByUrl(`/edit/${this.tableData[index].id}`);
  }

  onDelete(tableData:any) {

    
    console.log(tableData)
    // this.http
    //   .delete('this.url' + this.tableData.id,value).subscribe((response) => {
    //     console.log(response)
    //   });
  }
}
