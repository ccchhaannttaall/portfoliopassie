import { TestBed } from '@angular/core/testing';

import { ResultaatService } from './resultaat.service';

describe('ProjectService', () => {
  let service: ResultaatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultaatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
