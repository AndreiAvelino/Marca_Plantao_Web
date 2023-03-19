import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesPlantaoComponent } from './opcoes-plantao.component';

describe('OpcoesPlantaoComponent', () => {
  let component: OpcoesPlantaoComponent;
  let fixture: ComponentFixture<OpcoesPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcoesPlantaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcoesPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
