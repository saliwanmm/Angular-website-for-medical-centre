import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasoundExam } from './ultrasound-exam';

describe('UltrasoundExam', () => {
  let component: UltrasoundExam;
  let fixture: ComponentFixture<UltrasoundExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UltrasoundExam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltrasoundExam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
