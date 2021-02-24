import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTrialsViewComponent } from './past-trials-view.component';

describe('PastTrialsViewComponent', () => {
  let component: PastTrialsViewComponent;
  let fixture: ComponentFixture<PastTrialsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastTrialsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTrialsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
