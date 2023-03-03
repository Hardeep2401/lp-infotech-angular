import { HttpClient } from '@angular/common/http';
import { Component, Injectable, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [HttpClient],
})
export class EditComponent {
  url = 'http://localhost:3000/user';

  constructor(private http: HttpClient, route: ActivatedRoute) {
    const id = route.snapshot.paramMap.get('userId');
    this.http.get<any>(`${this.url}/${id}`).subscribe((response) => {
      console.log(response);
    });
  }

  @ViewChild('myForm') ngForm: any;
  tableData: any = [];

  ngOnInit(tableData: any, index: number) {}
}
