import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarUsuarioAdministradorComponent } from './criar-usuario-administrador.component';

describe('CriarUsuarioAdministradorComponent', () => {
  let component: CriarUsuarioAdministradorComponent;
  let fixture: ComponentFixture<CriarUsuarioAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarUsuarioAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarUsuarioAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
