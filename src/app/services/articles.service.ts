import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articles = new BehaviorSubject({})
  currentArticles = this.articles.asObservable();
  constructor(
    private http: HttpClient,
    
  ) { }

  public getArticlesByUserId(userId) {
    return this.http.get(
      "https://60977771e48ec00017872956.mockapi.io/api/users/" +
        userId +
        "/articles"
    ).subscribe((res) => this.articles.next(res));
  }

  getCurrentArticle () {
    return this.currentArticles.subscribe(data=> {
      console.log("data article list", data);
    });
  }

  // this.articlesService.currentArticles.subscribe(data=> {
  //   console.log("data article list", data);
  // });
}
