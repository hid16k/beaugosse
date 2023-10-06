import { TestBed } from '@angular/core/testing';

import { TvshowapiService } from './tvshowapi.service';

describe('TvshowapiService', () => {
  let service: TvshowapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvshowapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
