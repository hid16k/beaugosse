import { TestBed } from '@angular/core/testing';

import { PeopleapiService } from './peopleapi.service';

describe('PeopleapiService', () => {
  let service: PeopleapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
