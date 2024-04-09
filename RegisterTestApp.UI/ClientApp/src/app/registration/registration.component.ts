import { Component, Inject, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class Registration {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  model = new RegistrationModel();
  @ViewChild('dateOfBirth') dateOfBirthControl?: NgModel;

  save = () => {
    if (this.dateOfBirthControl!.valid) {
      this.http.post<RegistrationModel>(this.baseUrl + 'register', this.model).subscribe(result => {
        console.log(result);
      }, error => console.error(error));
    }
  }
  addPhone = () => {
    this.model.phoneNumbers.push('');
  }
  removePhone = (index: number) => {
    this.model.phoneNumbers.splice(index, 1);
  }
  trackByIndex = (index: number, obj: any): any => index;
}

class RegistrationModel {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phoneNumbers: string[] = [''];
  dateOfBirth: string = '';
}
