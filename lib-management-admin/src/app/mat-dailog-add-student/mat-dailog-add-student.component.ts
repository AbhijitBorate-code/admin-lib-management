import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogEditComponent } from '../mat-dialog-edit/mat-dialog-edit.component';
import { StudentService } from '../service/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MainStudentComponent } from '../student/main-student/main-student.component';

@Component({
  selector: 'app-mat-dailog-add-student',
  templateUrl: './mat-dailog-add-student.component.html',
  styleUrl: './mat-dailog-add-student.component.scss',
})
export class MatDailogAddStudentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentService,
    public dialogRef: MatDialogRef<MatDialogEditComponent>,
    private fb: FormBuilder // Corrected 'styleUrl' to 'styleUrls'
  ) {}


  studentForm!: FormGroup;

  submit() {
    console.log('Submit', this.studentForm.value);

    this.studentForm.valid;
    {
      this.studentService.addStudent(this.studentForm.value).subscribe((response : any) => {
        console.log('Student added successfully:', response);
        this.dialogRef.close('refresh');
      });
      console.error('student');
      
    }
  }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: [null],
      id: [null],
      branch: [null],
      year: [null],
      books: [[]],
    });
  }

  cancel() {
    this.dialogRef.close();

  }
}
