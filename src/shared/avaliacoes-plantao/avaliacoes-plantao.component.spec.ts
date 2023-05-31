import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacoesPlantaoComponent } from './avaliacoes-plantao.component';

describe('AvaliacoesPlantaoComponent', () => {
  let component: AvaliacoesPlantaoComponent;
  let fixture: ComponentFixture<AvaliacoesPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacoesPlantaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacoesPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
