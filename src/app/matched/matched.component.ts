import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../spotify/spotify.service';

@Component({
  selector: 'app-matched',
  templateUrl: './matched.component.html',
  styleUrls: ['./matched.component.css']
})
export class MatchedComponent implements OnInit {
  topArtist = [];
  message: string;
  error: Boolean;
  data: string;
  TOPSONGS = 3;

  constructor(
    private activatedRoute: ActivatedRoute,
    public _spotifyService: SpotifyService,
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.data = params['access_token'];
      console.log(this.data);
    });
  }

  ngOnInit() {
    this._spotifyService.getUserData(this.data)
      .subscribe(
        (data: any) => {
          console.log(data['id'] + ' : ' + data['email']);
        }, (error) => {
          this.error = true;
          this.message = error.error.error.message;
          console.log(error.error.error.message);
        });

    for (let _i = 0; _i < this.TOPSONGS; _i++) {
      this.getTopXTrack(this.data, _i);
      console.log( 'test' + this.getTopXTrack(this.data, _i));
    }


  }

  getTopXTrack(token, x) {
    return this._spotifyService.getTopTrack(this.data, x)
      .subscribe(
        (data: any) => {
          this.topArtist[x] =  data;
          console.log('FUCK YEAH ' + data);
        }, (error) => {
          this.error = true;
          this.message = error.error.error.message;
          console.log(error.error.error.message);
        });
  }

}
