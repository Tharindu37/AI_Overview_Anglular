import { TestBed } from '@angular/core/testing';

import { CatAndDogService } from './cat-and-dog.service';

describe('CatAndDogService', () => {
  let service: CatAndDogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatAndDogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
