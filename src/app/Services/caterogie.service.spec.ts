import { TestBed } from '@angular/core/testing';

import { CaterogieService } from './caterogie.service';

describe('CaterogieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaterogieService = TestBed.get(CaterogieService);
    expect(service).toBeTruthy();
  });
});
