import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesAgendaModalComponent } from './opcoes-agenda-modal.component';

describe('OpcoesAgendaComponent', () => {
  let component: OpcoesAgendaModalComponent;
  let fixture: ComponentFixture<OpcoesAgendaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcoesAgendaModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcoesAgendaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
