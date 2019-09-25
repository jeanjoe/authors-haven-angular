import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  article: any = {};
  loading = true;
  errorMessage: string;
  articleId: string;

  constructor(private router: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
    this.articleId = this.router.snapshot.paramMap.get('id');
    this.fetchArticle(this.articleId);
  }

  fetchArticle = (articleId) => {
    return this.homeService.getSingleArticle(articleId).subscribe(res => {
      this.article = res.article;
      this.loading = false;
    }, err => {
      this.loading = false;
      this.errorMessage = err.error.message;
      console.log(this.errorMessage);
    });
  }

}
