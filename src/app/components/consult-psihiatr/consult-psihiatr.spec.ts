import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPsihiatr } from './consult-psihiatr';

describe('ConsultPsihiatr', () => {
  let component: ConsultPsihiatr;
  let fixture: ComponentFixture<ConsultPsihiatr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultPsihiatr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultPsihiatr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
