import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingorderComponent } from './trackingorder.component';

describe('TrackingorderComponent', () => {
  let component: TrackingorderComponent;
  let fixture: ComponentFixture<TrackingorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackingorderComponent]
    });
    fixture = TestBed.createComponent(TrackingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
