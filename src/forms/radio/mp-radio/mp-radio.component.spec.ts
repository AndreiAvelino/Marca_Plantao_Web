import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPRadioComponent } from './mp-radio.component';

describe('MPRadioComponent', () => {
  let component: MPRadioComponent;
  let fixture: ComponentFixture<MPRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MPRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
