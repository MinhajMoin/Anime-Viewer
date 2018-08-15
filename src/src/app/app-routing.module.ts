import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';
import { SearchComponent } from './components/search/search.component';
import { EpisodelistComponent } from './components/episodelist/episodelist.component';

const routes: Routes = [ {
  path: '',
  component: HomeComponent
},{
  path: 'video',
  component: SearchComponent}
,{
  path: 'search',
  component: EpisodelistComponent
},{
  path: '**',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }