import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  url = 'http://localhost:3000/user';

  userForm!: FormGroup;
  userData: any = {};

  constructor(
    private http: HttpClient,
    private activatedroute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      userFirstName: [' '],
      userLastName: [' '],
      userEmail: [' '],
      userProfessional: [' '],
      userPhoneNumber: [' '],
      userPassword: [' '],
      userConfirmPassword: [' '],
    });
    let id = this.activatedroute.snapshot.params['userId'];
    this.http.get(`${this.url}/${id}`).subscribe((response) => {
      this.userData = response;
      this.userForm = this.fb.group({
        userFirstName: [this.userData.userFirstName],
        userLastName: [this.userData.userLastName],
        userEmail: [this.userData.userEmail],
        userProfessional: [this.userData.userProfessional],
        userPhoneNumber: [this.userData.userPhoneNumber],
        userPassword: [this.userData.userPassword],
        userConfirmPassword: [this.userData.userConfirmPassword],
      });
    });
  }

  editUpdate(value: any) {
    // let id = this.activatedroute.snapshot.params['userId'];
    console.log(value);
    return this.http.put<any>(`${this.url}/${this.userData.id}`, value).subscribe((response) => {
        console.log(response);
      });
  }
}
