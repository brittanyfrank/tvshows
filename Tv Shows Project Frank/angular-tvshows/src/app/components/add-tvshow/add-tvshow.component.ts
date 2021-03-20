import { Component, OnInit } from '@angular/core';
import { Tvshow } from 'src/app/models/tvshow.model';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-add-tvshow',
  templateUrl: './add-tvshow.component.html',
  styleUrls: ['./add-tvshow.component.css']
})
export class AddTvshowComponent implements OnInit {
  tvshow: Tvshow = {
    title: '',
    description: '',
    season: 0
  };
  submitted = false;

  constructor(private tvshowService: TvshowsService) { }

  ngOnInit(): void {
  }

  saveTvshow(): void {
    const data = {
      title: this.tvshow.title,
      description: this.tvshow.description,
      season: this.tvshow.season
    };

    this.tvshowService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTvshow(): void {
    this.submitted = false;
    this.tvshow = {
      title: '',
      description: '',
      season: 0
    };
  }

}