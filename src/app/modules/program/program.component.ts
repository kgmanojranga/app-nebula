import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProgramComponent } from './add-program/add-program.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProgramService } from 'src/app/services/program.service';
import { CoreService } from 'src/app/core/core.service';
import { ConfirmationDialogComponent } from 'src/app/common/confirmation-dialog/confirmation-dialog.component';
import { Program } from 'src/app/model/program';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'duration', 'cost', 'action'];
  dataSource!: MatTableDataSource<Program>; //Need to add program interface instead of any

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _programService: ProgramService,
    private _coreService: CoreService
  ) {}
  ngOnInit(): void {
    this.getPrograms();
  }

  openAddProgramForm() {
    const dialogRef = this._dialog.open(AddProgramComponent);
    this.loadProgramData(dialogRef);
  }

  getPrograms() {
    this._programService.getPrograms().subscribe({
      next: (res: Program[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },

      error: (err: any) => {
        console.error(err);
      },
    });
  }

  filterByProgramId(event: Event) {
    this.dataSource.filterPredicate = (data, filter): boolean => {
      return data.id == Number(filter);
    };

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProgram(id: number) {
    const dialogRef = this._dialog.open(ConfirmationDialogComponent, {
      disableClose: true,
      data: {
        message: 'Are you sure that you want to delete?',
      },
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this._programService.deletePrograms(id).subscribe({
            next: (res: any) => {
              this._coreService.openSnackBar('Program Deleted');
              this.getPrograms();
            },

            error: (err: any) => {
              console.error(err);
            },
          });
        }
      },
    });
  }

  openEditProgramForm(data: Program) {
    const dialogRef = this._dialog.open(AddProgramComponent, {
      data,
    });

    this.loadProgramData(dialogRef);
  }

  private loadProgramData(dialogRef: MatDialogRef<AddProgramComponent>) {
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.getPrograms();
        }
      },
    });
  }
}
