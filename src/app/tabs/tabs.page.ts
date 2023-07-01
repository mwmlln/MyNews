import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsapiService } from '../services/newsapi.service';
import { map } from 'rxjs';
import { ArticlesEntity } from '../Interfaces/news-response';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  newsList: ArticlesEntity[] | any;

  constructor(private activRoute: ActivatedRoute, private newsApiService : NewsapiService) {}

  ngOnInit() {
    this.newsApiService.getTopHeadlines('us');
  }

}
