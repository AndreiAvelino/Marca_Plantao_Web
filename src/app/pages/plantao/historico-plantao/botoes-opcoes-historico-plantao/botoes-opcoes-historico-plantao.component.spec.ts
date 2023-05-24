import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesOpcoesHistoricoPlantaoComponent } from './botoes-opcoes-historico-plantao.component';

describe('BotoesOpcoesHistoricoPlantaoComponent', () => {
  let component: BotoesOpcoesHistoricoPlantaoComponent;
  let fixture: ComponentFixture<BotoesOpcoesHistoricoPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoesOpcoesHistoricoPlantaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesOpcoesHistoricoPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
