import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cards';

  posts = [
    {
      title: 'Neat Tree IT',
      username: '@nature',
      image: 'assets/mine/pic_docs/tree.jpg',
      content: 'I saw this neat tree today'
    },
    {
      title: 'Mountain',
      username: '@clif',
      image: 'assets/mine/pic_docs/m2t.jpg',
      content: 'Here is a picture of a night wing mountain'
    },
    {
      title: 'Bike',
      username: '@rise',
      image: 'assets/mine/pic_docs/bike.jpg',
      content: 'I Iove India'
    }
  ]
}
