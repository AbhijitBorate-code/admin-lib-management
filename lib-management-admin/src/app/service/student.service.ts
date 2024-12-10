import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http : HttpClient) { }




    getStudentData(): Observable<any>{
        return this.http.get('http://localhost:3000/students')
    }

    getstudentDataByID(rollNumber: number): Observable<any>{
      return this.http.get(`http://localhost:3000/students/${rollNumber}`)
    }

    updateStudentData(studentData: any): Observable<any>{
      console.log (`updateStudentData`, studentData)
      let url = `http://localhost:3000/students/${studentData.id}`
      console.log (`updateStudentData`, url)
      return this.http.put(`http://localhost:3000/students/${studentData.id}`, studentData);
     }
    

     addStudent(data : any): Observable<any>{
      return this.http.post('http://localhost:3000/students', data)
     }

}
