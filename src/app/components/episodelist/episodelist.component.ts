import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { GetanimeService } from '../../services/getanime.service';
@Component({
  selector: 'ta-episodelist',
  templateUrl: './episodelist.component.html',
  styleUrls: ['./episodelist.component.scss']
})
export class EpisodelistComponent implements OnInit {

  constructor(private animeService:GetanimeService) { }
  episodes:any;
  currentAnime: any;
  ngOnInit() {
    this.animeService.CurrentAnime.subscribe((value) => {this.currentAnime = value;this.episodes = value.episodes});
  }

}
 