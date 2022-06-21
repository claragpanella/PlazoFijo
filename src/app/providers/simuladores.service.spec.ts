import { TestBed } from '@angular/core/testing';

import { SimuladoresService } from './simuladores.service';

describe('SimuladoresService', () => {
  let service: SimuladoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimuladoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
