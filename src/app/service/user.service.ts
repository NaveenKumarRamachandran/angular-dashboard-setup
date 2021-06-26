import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  imageUploadUrl = '/api/image/upload';

  constructor(private httpClient: HttpClient) {}

  public url = 'http://localhost:3000/api/';

  public signUp(user: any): Observable<any> {
    return this.httpClient.post(this.url + 'signup', user, {
      headers: { 'content-type': 'application/json' },
    });
  }

  public signIn(user: any): Observable<any> {
    return this.httpClient.post(this.url + 'login', user, {
      headers: { 'content-type': 'application/json' },
    });
  }

  public verify(): Observable<any> {
    const token = localStorage.getItem('UserAccessToken');
    return this.httpClient.get(this.url + 'verify', {
      headers: { 'content-type': 'application/json', "authorization": `Bearer ${token}` },
    });
  }

  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('upload', image);
    return this.httpClient.post(this.imageUploadUrl, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  public deleteImage(mediaKey: string): Observable<any> {
    return this.httpClient.delete(this.imageUploadUrl + '/' + mediaKey);
  }
}
