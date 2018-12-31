import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../spotify/spotify.service';

@Component({
  selector: 'app-matched',
  templateUrl: './matched.component.html',
  styleUrls: ['./matched.component.css']
})
export class MatchedComponent implements OnInit {
  topArtist: any;
  message: string;
  error: Boolean;
  data: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    public _spotifyService: SpotifyService
  ) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.data = params['access_token'];
      console.log(this.data);
    });
    this._spotifyService.getTopTrack(this.data)
      .subscribe(
        (data: any) => {
          this.topArtist = data;
        }, (error) => {
          this.error = true;
          this.message = error.error.error.message;
          console.log(error.error.error.message);
        });
    console.log(this.topArtist);
  }
  ngOnInit() {
  }
}
