import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectEspecializacaoComponent } from './select-especializacao.component';

describe('SelectEspecializacaoComponent', () => {
  let component: SelectEspecializacaoComponent;
  let fixture: ComponentFixture<SelectEspecializacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectEspecializacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectEspecializacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
