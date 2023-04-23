import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Program } from '../model/program';

@Injectable({
  providedIn: 'root',
})
export class ProgramService {
  constructor(private _http: HttpClient) {}

  addProgram(data: Program): Observable<any> {
    return this._http.post('http://localhost:3000/programs', data);
  }

  updateProgram(id: number, data: Program): Observable<any> {
    return this._http.put(`http://localhost:3000/programs/${id}`, data);
  }

  getPrograms(): Observable<Program[]> {
    return this._http.get<Program[]>('http://localhost:3000/programs');
  }

  deletePrograms(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/programs/${id}`);
  }
}
