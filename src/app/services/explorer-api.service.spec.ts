import { TestBed } from '@angular/core/testing';

import { ExplorerApiService } from './explorer-api.service';

describe('ExplorerApiService', () => {
  let service: ExplorerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExplorerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
