import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  studentForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _studentService: StudentService,
    private _dialogRef: MatDialogRef<AddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private _coreService: CoreService
  ) {
    this.studentForm = this._fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.studentForm.patchValue(this.data);
  }

  onSubmit() {
    if (this.studentForm.valid) {
      if (this.data) {
        this._studentService
          .updateStudent(this.data.id, this.studentForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Student details updated!');
              this._dialogRef.close(true);
            },

            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        // console.log(this.studentForm);
        this._studentService.addStudent(this.studentForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Student added successfully!');
            this._dialogRef.close(true);
          },

          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
