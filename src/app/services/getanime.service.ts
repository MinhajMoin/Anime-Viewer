import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';
@Injectable({
  providedIn: 'root'
})
export class GetanimeService {

  constructor(private http: HttpClient) { }

  getSearches(str:string) {
    return this.http.get("https://cors-anywhere.herokuapp.com/http://www.masterani.me/api/anime/search?search=" + str + "&sb=!0");
  }
  getAnime(anime,episode)
  {
    return this.http.get("https://cors-anywhere.herokuapp.com/http://www.masterani.me/anime/watch/"+anime+"/"+episode,{responseType: 'text'});
  }

}
