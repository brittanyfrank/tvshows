import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tvshow } from 'src/app/models/tvshow.model';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.css']
})
export class TvshowDetailsComponent implements OnInit {
  currentTvshow: Tvshow = {
    title: '',
    description: '',
    season: 0
  };
  message = '';

  constructor(
    private tvshowService: TvshowsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTvshow(this.route.snapshot.paramMap.get("id")!);
  }

  getTvshow(id: string): void {
    this.tvshowService.get(id)
      .subscribe(
        data => {
          this.currentTvshow = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateSeason(status: number): void {
    const data = {
      title: this.currentTvshow.title,
      description: this.currentTvshow.description,
      season: this.currentTvshow.season
    };

    this.tvshowService.update(this.currentTvshow._id, data)
      .subscribe(
        response => {
          this.currentTvshow.season = status;
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateTvshow(): void {
    this.tvshowService.update(this.currentTvshow._id, this.currentTvshow)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteTvshow(): void {
    this.tvshowService.delete(this.currentTvshow._id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tvshows']);
        },
        error => {
          console.log(error);
        });
  }
}
