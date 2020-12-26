import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { User } from "./model/User";
import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private httpclient: HttpClient) {}

  // To Create/Add New detail
  savedata(contactdata: User): Observable<User> {
    const baseurl = "http://localhost:4000/data/create";
    return this.httpclient.post<User>(baseurl, contactdata).pipe(
      (data: any) => {
        return data;
      },
      catchError((error) => {
        return throwError("Something went wrong!");
      })
    );
  }

  // To get detail
  getdata(): Observable<User> {
    const baseurl = "http://localhost:4000/data/get";
    return this.httpclient.get<User>(baseurl);
  }
}
