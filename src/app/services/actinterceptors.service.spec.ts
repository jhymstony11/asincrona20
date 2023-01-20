import { TestBed } from '@angular/core/testing';

import { ActinterceptorsService } from './actinterceptors.service';

describe('ActinterceptorsService', () => {
  let service: ActinterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActinterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
