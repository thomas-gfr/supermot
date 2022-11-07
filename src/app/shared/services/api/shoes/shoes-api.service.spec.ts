import { TestBed } from '@angular/core/testing';

import { ShoesApiService } from './shoes-api.service';

describe('ShoesApiService', () => {
  let service: ShoesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
