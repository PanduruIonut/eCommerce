import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { Endpoints } from 'src/app/settings/endpoints';
import { Observable } from 'rxjs';

@Injectable()
export class UploadImageService {

  constructor(private http: HttpClient) { }

  register(user: User): Promise<any> {
    const endpoint = Endpoints.SignUp;
    return fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        return data as any;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

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
      .post(endpoint, formData).subscribe(value => {
        return value;
      }, error => {});
      }
}
