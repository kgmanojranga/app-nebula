import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

import { AddStudentEnrollmentComponent } from './add-student-enrollment/add-student-enrollment.component';
import { StudentEnrollmentComponent } from './student-enrollment.component';
import { StudentEnrollmentRoutingModule } from './student-enrollment-routing.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [AddStudentEnrollmentComponent, StudentEnrollmentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentEnrollmentRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatDividerModule,
  ],
  exports: [StudentEnrollmentComponent],
})
export class StudentEnrollmentModule {}
