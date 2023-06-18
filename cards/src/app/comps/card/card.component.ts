import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()  title='';
  @Input()  image='';
  @Input()  username='';
  @Input()  content='';

  constructor(){

  }

  ngOnInit(): void {
    console.log("cords");
  }
  
}
