import { TestBed } from '@angular/core/testing';

import { UserNoTaken.ValidatorService } from './user-no-taken.validator.service';

describe('UserNoTaken.ValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserNoTaken.ValidatorService = TestBed.get(UserNoTaken.ValidatorService);
    expect(service).toBeTruthy();
  });
});
