import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesOfertaComponent } from './opcoes-oferta.component';

describe('OpcoesOfertaComponent', () => {
  let component: OpcoesOfertaComponent;
  let fixture: ComponentFixture<OpcoesOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcoesOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcoesOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
