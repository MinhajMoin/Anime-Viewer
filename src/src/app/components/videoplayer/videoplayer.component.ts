import { Component, OnInit } from '@angular/core';
import {GetanimeService} from '../../services/getanime.service';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import * as $ from 'jquery';
import { when } from 'q';
@Component({
  selector: 'ta-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {

  constructor(private AnimeService:GetanimeService) { }
	searchinfo : any;
	ps:string;
	curAnimeEpisode:any;
  ngOnInit() {
		this.loadAnime("2910-satsuriku-no-tenshi",1,()=>{
			console.log(this.curAnimeEpisode);
		});
	}
	onSearchChange(str)
	{
		if (str.length >= 3)
		{
			this.AnimeService.getSearches(str).subscribe((response) => {
			this.searchinfo = response;
			});
		}
		else {
			this.searchinfo = null;
		}
	}
  l(){
		if (this.curAnimeEpisode != null){
		var p = this.curAnimeEpisode.mirrors[0].host.embed_prefix + this.curAnimeEpisode.mirrors[0].embed_id;
		if (this.curAnimeEpisode.mirrors[0].host.embed_suffix != null)
		{
			p += this.curAnimeEpisode.mirrors[0].host.embed_suffix;
		}
		$('iframe')[0].src = p;}
		console.log(this.curAnimeEpisode);
	}

	loadAnime(anime_slug,episode,callback=null){
		this.AnimeService.getAnime(anime_slug,episode).subscribe(response=>{
			var obj = $(response).filter("script");
			for(var i=0; i<obj.length; i++)
			{
				if (obj[i].getAttribute('src') == null) 
				{
					var json = obj[i].innerText.slice(20,obj[i].innerText.length);
					this.curAnimeEpisode = eval("(" + json + ')');
					if (callback!= null) return callback();
					return;
				}
			}
			});
	}
}
// $.ajax({
// 	url: "https://cors-anywhere.herokuapp.com/http://www.masterani.me/anime/watch/2910-satsuriku-no-tenshi/1",
// 	dataType: 'HTML',
// 	success: function(divid) {
// 		var obj= $(divid).filter("script");
// 		var script = document.createElement('script');
// 		for(var i=0; i<obj.length; i++)
// 		{
// 			if (obj[i].getAttribute('src') == null) 
// 			{
// 				script.innerText = obj[i].text;
// 				break;
// 			}
// 		}
// 		document.getElementsByTagName('head')[0].appendChild(script);
// 		},
// 	script:  true,
// 	async: false
// 	});

// $.ajax({
// 	url: 'https://cors-anywhere.herokuapp.com/https://www.rapidvideo.com/e/FQT06U5XKL',
// 	dataType: 'HTML',
// 	success: function(divid) {
// 		console.log(divid);
// 		var obj= $(divid).filter("video");
// 		console.log(obj);
// 		},
// 	script:  true,
// 	async: false
// 	});
