import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  APP_BASE_URL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getMyArticles(): Observable<any> {
    return this.http.get(`${this.APP_BASE_URL}auth/profile/articles`);
  }

  getMyFollowers(): Observable<any> {
    return this.http.get(`${this.APP_BASE_URL}auth/profile/followers`);
  }

  getMyFollowings(): Observable<any> {
    return this.http.get(`${this.APP_BASE_URL}auth/profile/followings`);
  }

}
