import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from '../../service/books.service';
import { StudentService } from '../../service/student.service';
import { MainStudentComponent } from '../../student/main-student/main-student.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogModuleComponent } from '../../dialog-module/dialog-module.component';
import { MatDialogEditComponent } from '../../mat-dialog-edit/mat-dialog-edit.component';
@Component({
  selector: 'app-main-books',
  templateUrl: './main-books.component.html',
  styleUrl: './main-books.component.scss',
})
export class MainBooksComponent implements AfterViewInit, OnInit {
  books: any = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'author',
    'genre',
    'assigned',
    'action',
  ];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  @ViewChild(MainStudentComponent) MainStudentComponent!: MainStudentComponent;

  constructor(
    public bookService: BooksService,
    private studentService: StudentService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): any {
    this.getBookData();
  }
  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getBookData() {
    this.bookService.getBooksData().subscribe((data: any) => {
      this.books = data;
      this.dataSource.data = this.books;
    });
  }

  viewBookDetails(e: any) {
    this.studentService.getStudentData().subscribe((data: any) => {
      console.log('Student Data:', data);
      if (data) {
        const bookAssignedTo = data.filter((student: any) =>
          student.books?.some((book: any) => book.id == e.id)
        );

        if (bookAssignedTo.length > 0) {
          bookAssignedTo.forEach((student: any) => {
            console.log(`Updating books for student: ${student.name}`);
            student.books = [];
            return student;
          });

          this.studentService
            .updateStudentData(bookAssignedTo[0])
            .subscribe((data: any) => {
              console.log('student updated successfully:');
            });

          data = [e];
          let bookDetails = data.map((res: any) => {
            res.assigned = false;
            return res;
          });

          console.log(bookDetails);
          this.bookService
            .getUpdatedBookDetails(bookDetails[0])
            .subscribe((data: any) => {
              console.log('Updated Book:');
              this.getBookData();
            });
        }
      }
    });
  }

  assignBook() {

    this.openDialogForAssginBook();
  }


  openDialogForAssginBook()
  {
    

  }


  addBook() {}
}
