import { TestBed } from '@angular/core/testing';

import { EnviornmentService } from './enviornment.service';

describe('EnviornmentService', () => {
  let service: EnviornmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviornmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
