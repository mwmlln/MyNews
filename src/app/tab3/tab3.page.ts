import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';
import { map } from 'rxjs';
import { ArticlesEntity } from '../Interfaces/news-response';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  newsList: ArticlesEntity[] | any;
  selectedCategory: string = 'entertainment';

  constructor(private activRoute: ActivatedRoute, private newsApiService : NewsapiService) {}
  ngOnInit() {
    this.getEntertainmentHeadlines();
  }

  getEntertainmentHeadlines() {
    this.newsApiService.getNewsByCategory(this.selectedCategory).pipe(map((res) => res.articles)).subscribe((news) => (this.newsList = news)
    );

  }

}
