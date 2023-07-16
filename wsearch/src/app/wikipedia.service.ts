import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, pluck } from 'rxjs';

const observable = new Observable<number> (observer => {
  observer.next(1);
});

observable.subscribe(value => {
  console.log(value);
});

interface wikipediaResponse {
  query : {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  getSearchResult(term: string) {
    return this.http.get<wikipediaResponse>('https://en.wikipedia.org/w/api.php',{
      params: {
        action: 'query',
        format: 'json',
        list:'search',
        utf8:'1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      pluck('query', 'search')
    )
    ;
  }
}
