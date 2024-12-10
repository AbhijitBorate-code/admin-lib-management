import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BooksService {



  

  constructor(public http : HttpClient,
  ) { }



  getBooksData() : Observable<any> {
    return this.http.get('http://localhost:3000/books')
  }
  


  getUpdatedBookDetails(books : any) : Observable<any> {
    return this.http.put(`http://localhost:3000/books/${books.id}`,books )
  }


}