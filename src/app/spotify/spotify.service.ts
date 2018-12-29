import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private _http: HttpClient) { }

  private url = 'https://api.spotify.com/v1/';

  private headers: HttpHeaders = new HttpHeaders({
    'Authorization': 'Bearer BQBCmAvTI8T_Z639OSpM8hwiq0y7zQFqc72b1bw-ze9x6huOW0ghH7YVFrtDSjw0xc4UWPxMI1VHOkKHOdE'
  })


  getNewReleases() {
    return this._http.get(this.url + `browse/new-releases`, {headers: this.headers})
      .pipe( map(data => data['albums'].items));
  }

  getArtist(txt: string) {
    return this._http.get(this.url + `search?q=${ txt }&type=artist&market=SV&offset=0&limit=20`, {headers: this.headers})
      .pipe( map(data => data['artists'].items));
  }

  getArtistById(id: string) {
    return this._http.get(this.url + `artists/${id}`, {headers: this.headers});
  }

  getTopTracks(id: string) {
    return this._http.get(this.url + `artists/${id}/top-tracks?country=us`, {headers: this.headers})
      .pipe(map(data => data['tracks']));
  }

}
