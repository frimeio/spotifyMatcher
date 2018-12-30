import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../spotify/spotify.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-matched',
  templateUrl: './matched.component.html',
  styleUrls: ['./matched.component.css']
})
export class MatchedComponent implements OnInit {
  newReleases : any[] =[];
  preloading: boolean = true;
  message: string;
  error: boolean = false;
  data: string;

  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json',
    'Authorization': 'Bearer 2 '+ this.data
  });



  constructor(
    private activatedRoute: ActivatedRoute,
    public _spotifyService: SpotifyService
  ) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.data = params['access_token'];
      console.log(this.data);
    });

    this.headers.set('Authorization', 'Bearer3 '+ this.data);


    this._spotifyService.getTopTrack(this.data)
      .subscribe(
        (data: any) =>{
          this.newReleases = data;
          this.preloading = false;
          console.log(this.newReleases);
        },(error)=>{
          this.preloading = false;
          this.error = true;
          this.message = error.error.error.message;
          console.log(error.error.error.message);
        });


  }
  ngOnInit() {
  }
}
