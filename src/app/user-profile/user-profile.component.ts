import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

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

  showMovies = {
    movie1: 'The Godfather',
    movie2: 'The Shawshank Redemption (1994)',
    movie3: 'Gone With the Wind (1939)',
    movie4: 'Casablanca (1942)',
    movie5: 'It\'s a Wonderful Life (1946)',
    movie6: 'Schindler\'s List (1993)',
    movie7: 'Star Wars',
    movie8: 'Rear Window (1954)',
    movie9: 'Citizen Kane (1941)',
    movie10: 'To Kill a Mockingbird (1962)'
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