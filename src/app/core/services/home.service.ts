import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  APP_BASE_URL = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  getArticles = (): Observable<any> => {
    return this.http.get(`${this.APP_BASE_URL}articles`);
  }

  getSingleArticle = (articleId): Observable<any> => {
    return this.http.get(`${this.APP_BASE_URL}articles/${articleId}`);
  }

}
