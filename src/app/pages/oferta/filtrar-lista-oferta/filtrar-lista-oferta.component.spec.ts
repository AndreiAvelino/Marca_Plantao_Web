import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarListaOfertaComponent } from './filtrar-lista-oferta.component';

describe('FiltrarListaOfertaComponent', () => {
  let component: FiltrarListaOfertaComponent;
  let fixture: ComponentFixture<FiltrarListaOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarListaOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarListaOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
