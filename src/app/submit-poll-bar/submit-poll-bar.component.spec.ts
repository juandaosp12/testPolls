import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitPollBarComponent } from './submit-poll-bar.component';

describe('SubmitPollBarComponent', () => {
  let component: SubmitPollBarComponent;
  let fixture: ComponentFixture<SubmitPollBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitPollBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitPollBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
