import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';
import { map } from 'rxjs';
import { ArticlesEntity } from '../Interfaces/news-response';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  newsList: ArticlesEntity[] | any;

  constructor(private activRoute: ActivatedRoute, private newsApiService : NewsapiService) {}
  ngOnInit() {
    this.getTopHeadlines('us');
  }

  getTopHeadlines(country: string) {
    console.log("headline: " + this.newsApiService.getTopHeadlines('ie'));
    this.newsApiService.getTopHeadlines('ie').pipe(map((res) => res.articles)).subscribe((news) => (this.newsList = news)
    );
    console.log(this.newsList);

  }
}
