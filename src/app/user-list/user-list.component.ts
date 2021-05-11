import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { ArticlesService } from "../services/articles.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  @Input() users;
  //@Input() listUser;
  constructor(private http: HttpClient,
              protected userService: UserService,
              protected articlesService: ArticlesService) {}

  ngOnInit() {

  }

  sendDataToService() {
    this.articlesService.getArticlesByUserId(this.users);
  }
  
  // getListUser() {
  //   this.userService.getDBFromURL().subscribe((res) => {
  //     this.listUser = res;
  //     console.log("list user: ", res);
  //   });
  // }
  // getArticlesByUserId(userId) {
  //  this.userService.getArticlesByUserId(userId).subscribe((res) => {
  //       console.log("list articles: ", res);
  //     });
  // }
}
