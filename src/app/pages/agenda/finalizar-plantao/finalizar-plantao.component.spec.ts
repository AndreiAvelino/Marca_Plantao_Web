import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarPlantaoComponent } from './finalizar-plantao.component';

describe('FinalizarPlantaoComponent', () => {
  let component: FinalizarPlantaoComponent;
  let fixture: ComponentFixture<FinalizarPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizarPlantaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizarPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
