import { TestBed } from '@angular/core/testing';

import { NasaDataService } from './nasa-data.service';

describe('NasaDataService', () => {
  let service: NasaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
