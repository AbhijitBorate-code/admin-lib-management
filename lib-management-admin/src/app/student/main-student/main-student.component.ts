import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../../service/student.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogModuleComponent } from '../../dialog-module/dialog-module.component';
import { MatDialogEditComponent } from '../../mat-dialog-edit/mat-dialog-edit.component';
import { MatDailogAddStudentComponent } from '../../mat-dailog-add-student/mat-dailog-add-student.component';

export interface DialogData {
  books: any[];
}

@Component({
  selector: 'app-main-student',
  templateUrl: './main-student.component.html',
  styleUrls: ['./main-student.component.scss'],
})
export class MainStudentComponent implements AfterViewInit, OnInit {
  constructor(
    private studentService: StudentService,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  studentData: any[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'year',
    'branch',
    'Action',
    'edit',
  ];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  isdialog: boolean = false;
  books: any = [];
  editStudentData: any;

  ngOnInit(): void {
    this.refreshStudentData();
  }

  bookDetails(rollNumber: any): void {
    this.studentService
      .getstudentDataByID(rollNumber)
      .subscribe((data: any) => {
        console.log(data);
        const books = data?.books || [];

        if (books.length > 0) {
          this.openDialog('500ms', '500ms', books);
        }
      });
  }

  addStudent() {
    this.openaddStudent('500ms', '500ms');
  }

  openaddStudent(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(MatDailogAddStudentComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    this.studentData = [];
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog closed with:', result);
      if (result === 'refresh') {
        this.refreshStudentData(); // Refresh the student data when dialog signals refresh
      }
    });
  }

  refreshStudentData() {
    this.studentService.getStudentData().subscribe((data: any[]) => {
      this.studentData = data;
      this.dataSource.data = this.studentData;
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    books: any
  ): void {
    this.isdialog = true;
    books = [{ detailsBooks: true }, books];
    this.books = books;
    const dialogRef = this.dialog.open(DialogModuleComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { books },
    });

    dialogRef.afterClosed().subscribe((response: any) => {
      console.log(response);
      if (response == 'refresh') {
        this.refreshStudentData();
      }
    });
  }

  editStudent(id: any) {
    let editStudent: any;
    this.studentService.getstudentDataByID(id).subscribe((res: any) => {
      const editStudentData = res;

      if (editStudentData) {
        this.editopenDialog('500ms', '500ms', editStudentData);
      }
    });
  }

  editopenDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    res: any
  ): void {
    this.isdialog = true;
    res = [{ editstudent: true }, res];

    const dialogRef = this.dialog.open(MatDialogEditComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { res },
    });

    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
      if (res == 'refresh') {
        this.refreshStudentData();
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator; // Assign the paginator to dataSource
    }
  }
}
