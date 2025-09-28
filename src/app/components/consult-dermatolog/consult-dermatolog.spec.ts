import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultDermatolog } from './consult-dermatolog';

describe('ConsultDermatolog', () => {
  let component: ConsultDermatolog;
  let fixture: ComponentFixture<ConsultDermatolog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultDermatolog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultDermatolog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
