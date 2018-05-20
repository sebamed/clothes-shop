import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  template: `<app-menu></app-menu>`
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    console.log("loadovana app");
    // todo:
    // dodaj da se user nakon logovanja json.stringify i ulazi u local storage
    // i kad god se refreshuje app da ovde postavlja current user-a u User servisu
  }
}
