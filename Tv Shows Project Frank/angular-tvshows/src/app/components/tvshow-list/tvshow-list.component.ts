import { Component, OnInit } from '@angular/core';
import { Tvshow } from 'src/app/models/tvshow.model';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrls: ['./tvshow-list.component.css']
})
export class TvshowListComponent implements OnInit {
  tvshows?: Tvshow[];
  currentTvshow?: Tvshow;
  currentIndex = -1;
  title = '';

  constructor(private tvshowsService: TvshowsService) { }

  ngOnInit(): void {
    this.retrieveTvshows();
  }

  retrieveTvshows(): void {
    this.tvshowsService.getAll()
      .subscribe(
        data => {
          this.tvshows = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTvshows();
    this.currentTvshow = undefined;
    this.currentIndex = -1;
  }

  setActiveTvshow(tvshow: Tvshow, index: number): void {
    this.currentTvshow = tvshow;
    this.currentIndex = index;
  }

  removeAllTvshows(): void {
    this.tvshowsService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.tvshowsService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tvshows = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
