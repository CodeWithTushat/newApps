import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  name='';
  date='';
  amount=0.0;
  height=0;
  miles=0.0;

  car = {
    maker: 'TATA',
    modal: 'Nexon',
    year:2022
  }

  onNameChangeChange(event:any){
    this.name = event.target.value
  }

  onDateChange(event:any){
    this.date = event.target.value;
  }

  onAmountChange(event: any){
    this.amount = parseFloat(event.target.value);
  }

  onHeightChange(event:any){
    this.height = parseFloat(event.target.value);
  }

  onMilesChange(event:any){
    this.miles = parseFloat(event.target.value);
  }
}
