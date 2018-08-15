import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as $ from 'jquery';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetanimeService {
  CurrentAnimeSubject: BehaviorSubject<any> = new BehaviorSubject('#dcdcdc');
  CurrentAnime: Observable<any>;
  constructor(private http: HttpClient) {
    this.CurrentAnime = this.CurrentAnimeSubject.asObservable();
  }

  getSearches(str:string) {
    return this.http.get("https://cors-anywhere.herokuapp.com/http://www.masterani.me/api/anime/search?search=" + str + "&sb=!0");
  }
  getAnime(anime,episode)
  {
    return this.http.get("https://cors-anywhere.herokuapp.com/http://www.masterani.me/anime/watch/"+anime+"/"+episode,{responseType: 'text'});
  }
  getAnimeDetails(anime_id)
  {
    this.http.get("https://cors-anywhere.herokuapp.com/http://www.masterani.me/api/anime/" + anime_id + "/detailed").subscribe(response=>{
      this.CurrentAnimeSubject.next(response);
    });
    this.CurrentAnime.subscribe(value=>{console.log(value);});
  }

}
