import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IridodiagnosticExam } from './iridodiagnostic-exam';

describe('IridodiagnosticExam', () => {
  let component: IridodiagnosticExam;
  let fixture: ComponentFixture<IridodiagnosticExam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IridodiagnosticExam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IridodiagnosticExam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
