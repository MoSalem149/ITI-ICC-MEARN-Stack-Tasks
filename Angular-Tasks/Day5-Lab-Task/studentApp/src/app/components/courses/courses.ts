import { Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { ICourse } from '../../models/course.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { DisableAfterClickDirective } from '../../directives/disable-after-click';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [NgClass, DisableAfterClickDirective, DiscountPipe, CurrencyPipe],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent implements OnChanges {
  private coursesService = inject(CoursesService);
  private router = inject(Router);

  @Input('sentCatId') receivedCatId: number = 0;
  @Output() onTotalPriceChanged = new EventEmitter<number>();

  discountValue: number = 20;
  courses: ICourse[] = this.coursesService.getAllCourses();
  filteredCourses: ICourse[] = this.courses;
  registeredCourses: ICourse[] = [];

  ngOnChanges(): void {
    this.filterCourses();
  }

  filterCourses(): void {
    this.filteredCourses = this.coursesService.getCoursesByCatId(this.receivedCatId);
  }

  register(course: ICourse): void {
    if (course.seats > 0) {
      course.seats--;
      if (!this.registeredCourses.find(c => c.id === course.id)) {
        this.registeredCourses.push(course);
      }
      this.calculateTotal();
    }
  }

  calculateTotal(): void {
    const total = this.registeredCourses.reduce((sum, c) =>
      sum + (c.price - (c.price * this.discountValue / 100)), 0);
    this.onTotalPriceChanged.emit(total);
  }

  goToDetails(id: number): void {
    this.router.navigate(['/course', id]);
  }
}
