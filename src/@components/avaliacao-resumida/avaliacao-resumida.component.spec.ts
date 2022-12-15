import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoResumidaComponent } from './avaliacao-resumida.component';

describe('AvaliacaoResumidaComponent', () => {
  let component: AvaliacaoResumidaComponent;
  let fixture: ComponentFixture<AvaliacaoResumidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoResumidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoResumidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
