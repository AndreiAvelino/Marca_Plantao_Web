import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarOfertaComponent } from './configurar-oferta.component';

describe('ConfigurarOfertaComponent', () => {
  let component: ConfigurarOfertaComponent;
  let fixture: ComponentFixture<ConfigurarOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurarOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
