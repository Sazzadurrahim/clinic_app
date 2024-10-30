import { TestBed } from '@angular/core/testing';

import { DoctordataService } from './doctordata.service';

describe('DoctordataService', () => {
  let service: DoctordataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctordataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
