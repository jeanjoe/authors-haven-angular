import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: any = [];
  loading = true;

  constructor(public homeService: HomeService, private router: Router) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles = () => {
    return this.homeService.getArticles().subscribe(res => {
      this.articles = res.articles;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

  navigateToArticlePage = (articleId) => {
    return this.router.navigate(['/articles', articleId]);
  }

}
