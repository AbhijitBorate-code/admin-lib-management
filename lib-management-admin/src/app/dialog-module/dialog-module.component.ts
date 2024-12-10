import { Component, Inject, Input, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-module',
  templateUrl: './dialog-module.component.html',
  styleUrl: './dialog-module.component.scss',
})
export class DialogModuleComponent implements OnInit {
  @Input() books: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private studentService: StudentService) {}

  item: any;

  ngOnInit(): void {
    this.item = this.data.books;
    
    console.log(this.item);
  }


}
