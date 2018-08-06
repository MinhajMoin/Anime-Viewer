import { TestBed, inject } from '@angular/core/testing';

import { GetanimeService } from './getanime.service';

describe('GetanimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetanimeService]
    });
  });

  it('should be created', inject([GetanimeService], (service: GetanimeService) => {
    expect(service).toBeTruthy();
  }));
});
