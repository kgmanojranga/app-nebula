import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentEnrollmentComponent } from './add-student-enrollment.component';

describe('AddStudentEnrollmentComponent', () => {
  let component: AddStudentEnrollmentComponent;
  let fixture: ComponentFixture<AddStudentEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStudentEnrollmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddStudentEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
