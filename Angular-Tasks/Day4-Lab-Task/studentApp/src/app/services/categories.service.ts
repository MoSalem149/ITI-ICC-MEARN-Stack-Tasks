import { Injectable } from '@angular/core';
import { ICategory } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private categories: ICategory[] = [
    { id: 1, name: "Programming" },
    { id: 2, name: "Design" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Business" }
  ];

  getAllCategories(): ICategory[] {
    return this.categories;
  }
}
