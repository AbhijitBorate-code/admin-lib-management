// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module'; // Import StudentModule
import {BooksModule} from './books/books.module';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogModuleComponent } from './dialog-module/dialog-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogEditComponent } from './mat-dialog-edit/mat-dialog-edit.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDailogAddStudentComponent } from './mat-dailog-add-student/mat-dailog-add-student.component';
import { DialogAssgineBooksComponent } from './dialog-assgine-books/dialog-assgine-books.component';

const routes: Routes = [
  {
    path :"dasboard",
    component: DashbaordComponent
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path : 'books',
    loadChildren: () =>import('./books/books.module').then((m) => m.BooksModule)
  },

];

@NgModule({
  declarations: [AppComponent, DashbaordComponent, DialogModuleComponent, MatDialogEditComponent, MatDailogAddStudentComponent, DialogAssgineBooksComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule,
    StudentModule, // Import the module containing MainStudentComponent
    RouterModule.forRoot(routes), // Configure routes
    BooksModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[DialogModuleComponent]
})
export class AppModule {}
