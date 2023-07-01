import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pages';

  currentPage = 0;
  
  images = [
    {
      titles:'At the Beach',
      url: 'https://images.unsplash.com/photo-1591017403286-fd8493524e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      titles:'Jaguar',
      url: 'https://www.v3cars.com/media/model-imgs/1625554503-Jaguar-XF.jpg'
    },
    {
      titles:'Land Rover',
      url: 'https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/127323/discovery-sport-right-front-three-quarter.jpeg?isig=0&q=75'
    },
    {
      titles: 'Goku',
      url:'https://animemotivation.com/wp-content/uploads/2018/03/Dragon-Ball-Z-Wallpapers-Goku.jpg'
    },
    {
      titles:'Goku 1',
      url : 'https://wallpaperaccess.com/full/54720.jpg'
    },
    {
      titles: 'Goku SSJ3',
      url : 'https://wallpaperaccess.com/full/237439.jpg'
    }
  ];

  checkWindowIndex(index:number){
    return Math.abs(this.currentPage - index) < 2;
  }
}
