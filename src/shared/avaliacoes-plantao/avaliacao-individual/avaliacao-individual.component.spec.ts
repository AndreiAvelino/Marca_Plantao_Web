import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoIndividualComponent } from './avaliacao-individual.component';

describe('AvaliacaoIndividualComponent', () => {
  let component: AvaliacaoIndividualComponent;
  let fixture: ComponentFixture<AvaliacaoIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
