import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAvaliacaoComponent } from './input-avaliacao.component';

describe('InputAvaliacaoComponent', () => {
  let component: InputAvaliacaoComponent;
  let fixture: ComponentFixture<InputAvaliacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAvaliacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
