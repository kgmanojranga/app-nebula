import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentEnrollment } from '../model/student-enrollment';

@Injectable({
  providedIn: 'root',
})
export class StudentEnrollmentService {
  constructor(private _http: HttpClient) {}

  addStudentEnrollment(data: StudentEnrollment): Observable<any> {
    return this._http.post('http://localhost:3000/student-enrollments', data);
  }
}
