import { TestBed } from '@angular/core/testing';

import { PlantaoService } from './plantao.service';

describe('PlantaoService', () => {
  let service: PlantaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
