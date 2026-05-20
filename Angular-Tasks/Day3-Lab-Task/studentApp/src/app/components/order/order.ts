import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/category.model';
import { CoursesComponent } from '../courses/courses';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [FormsModule, CoursesComponent, CurrencyPipe],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class OrderComponent {
  selectedCatId: number = 0;
  totalPrice: number = 0;

  categories: ICategory[] = [
    { id: 1, name: "Programming" },
    { id: 2, name: "Design" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Business" }
  ];

  setTotalPrice(receivedPrice: number): void {
    this.totalPrice = receivedPrice;
  }
}
