import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBooksComponent } from './main-books/main-books.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: 'books',
    component: MainBooksComponent,
  }
]

@NgModule({
  declarations: [
    MainBooksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule
  ]
})
export class BooksModule { }
