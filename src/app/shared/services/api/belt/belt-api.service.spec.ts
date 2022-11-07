import { TestBed } from '@angular/core/testing';

import { BeltApiService } from './belt-api.service';

describe('BeltApiService', () => {
  let service: BeltApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeltApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
