import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainStudentComponent } from './main-student/main-student.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { StudentService } from '../service/student.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

const routes: Routes = [{ path: 'student', component: MainStudentComponent }];

@NgModule({
  declarations: [MainStudentComponent],
  imports: [CommonModule, MatTableModule, RouterModule.forChild(routes),HttpClientModule,MatButtonModule,MatPaginatorModule],
  providers : [StudentService]
})
export class StudentModule {}
