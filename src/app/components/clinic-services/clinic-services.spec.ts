import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicServices } from './clinic-services';

describe('ClinicServices', () => {
  let component: ClinicServices;
  let fixture: ComponentFixture<ClinicServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicServices]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClinicServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
