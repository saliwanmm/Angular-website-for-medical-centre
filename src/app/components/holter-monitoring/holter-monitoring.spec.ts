import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolterMonitoring } from './holter-monitoring';

describe('HolterMonitoring', () => {
  let component: HolterMonitoring;
  let fixture: ComponentFixture<HolterMonitoring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolterMonitoring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolterMonitoring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
