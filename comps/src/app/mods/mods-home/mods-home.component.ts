import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit{

  constructor () {  }

  ngOnInit(): void {
      
  }

  isShow:boolean=false;

  Onclick(){
    this.isShow = this.isShow?false:true;
  }
}
