import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarPlantaoComponent } from './avaliar-plantao.component';

describe('AvaliarPlantaoComponent', () => {
  let component: AvaliarPlantaoComponent;
  let fixture: ComponentFixture<AvaliarPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliarPlantaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
