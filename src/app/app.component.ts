import { Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './services/user.service';
import { ArticlesService } from './services/articles.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})

export class AppComponent {
  title = "observable-angular";
  listUser;
  constructor(private http: HttpClient,
    protected userService: UserService
   ) {}
  getListUser() {
    this.userService.getDBFromURL().subscribe((res) => {
      this.listUser = res;
      console.log("list user: ", res);
    });
  }

}
