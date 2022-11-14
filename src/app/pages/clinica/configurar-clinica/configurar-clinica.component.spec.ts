import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarClinicaComponent } from './configurar-clinica.component';

describe('ConfigurarClinicaComponent', () => {
  let component: ConfigurarClinicaComponent;
  let fixture: ComponentFixture<ConfigurarClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurarClinicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurarClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
