import { TestBed } from '@angular/core/testing';

import { SuitApiService } from './suit-api.service';

describe('SuitApiService', () => {
  let service: SuitApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuitApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
