import { TestBed } from '@angular/core/testing';

import { ImagegetService } from './imageget.service';

describe('ImagegetService', () => {
  let service: ImagegetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagegetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
