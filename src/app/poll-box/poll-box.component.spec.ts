import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollBoxComponent } from './poll-box.component';

describe('PollBoxComponent', () => {
  let component: PollBoxComponent;
  let fixture: ComponentFixture<PollBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
