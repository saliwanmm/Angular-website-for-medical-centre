import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultNevrolog } from './consult-nevrolog';

describe('ConsultNevrolog', () => {
  let component: ConsultNevrolog;
  let fixture: ComponentFixture<ConsultNevrolog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultNevrolog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultNevrolog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
