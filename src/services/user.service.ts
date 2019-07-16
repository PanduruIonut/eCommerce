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

  postLogin(userName: string) {
    const endpoint = Endpoints.Login;
    const formData: FormData = new FormData();
    formData.append('userName', userName);
    // formData.append('password', password);
    return this.http
      .post(endpoint, formData);
  }
}
