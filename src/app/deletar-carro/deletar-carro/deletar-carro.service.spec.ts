import { TestBed } from '@angular/core/testing';

import { DeletarCarroService } from './deletar-carro.service';

describe('DeletarCarroService', () => {
  let service: DeletarCarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletarCarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
