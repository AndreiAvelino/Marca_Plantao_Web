import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilClinicaComponent } from './perfil-clinica.component';

describe('PerfilClinicaComponent', () => {
  let component: PerfilClinicaComponent;
  let fixture: ComponentFixture<PerfilClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilClinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
