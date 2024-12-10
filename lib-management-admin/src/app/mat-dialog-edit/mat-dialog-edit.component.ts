import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from '../service/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mat-dialog-edit',
  templateUrl: './mat-dialog-edit.component.html',
  styleUrls: ['./mat-dialog-edit.component.scss']  // Corrected 'styleUrl' to 'styleUrls'
})
export class MatDialogEditComponent implements OnInit {

  student: any;

  studentForm! : FormGroup;

  constructor(
    private fb : FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentService,
    public dialogRef: MatDialogRef<MatDialogEditComponent>
    
  ) {}

  ngOnInit(): void {
    this.studentForm =  this.fb.group({
      name : [this.data.res[1].name],
      id : [this.data.res[1].id],
      branch : [this.data.res[1].branch],
      year : [this.data.res[1].year],
      books : [this.data.res[1].books]
    })
  }

  submit(): void {
    if (this.studentForm.valid) {
      const studentData = this.studentForm.value;
      console.log('Form Data:', studentData);
  
      this.studentService.updateStudentData(studentData).subscribe({
        next: (response) => {
          console.log('Student data updated successfully:', response);
          this.dialogRef.close('refresh'); 
        },
        error: (error) => {
          console.error('Error updating student data:', error);
        },
      });
    } else {
      console.error('Form is invalid. Please check the input fields.');
    }
  }
  

  cancel()
  {
    this.dialogRef.close('refresh');
  }
}
