import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { User } from "./model/User";
import { catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { error } from "protractor";

@Injectable({
  providedIn: "root",
})
export class UserService {
  headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private httpclient: HttpClient) {}

  // savedata(contactdata: User): Observable<User> {
  //   const baseurl = "http://localhost:3000/api/postdetail";
  //   console.log("Contact Form Data:" + contactdata);
  //   return this.httpclient
  //     .post<User>(baseurl, contactdata)
  //     .pipe(catchError(this.handleError));
  // }

  // To Create/Add New Employee
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

  getdata(): Observable<User> {
    const baseurl = "http://localhost:4000/data/get";
    return this.httpclient.get<User>(baseurl);
  }

  handleError(error: HttpErrorResponse) {
    let msg = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\n Message: ${error.message}`;
    }
    return throwError(msg);
  }
}
