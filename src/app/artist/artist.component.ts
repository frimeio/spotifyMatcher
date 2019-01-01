import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../spotify/spotify.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {


  @Input() artistURI: string;
  spotifyArtistPlaylistURL = 'https://open.spotify.com/embed/artist/';
  spotifyArtistFollowURL = 'https://open.spotify.com/follow/1/?uri=spotify:artist:'

  constructor(
    private activatedRoute: ActivatedRoute,
    public _spotifyService: SpotifyService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {

  }

  getArtistFollowURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyArtistFollowURL+this.artistURI+'&size=detail&theme=dark');
  }
  getArtistPlaylistURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyArtistPlaylistURL+this.artistURI);
  }


}
