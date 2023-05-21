import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicializarPlantaoComponent } from './inicializar-plantao.component';

describe('InicializarPlantaoComponent', () => {
  let component: InicializarPlantaoComponent;
  let fixture: ComponentFixture<InicializarPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicializarPlantaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicializarPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
