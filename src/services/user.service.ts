import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Endpoints } from 'src/app/settings/endpoints';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  SaveUser(user: User) {
    const endpoint = Endpoints.SignUp;
    const formData: FormData = new FormData();
    formData.append('FirstName', user.FirstName);
    formData.append('LastName', user.LastName);
    formData.append('Gender', user.Gender);
    formData.append('Email', user.Email);
    formData.append('Password', user.Password);
    formData.append('PhoneNumber', user.PhoneNumber);
    return this.http
      .post(endpoint, formData);
  }

  postLogin(email: string, password: string) {
    const endpoint = Endpoints.Login;
    const formData: FormData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return this.http
      .post(endpoint, formData);
  }
}
