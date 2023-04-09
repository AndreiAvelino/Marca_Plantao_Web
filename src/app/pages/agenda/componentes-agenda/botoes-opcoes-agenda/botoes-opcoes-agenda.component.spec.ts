import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoesOpcoesAgendaComponent } from './botoes-opcoes-agenda.component';

describe('BotoesOpcoesAgendaComponent', () => {
  let component: BotoesOpcoesAgendaComponent;
  let fixture: ComponentFixture<BotoesOpcoesAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoesOpcoesAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotoesOpcoesAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
