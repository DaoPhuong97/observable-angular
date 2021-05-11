import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user;
  listArticle;
  constructor(  private http: HttpClient,
                protected userService: UserService,
                protected articleService: ArticlesService
                ) { }

  ngOnInit() {
    console.log("user", this.user)
  }
 
  seeMoreArticleByUser (userId) {
    return this.articleService.getArticlesByUserId(userId);
  }
}
