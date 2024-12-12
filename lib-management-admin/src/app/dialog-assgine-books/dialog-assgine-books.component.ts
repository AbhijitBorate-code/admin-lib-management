import { Component, Inject, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogEditComponent } from '../mat-dialog-edit/mat-dialog-edit.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BooksService } from '../service/books.service';


@Component({
  selector: 'app-dialog-assgine-books',
  templateUrl: './dialog-assgine-books.component.html',
  styleUrl: './dialog-assgine-books.component.scss'
})
export class DialogAssgineBooksComponent implements OnInit {
  studentName : any


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentService,
    private bookService : BooksService,
    public dialogRef: MatDialogRef<MatDialogEditComponent>,
    
  ) {}


  ngOnInit(): void {
    console.log(this.data.e)
    this.getStudentdetails()
  }



  getStudentdetails() {
    this.studentService.getStudentData().subscribe((data: any) => {
      this.studentName = data.map((student: any) => ({
        id: student.id,
        name: student.name,
      }));
    });
  }

  onStudentSelect(e: any)
  {
    this.data.e['assigned'] = this.data.e['assigned'] = true;
    console.log("onStudentSelect);", e.value.id);
    this.studentService.getstudentDataByID(e.value.id).subscribe((res: any)=>{

      res.books.push(this.data.e)
      console.log(res)
      this.studentService.updateStudentData(res).subscribe((response: any)=>{
        console.log('Student Book Assgined successfully:');
      })

    })
   
    this.bookService.getUpdatedBookDetails(this.data.e).subscribe((data: any)=>{
      console.log('Updated Book:');
    })
    this.dialogRef.close('refresh');

  }
  

}
