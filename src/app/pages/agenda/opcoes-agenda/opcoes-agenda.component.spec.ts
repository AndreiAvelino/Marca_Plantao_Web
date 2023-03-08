import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesAgendaComponent } from './opcoes-agenda.component';

describe('OpcoesAgendaComponent', () => {
  let component: OpcoesAgendaComponent;
  let fixture: ComponentFixture<OpcoesAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcoesAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcoesAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
