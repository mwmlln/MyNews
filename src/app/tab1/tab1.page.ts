import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
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

  constructor(private activRoute: ActivatedRoute, private newsApiService : NewsapiService, private router:Router) {}
  ngOnInit() {
    this.getUSHeadlines();
  }

  getUSHeadlines() {
    // console.log("headline: " + this.newsApiService.getTopHeadlines('us'));
    this.newsApiService.getTopHeadlines('us').pipe(map((res) => res.articles)).subscribe((news) => (this.newsList = news)
    );

  }

  getDetails(selectedArticle: ArticlesEntity) {
    const params : NavigationExtras = {
      queryParams: {
        'author': selectedArticle.author,
        'content': selectedArticle.content,
        'description': selectedArticle.description,
        'publishedAt': selectedArticle.publishedAt,
        'source': selectedArticle.source.name,
        'title': selectedArticle.title,
        'url': selectedArticle.url,
        'urlToImage' : selectedArticle.urlToImage
      }
  }
  this.router.navigate(['/details'], params);

}
}
