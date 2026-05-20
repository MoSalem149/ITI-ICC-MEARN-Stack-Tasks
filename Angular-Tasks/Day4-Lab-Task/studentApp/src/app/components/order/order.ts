import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/category.model';
import { CoursesComponent } from '../courses/courses';
import { CurrencyPipe } from '@angular/common';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-order',
  imports: [FormsModule, CoursesComponent, CurrencyPipe],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class OrderComponent {
  private categoriesService = inject(CategoriesService);

  selectedCatId: number = 0;
  totalPrice: number = 0;
  categories: ICategory[] = this.categoriesService.getAllCategories();

  setTotalPrice(receivedPrice: number): void {
    this.totalPrice = receivedPrice;
  }
}
