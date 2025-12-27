import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

private apiUrl = 'http://localhost:3000/api/predict';

  private resultSource = new BehaviorSubject<number | null>(null);
   result$ = this.resultSource.asObservable();

  constructor(private http: HttpClient) {}

  predictMarks(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  getAllStudents(): Observable<any> {
  return this.http.get('http://localhost:3000/api/students');
}

sendHistory(email: string) {
  return this.http.post('http://localhost:3000/api/send-history', { email });
}


}
