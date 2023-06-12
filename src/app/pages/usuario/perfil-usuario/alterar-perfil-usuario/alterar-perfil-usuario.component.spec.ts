import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPerfilUsuarioComponent } from './alterar-perfil-usuario.component';

describe('AlterarPerfilUsuarioComponent', () => {
  let component: AlterarPerfilUsuarioComponent;
  let fixture: ComponentFixture<AlterarPerfilUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarPerfilUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarPerfilUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
