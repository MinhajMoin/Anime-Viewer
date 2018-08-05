import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { when } from 'q';
@Component({
  selector: 'ta-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit {

  constructor() { }
	searchinfo : any;
	ps:string;
	currentAnime:any;
  ngOnInit() {
	}
	onSearchChange(str)
	{
		$.ajax({url:"https://cors-anywhere.herokuapp.com/http://www.masterani.me/api/anime/search?search=" + str + "&sb=!0",
		success:(response)=>{this.searchinfo = response;}});
	}
  l()
  {
	eval("console.log(args);")
	eval("var p = args.mirrors[0].host.embed_prefix + args.mirrors[0].embed_id;")
	eval("if (args.mirrors[0].host.embed_suffix != null)")
	{
		eval("p += args.mirrors[0].host.embed_suffix;")
	}
	$('iframe')[0].src = eval("p");
  }
}
$.ajax({
	url: "https://cors-anywhere.herokuapp.com/http://www.masterani.me/anime/watch/2910-satsuriku-no-tenshi/1",
	dataType: 'HTML',
	success: function(divid) {
		var obj= $(divid).filter("script");
		var script = document.createElement('script');
		for(var i=0; i<obj.length; i++)
		{
			if (obj[i].getAttribute('src') == null) 
			{
				script.innerText = obj[i].text;
				break;
			}
		}
		document.getElementsByTagName('head')[0].appendChild(script);
		},
	script:  true,
	async: false
	});
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
