import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlantaoComponent } from './info-plantao.component';

describe('InfoPlantaoComponent', () => {
  let component: InfoPlantaoComponent;
  let fixture: ComponentFixture<InfoPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPlantaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
