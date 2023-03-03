import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [HttpClient],
})
export class EditComponent {
  constructor(private http: HttpClient) {}
  tableData: any = [];
  // @Input() myinput: string;

  ngOnInit() {
    
  }
}
