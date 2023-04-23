import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentEnrollmentComponent } from './add-student-enrollment/add-student-enrollment.component';

@Component({
  selector: 'app-student-enrollment',
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.scss'],
})
export class StudentEnrollmentComponent implements OnInit {
  constructor(private _dialog: MatDialog) {}
  ngOnInit(): void {}

  openAddStudentEnrollmentForm() {
    const dialogRef = this._dialog.open(AddStudentEnrollmentComponent);
  }
}
