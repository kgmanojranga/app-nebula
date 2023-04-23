import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { Program } from 'src/app/model/program';
import { Student } from 'src/app/model/student';
import { StudentEnrollment } from 'src/app/model/student-enrollment';
import { ProgramService } from 'src/app/services/program.service';
import { StudentEnrollmentService } from 'src/app/services/student-enrollment.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student-enrollment',
  templateUrl: './add-student-enrollment.component.html',
  styleUrls: ['./add-student-enrollment.component.scss'],
})
export class AddStudentEnrollmentComponent implements OnInit {
  students: Student[] = [];
  programs: Program[] = [];

  studentEnrollmentForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _studentEnrollmentService: StudentEnrollmentService,
    private _dialogRef: MatDialogRef<AddStudentEnrollmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: StudentEnrollment,
    private _coreService: CoreService,
    private _studentService: StudentService,
    private _programService: ProgramService
  ) {
    this.studentEnrollmentForm = this._fb.group({
      student_id: ['', Validators.required],
      program_id: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.studentEnrollmentForm.patchValue(this.data);
    this.getStudents();
    this.getPrograms();
  }

  onSubmit() {
    if (this.studentEnrollmentForm.valid) {
      this._studentEnrollmentService
        .addStudentEnrollment(this.studentEnrollmentForm.value)
        .subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Student Enrolled successfully!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
    }
  }

  getStudents() {
    this._studentService.getStudents().subscribe({
      next: (res: Student[]) => {
        this.students = res;
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }

  getPrograms() {
    this._programService.getPrograms().subscribe({
      next: (res: Program[]) => {
        this.programs = res;
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
}
