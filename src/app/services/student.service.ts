import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private _http: HttpClient) {}

  addStudent(data: Student): Observable<any> {
    return this._http.post('http://localhost:3000/students', data);
  }

  updateStudent(id: number, data: Student): Observable<any> {
    return this._http.put(`http://localhost:3000/students/${id}`, data);
  }

  getStudents(): Observable<Student[]> {
    return this._http.get<Student[]>('http://localhost:3000/students');
  }

  deleteStudents(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/students/${id}`);
  }
}
