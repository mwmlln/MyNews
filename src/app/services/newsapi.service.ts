import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../Interfaces/news-response';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  topHeadlinesPath = environment.API_URL;

  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(
      this.topHeadlinesPath + `top-headlines/sources?pageSize=10&apiKey=${environment.API_KEY}`)
  }

  getLocalHeadlines(country: string): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(
      this.topHeadlinesPath + `top-headlines?country=${country}&pageSize=10&apiKey=${environment.API_KEY}`)
  }
}
