import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing';
  randomText = lorem.sentence();
  enteredText='';
  isShow = false;

  onInput(event:any){
    console.log(event.target.value);
    this.enteredText = event.target.value;
    if(this.enteredText.length == this.randomText.length)
      this.isShow=true;
    else
      this.isShow = false;
  }

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter)
      return 'pending';
    
    return randomLetter === enteredLetter?'correct':'incorrect';
  }
}
