import { TestBed } from '@angular/core/testing';

import { CurrentConditionsService } from './current-conditions.service';

describe('CurrentConditionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentConditionsService = TestBed.get(CurrentConditionsService);
    expect(service).toBeTruthy();
  });
});
