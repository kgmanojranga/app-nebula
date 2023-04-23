import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddStudentComponent } from './add-student/add-student.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from 'src/app/services/student.service';
import { CoreService } from 'src/app/core/core.service';
import { ConfirmationDialogComponent } from 'src/app/common/confirmation-dialog/confirmation-dialog.component';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'contact', 'action'];
  dataSource!: MatTableDataSource<Student>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _studentService: StudentService,
    private _coreService: CoreService
  ) {}
  ngOnInit(): void {
    this.getStudents();
  }

  openAddStudentForm() {
    const dialogRef = this._dialog.open(AddStudentComponent);
    this.loadStudentData(dialogRef);
  }

  getStudents() {
    this._studentService.getStudents().subscribe({
      next: (res: Student[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },

      error: (err: any) => {
        console.error(err);
      },
    });
  }

  filterByStudentId(event: Event) {
    this.dataSource.filterPredicate = (data, filter): boolean => {
      return data.id == Number(filter);
    };

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteStudent(id: number) {
    const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      data: {
        message: 'Are you sure that you want to delete?',
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this._studentService.deleteStudents(id).subscribe({
            next: (res: any) => {
              this._coreService.openSnackBar('Student Deleted');
              this.getStudents();
            },

            error: (err: any) => {
              console.error(err);
            },
          });
        }
      },
    });
  }

  openEditStudentForm(data: Student) {
    const dialogRef = this._dialog.open(AddStudentComponent, {
      data,
    });

    this.loadStudentData(dialogRef);
  }

  private loadStudentData(dialogRef: MatDialogRef<AddStudentComponent>) {
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.getStudents();
        }
      },
    });
  }
}
