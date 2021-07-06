import { TestBed } from '@angular/core/testing';

import { SafeDocService } from './safe-doc.service';

describe('SafeDocService', () => {
  let service: SafeDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafeDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
