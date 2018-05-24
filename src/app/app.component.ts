import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { IUser } from './model/user.interface';

@Component({
  selector: 'app',
  template: `<app-menu></app-menu>`
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private _user: UserService) {

  }

  ngOnInit() {
    console.log("loadovana app");
    // todo:
    // dodaj da se user nakon logovanja json.stringify i ulazi u local storage
    // i kad god se refreshuje app da ovde postavlja current user-a u User servisu
    if (localStorage.getItem("currentUser") != null) {
      this._user.setCurrentUser(localStorage.getItem("currentUser"));
      console.log(this._user.currentUser);
    } else {
      console.log("ne postoji!");
    }
  }
}
