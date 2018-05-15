import { Component, OnInit } from '@angular/core';
import { SearchAlbumService } from '../search-album.service';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private loading: boolean = false;
  private albums: any[];
  constructor(private itunes: SearchAlbumService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  onSearch(term: string) {
    this.loading = true;
    this.itunes.albums.subscribe(res => {
      this.loading = false;
        this.albums = res;
      }
      );
      this.itunes.search(term);
  }
  ngOnInit() {
  }

}
