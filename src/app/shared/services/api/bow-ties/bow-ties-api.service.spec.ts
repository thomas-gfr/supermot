import { TestBed } from '@angular/core/testing';

import { BowTiesApiService } from './bow-ties-api.service';

describe('BowTiesApiService', () => {
  let service: BowTiesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BowTiesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
