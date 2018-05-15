import { TestBed, inject } from '@angular/core/testing';

import { SearchAlbumService } from './search-album.service';

describe('SearchAlbumServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchAlbumService]
    });
  });

  it('should be created', inject([SearchAlbumService], (service: SearchAlbumService) => {
    expect(service).toBeTruthy();
  }));
});
