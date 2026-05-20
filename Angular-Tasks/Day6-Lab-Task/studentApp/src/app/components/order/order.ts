import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
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
export class OrderComponent implements OnInit, OnDestroy {
  private categoriesService = inject(CategoriesService);
  private orderStatusService = inject(OrderStatusService);

  selectedCatId: number = 0;
  totalPrice: number = 0;
  categories = signal<ICategory[]>([]);

  currentStatus: { label: string; color: string } | null = null;
  statusComplete: boolean = false;

  private categoriesSub: Subscription | null = null;
  private statusSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.categoriesSub = this.categoriesService.getAllCategories().subscribe((res) => {
      this.categories.set(res);
    });
  }

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
    this.categoriesSub?.unsubscribe();
    this.statusSubscription?.unsubscribe();
  }
}
