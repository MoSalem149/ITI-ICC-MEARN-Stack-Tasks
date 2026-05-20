import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiUrl = `${environment.baseUrl}/categories`;
  httpClient = inject(HttpClient);

  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.apiUrl);
  }
}
