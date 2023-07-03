import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit{

  static = [
    {value: 22, label: '# of Users'},
    {value: 903999, label: 'Revenue'},
    {value: 50, label: 'Reviews'}
  ];
  items = [
    { img: '/assets/comps/images/bottle.jpg', name:'Bottles', description: 'Bottle for desc'},
    { img: '/assets/comps/images/camera.jpg', name:'Camera', description: 'Camera for desc'},
    { img: '/assets/comps/images/glass.jpg', name:'Glass', description: 'Glass for desc'},
    { img: '/assets/comps/images/typewritter.jpg', name:'Type Writter', description: 'Type writter for desc'}
  ];
  constructor () {}

  ngOnInit(): void {
      
  }
}
