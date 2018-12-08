import { TestBed } from '@angular/core/testing';

import { ServerLogService } from './server-log.service';

describe('ServerLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerLogService = TestBed.get(ServerLogService);
    expect(service).toBeTruthy();
  });
});
