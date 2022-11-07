import { TestBed } from '@angular/core/testing';

import { TieApiService } from './tie-api.service';

describe('TieApiService', () => {
  let service: TieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
