import { TestBed, inject } from '@angular/core/testing';

import { FiresService } from './fires.service';

describe('FiresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiresService]
    });
  });

  it('should be created', inject([FiresService], (service: FiresService) => {
    expect(service).toBeTruthy();
  }));
});
