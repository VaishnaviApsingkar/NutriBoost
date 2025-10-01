import { TestBed } from '@angular/core/testing';

import { AssetTraceabilityService } from './asset-traceability.service';

describe('AssetTraceabilityService', () => {
  let service: AssetTraceabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetTraceabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
