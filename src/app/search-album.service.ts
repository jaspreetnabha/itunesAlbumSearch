import { Injectable } from '@angular/core';
import { JsonpModule, Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

interface Album {
  wrapperType: string;
  artistType: string;
  artistName: string;
  artistLinkUrl: string;
  artistId: number;
  amgArtistId: number;
  primaryGenreName: string;
  primaryGenreId: number;
}

@Injectable()
export class SearchAlbumService {
  apiRoot: string = 'https://itunes.apple.com/';
  private artistID: string;
  public albums = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {

  }

  search(term: string) {
    const artistURL = `${this.apiRoot}search?term=${term}&media=music&limit=1`;
    this.http.get<any>(artistURL).subscribe(res => {
      const albumURL = `${this.apiRoot}lookup?id=${res.results[0].artistId}&entity=album`;
      this.http.get(albumURL).subscribe(response => {
        const albums: Album[] = (<any>response).results;
        this.albums.next(albums);
      });
    });
  }

}
