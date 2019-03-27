import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  hidden = false;

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  hideButton(event: any) {
    if (this.hidden === true) {
      this.hidden = false
    } else {
      this.hidden = true
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
