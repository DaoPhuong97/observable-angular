import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  //@Input() articleList = UserComponent.prototype;
  articles;
  constructor(
    protected articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.articlesService.currentArticles.subscribe(data=> {
      this.articles = data;
      console.log("data article list", data);
    });
  }

}
