import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListaCandidatosOfertaComponent } from './modal-lista-candidatos-oferta.component';

describe('ModalListaCandidatosOfertaComponent', () => {
  let component: ModalListaCandidatosOfertaComponent;
  let fixture: ComponentFixture<ModalListaCandidatosOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalListaCandidatosOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalListaCandidatosOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
