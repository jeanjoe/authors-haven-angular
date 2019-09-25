import { Component, OnInit } from '@angular/core';
import { User } from '../../interaces/user';
import { AuthService } from '../../services/auth.service';
import { ArticleService } from '../../articles/article.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUser: User;
  articles = [];

  constructor(
    private authService: AuthService
  ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
  }

  getArticles(articles: []) {
    this.articles = articles;
  }

}
