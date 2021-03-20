import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvshowListComponent } from './components/tvshow-list/tvshow-list.component';
import { TvshowDetailsComponent } from './components/tvshow-details/tvshow-details.component';
import { AddTvshowComponent } from './components/add-tvshow/add-tvshow.component';

const routes: Routes = [
  { path: '', redirectTo: 'tvshows', pathMatch: 'full' },
  { path: 'tvshows', component: TvshowListComponent },
  { path: 'tvshows/:id', component: TvshowDetailsComponent },
  { path: 'add', component: AddTvshowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
