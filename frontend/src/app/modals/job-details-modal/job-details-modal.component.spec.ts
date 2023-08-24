import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailsModalComponent } from './job-details-modal.component';

describe('JobDetailsModalComponent', () => {
  let component: JobDetailsModalComponent;
  let fixture: ComponentFixture<JobDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobDetailsModalComponent]
    });
    fixture = TestBed.createComponent(JobDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
