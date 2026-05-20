import { Component, effect, EventEmitter, inject, Input, OnDestroy, OnInit, Output, signal } from '@angular/core';
import { ICourse } from '../../models/course.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { DisableAfterClickDirective } from '../../directives/disable-after-click';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { CoursesService } from '../../services/courses.service';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  imports: [NgClass, DisableAfterClickDirective, DiscountPipe, CurrencyPipe, RouterLink],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent implements OnInit, OnDestroy {
  private coursesService = inject(CoursesService);
  private router = inject(Router);

  @Input('sentCatId') receivedCatId: number = 0;
  @Output() onTotalPriceChanged = new EventEmitter<number>();

  discountValue: number = 20;
  courses = signal<ICourse[]>([]);
  filteredCourses = signal<ICourse[]>([]);
  registeredCourses: ICourse[] = [];
  successMessage: string = '';

  private allCoursesSub: Subscription | null = null;
  private filterSub: Subscription | null = null;
  private deleteSub: Subscription | null = null;

  ngOnInit(): void {
    this.allCoursesSub = this.coursesService.getAllCourses().subscribe({
      next: (res) => {
        this.courses.set(res);
        this.filteredCourses.set(res);
      }
    });
  }

  ngOnChanges(): void {
    if (this.receivedCatId === 0) {
      this.filteredCourses.set(this.courses());
      return;
    }
    this.filterSub?.unsubscribe();
    this.filterSub = this.coursesService.getCoursesByCategoryID(String(this.receivedCatId)).subscribe((res) => {
      this.filteredCourses.set(res);
    });
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

  editCourse(id: number): void {
    this.router.navigate(['/insertcourse', id]);
  }

  deleteCourse(course: ICourse): void {
    const confirmed = confirm(`Are you sure you want to delete "${course.title}"?`);
    if (!confirmed) return;

    this.deleteSub = this.coursesService.deleteCourse(String(course.id)).subscribe({
      next: () => {
        this.courses.set(this.courses().filter(c => c.id !== course.id));
        this.filteredCourses.set(this.filteredCourses().filter(c => c.id !== course.id));
        this.successMessage = `"${course.title}" deleted successfully.`;
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => console.error(err)
    });
  }

  ngOnDestroy(): void {
    this.allCoursesSub?.unsubscribe();
    this.filterSub?.unsubscribe();
    this.deleteSub?.unsubscribe();
  }
}
