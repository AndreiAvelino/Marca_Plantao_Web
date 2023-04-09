import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarOfertaComponent } from './pesquisar-oferta.component';

describe('PesquisarOfertaComponent', () => {
  let component: PesquisarOfertaComponent;
  let fixture: ComponentFixture<PesquisarOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisarOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
