import { TestBed } from '@angular/core/testing';

import { CufflinksApiService } from './cufflinks-api.service';

describe('CufflinksApiService', () => {
  let service: CufflinksApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CufflinksApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
