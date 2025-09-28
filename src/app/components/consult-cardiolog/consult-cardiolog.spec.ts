import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultCardiolog } from './consult-cardiolog';

describe('ConsultCardiolog', () => {
  let component: ConsultCardiolog;
  let fixture: ComponentFixture<ConsultCardiolog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultCardiolog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultCardiolog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
