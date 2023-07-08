import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit{
  term = '';

  @Output() submitted = new EventEmitter<string>();

  constructor () {}

  ngOnInit(): void {
      
  }

  onInput(event: any){
    this.term = event.target.value;
  }

  onFormSubmit(event:any){
    event.preventDefault();
    console.log(this.term);
    this.submitted.emit(this.term);
  }
}
