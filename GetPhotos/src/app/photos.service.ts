import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotosApi(){
    return this.http.get('https://api.unsplash.com/photos/random',{
      headers: {
        Authorization: 'Client-ID tDKejBn22wSfTtTv4k36FbeWZnI9cxtXrpz8jGUjukQ'
      }
    });
  }
}
