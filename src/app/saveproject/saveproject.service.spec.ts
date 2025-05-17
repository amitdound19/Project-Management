import { TestBed } from '@angular/core/testing';

import { SaveprojectService } from './saveproject.service';

describe('SaveprojectService', () => {
  let service: SaveprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
