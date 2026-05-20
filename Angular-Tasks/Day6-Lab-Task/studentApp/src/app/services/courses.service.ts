import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from '../models/course.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  apiUrl = `${environment.baseUrl}/courses`;
  httpClient = inject(HttpClient);

  getAllCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.apiUrl);
  }

  getCoursesByCategoryID(catID: string): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(`${this.apiUrl}?catId=${catID}`);
  }

  getCourseByID(cID: string): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.apiUrl}/${cID}`);
  }

  addCourse(course: ICourse): Observable<ICourse> {
    return this.httpClient.post<ICourse>(this.apiUrl, JSON.stringify(course), {
      headers: { 'content-type': 'application/json' }
    });
  }

  updateCourse(courseId: string, course: ICourse): Observable<ICourse> {
    return this.httpClient.patch<ICourse>(`${this.apiUrl}/${courseId}`, JSON.stringify(course), {
      headers: { 'content-type': 'application/json' }
    });
  }

  deleteCourse(id: string): Observable<ICourse> {
    return this.httpClient.delete<ICourse>(`${this.apiUrl}/${id}`);
  }
}
