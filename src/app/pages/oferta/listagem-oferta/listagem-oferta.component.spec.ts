import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemOfertaComponent } from './listagem-oferta.component';

describe('ListagemOfertaComponent', () => {
  let component: ListagemOfertaComponent;
  let fixture: ComponentFixture<ListagemOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
