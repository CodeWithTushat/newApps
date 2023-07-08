import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsearch';
  pages = [];

  constructor (private wikipedia: WikipediaService) {}
  OnGotTerm(term: string){
   this.wikipedia.getSearchResult(term).subscribe((response:any)=> {
    this.pages = response.query.search;
   })
  }
}
