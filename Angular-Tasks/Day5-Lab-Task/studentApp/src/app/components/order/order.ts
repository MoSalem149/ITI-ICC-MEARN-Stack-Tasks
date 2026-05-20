import { Component, inject, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../../models/category.model';
import { CoursesComponent } from '../courses/courses';
import { CurrencyPipe } from '@angular/common';
import { CategoriesService } from '../../services/categories.service';
import { OrderStatusService } from '../../services/order-status.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order',
  imports: [FormsModule, CoursesComponent, CurrencyPipe],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class OrderComponent implements OnDestroy {
  private categoriesService = inject(CategoriesService);
  private orderStatusService = inject(OrderStatusService);

  selectedCatId: number = 0;
  totalPrice: number = 0;
  categories: ICategory[] = this.categoriesService.getAllCategories();

  // order status observable
  currentStatus: { label: string; color: string } | null = null;
  statusComplete: boolean = false;
  private statusSubscription: Subscription | null = null;

  setTotalPrice(receivedPrice: number): void {
    this.totalPrice = receivedPrice;
  }

  trackOrder(): void {
    this.currentStatus = null;
    this.statusComplete = false;

    this.statusSubscription = this.orderStatusService.getOrderStatus().subscribe({
      next: (status) => {
        this.currentStatus = status;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.statusComplete = true;
      }
    });
  }

  ngOnDestroy(): void {
    this.statusSubscription?.unsubscribe();
  }
}
