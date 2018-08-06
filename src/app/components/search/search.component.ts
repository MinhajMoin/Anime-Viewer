import { Component, OnInit } from '@angular/core';
import { VideoplayerComponent } from '../videoplayer/videoplayer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { GetanimeService } from '../../services/getanime.service';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'ta-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private AnimeService:GetanimeService) { }
	searchinfo : any;
  ps:string;
  place: string = "Search Anime";
	curAnimeEpisode:any;
  ngOnInit() {
  }
  onSearchChange()
	{
		if (this.ps.length >= 3)
		{
			this.AnimeService.getSearches(this.ps).subscribe((response) => {
			this.searchinfo = response;
			});
		}
		else if (this.ps.length < 3){
			this.searchinfo = null;
		}
	}
  foc()
  {
    this.place = null;
  }
  nofoc()
  {
    this.place = "Search Anime";
    this.searchinfo = null;
    this.ps = '';
  }
}
