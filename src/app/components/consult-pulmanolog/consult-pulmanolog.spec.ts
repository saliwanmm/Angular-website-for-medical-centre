import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPulmanolog } from './consult-pulmanolog';

describe('ConsultPulmanolog', () => {
  let component: ConsultPulmanolog;
  let fixture: ComponentFixture<ConsultPulmanolog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultPulmanolog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultPulmanolog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
