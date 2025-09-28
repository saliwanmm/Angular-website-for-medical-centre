import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkgExam } from './ekg-exam';

describe('EkgExam', () => {
  let component: EkgExam;
  let fixture: ComponentFixture<EkgExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EkgExam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkgExam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
