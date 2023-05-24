import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesOpcoesListagemOfertaComponent } from './botoes-opcoes-listagem-oferta.component';

describe('BotoesOpcoesListagemOfertaComponent', () => {
  let component: BotoesOpcoesListagemOfertaComponent;
  let fixture: ComponentFixture<BotoesOpcoesListagemOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoesOpcoesListagemOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesOpcoesListagemOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
