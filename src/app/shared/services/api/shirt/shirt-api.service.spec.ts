import { TestBed } from '@angular/core/testing';

import { ShirtApiService } from './shirt-api.service';

describe('ShirtApiService', () => {
  let service: ShirtApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShirtApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
