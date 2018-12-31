import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private _http: HttpClient) { }

  private url = 'https://api.spotify.com/v1/';

  headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json',
    'Authorization': 'Bearer BQDgkERge6ec5p8j-kLiIsiIt67Dr9a29a2wxIKjN-YBLwgzPjSUUTeXwmEu8_JQNq635Mjn5Gt-Rk_JsYptjYd8BJEOV-c_KXcQkpg-ffzFhiOHMkMKVRGaRgDYEBj3BvNGSfTJfODge0YjwmQxGmzAM8ywyR4wt48URZY'
  });


  getTopTrack(headers){
    return this._http.get(this.url+`me/top/artists`, {headers: new HttpHeaders({'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + headers })})
      .pipe(map(data => data['items'].items));
  }

  getArtist(txt:string, headers){
    return this._http.get(this.url+`search?q=${ txt }&type=artist&market=SV&offset=0&limit=20`, {headers: headers})
      .pipe( map(data => data['artists'].items));
  }

  getArtistById(id:string){
    return this._http.get(this.url + `artists/${id}`, {headers: this.headers})
  }

  getTopTracks(id:string){
    return this._http.get(this.url + `artists/${id}/top-tracks?country=us`, {headers: this.headers})
      .pipe(map(data => data['tracks']))
  }

}
