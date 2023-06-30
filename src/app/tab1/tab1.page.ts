import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';
import { map } from 'rxjs';
import { ArticlesEntity } from '../Interfaces/news-response';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  newsList: ArticlesEntity[] | any;

  constructor(private activRoute: ActivatedRoute, private newsApiService : NewsapiService) {}
  ngOnInit() {
    this.getTopHeadlines();
  }

  getTopHeadlines() {
    console.log("headline: " + this.newsApiService.getTopHeadlines());
    this.newsApiService.getTopHeadlines().pipe(map((res) => res.articles)).subscribe((news) => (this.newsList = news)
    );
    console.log(this.newsList);

  }

}
