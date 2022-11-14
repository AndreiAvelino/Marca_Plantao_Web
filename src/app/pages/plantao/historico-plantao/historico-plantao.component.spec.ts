import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoPlantaoComponent } from './historico-plantao.component';

describe('HistoricoPlantaoComponent', () => {
  let component: HistoricoPlantaoComponent;
  let fixture: ComponentFixture<HistoricoPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoPlantaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
