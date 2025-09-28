import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodTest } from './blood-test';

describe('BloodTest', () => {
  let component: BloodTest;
  let fixture: ComponentFixture<BloodTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
