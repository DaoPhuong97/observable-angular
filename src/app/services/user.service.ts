import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getDBFromURL() {
    return this.http.get(
      "https://60977771e48ec00017872956.mockapi.io/api/users"
    );
  }
}
