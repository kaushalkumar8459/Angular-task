import { Component, OnInit } from "@angular/core";
import { User } from "../model/User";
import { UserService } from "./../user.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  model = new User();
  public error: any;

  constructor(private userservice: UserService) {}

  ngOnInit() {}

  onSubmit(contactform: any) {
    let data = contactform.value;
    this.userservice.savedata(data).subscribe(
      (result) => {
        alert("Thanks for your interest.We will revert you in 24 hours..!");
        console.log("User Registration Result: ", result);
        console.log(data);
      },
      (error) => {
        console.log(error);
        alert("Something went wrong!");
        this.error = error;
      }
    );
  }

  getdata() {
    this.userservice.getdata().subscribe((data) => {
      console.log(data);
    });
  }
}
