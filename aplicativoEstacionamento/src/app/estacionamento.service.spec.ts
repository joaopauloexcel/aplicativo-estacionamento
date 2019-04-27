import { TestBed } from '@angular/core/testing';

import { EstacionamentoService } from './estacionamento.service';

describe('EstacionamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstacionamentoService = TestBed.get(EstacionamentoService);
    expect(service).toBeTruthy();
  });
});
