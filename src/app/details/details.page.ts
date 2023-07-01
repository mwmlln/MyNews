import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  author: any
  content: any
  description: any
  publishedAt: any
  source: any
  title: any
  url: any
  urlToImage : any

  constructor(private router:Router, private activateRoutes:ActivatedRoute) { }

  ngOnInit() {
    this.author = this.activateRoutes.snapshot.queryParamMap.get('author');
    this.content = this.activateRoutes.snapshot.queryParamMap.get('content');
    this.description = this.activateRoutes.snapshot.queryParamMap.get('description');
    this.publishedAt = this.activateRoutes.snapshot.queryParamMap.get('publishedAt');
    this.source = this.activateRoutes.snapshot.queryParamMap.get('source');
    this.title = this.activateRoutes.snapshot.queryParamMap.get('author');
    this.url = this.activateRoutes.snapshot.queryParamMap.get('url');
    this.urlToImage = this.activateRoutes.snapshot.queryParamMap.get('urlToImage');
  }

}
