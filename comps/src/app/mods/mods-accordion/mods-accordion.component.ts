import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-accordion',
  templateUrl: './mods-accordion.component.html',
  styleUrls: ['./mods-accordion.component.css']
})
export class ModsAccordionComponent implements OnInit{

  constructor () {}

  ngOnInit(): void {
      
  }

  @Input() items: any;

  itemIndex:number = 0;

  expandclick(ind:number) {
    if(ind === this.itemIndex){
      this.itemIndex = -1;
    }
    this.itemIndex = ind;
  }
}
