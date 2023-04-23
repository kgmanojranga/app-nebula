import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { Program } from 'src/app/model/program';
import { ProgramService } from 'src/app/services/program.service';

@Component({
  selector: 'app-add-program',
  templateUrl: './add-program.component.html',
  styleUrls: ['./add-program.component.scss'],
})
export class AddProgramComponent implements OnInit {
  programForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _programService: ProgramService,
    private _dialogRef: MatDialogRef<AddProgramComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Program,
    private _coreService: CoreService
  ) {
    this.programForm = this._fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
      cost: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.programForm.patchValue(this.data);
  }

  onSubmit() {
    if (this.programForm.valid) {
      if (this.data) {
        this._programService
          .updateProgram(this.data.id, this.programForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Program details updated!');
              this._dialogRef.close(true);
            },

            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        // console.log(this.programForm);
        this._programService.addProgram(this.programForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Program added successfully!');
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
