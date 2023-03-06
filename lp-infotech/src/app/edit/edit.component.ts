import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  url = 'http://localhost:3000/user';

  userForm!: FormGroup;

  constructor(
    private http: HttpClient,
    route: ActivatedRoute,
    fb: FormBuilder
  ) {
    const id = route.snapshot.paramMap.get('userId');
    this.http.get<any>(`${this.url}/${id}`).subscribe((response) => {
      console.log(response);
    
    });
    this.userForm = fb.group({
      userFirstName: [''],
      userLastName: [''],
      userEmail: [''],
      userProfessional: [''],
      userPhoneNumber: [''],
      userPassword: [''],
    });
  }
}
