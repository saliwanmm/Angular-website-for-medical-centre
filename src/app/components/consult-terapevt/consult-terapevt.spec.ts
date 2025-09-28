import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultTerapevt } from './consult-terapevt';

describe('ConsultTerapevt', () => {
  let component: ConsultTerapevt;
  let fixture: ComponentFixture<ConsultTerapevt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultTerapevt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultTerapevt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
