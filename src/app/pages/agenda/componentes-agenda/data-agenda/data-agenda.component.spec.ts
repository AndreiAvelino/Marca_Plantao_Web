import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAgendaComponent } from './data-agenda.component';

describe('DataAgendaComponent', () => {
  let component: DataAgendaComponent;
  let fixture: ComponentFixture<DataAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
