import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StudentService } from '../service/student.service';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrl: './dashbaord.component.scss'
})
export class DashbaordComponent  implements OnInit {


  constructor(private studentService: StudentService, private bookService :  BooksService) { }

  studentdetails: any;
  bookDetails : any;

  
  ngOnInit(): void {

  this.getStudentDetails()
  this.getStduentDetails();
      
  }


  getStudentDetails()
  {
    this.studentService.getStudentData().subscribe((data: any) => {
      this.studentdetails = data;
    })
  }


  getStduentDetails()
  {
    this.bookService.getBooksData().subscribe((data: any) => {
      this.bookDetails = data;
    });
  }


}
