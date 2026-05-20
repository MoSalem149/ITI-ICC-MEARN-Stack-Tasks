import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { ICourse } from '../../models/course.model';
// import { ICategory } from '../../models/category.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisableAfterClickDirective } from '../../directives/disable-after-click';
import { DiscountPipe } from '../../pipes/discount-pipe';

@Component({
  selector: 'app-courses',
  imports: [NgClass, FormsModule, DisableAfterClickDirective, DiscountPipe, CurrencyPipe],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent implements OnChanges {
  // selectedCatId: number = 0;

  // categories: ICategory[] = [
  //   { id: 1, name: "Programming" },
  //   { id: 2, name: "Design" },
  //   { id: 3, name: "Marketing" },
  //   { id: 4, name: "Business" }
  // ];

  courses: ICourse[] = [
    { id: 1, title: "Angular Fundamentals", instructor: "Ahmed Ali", price: 299, seats: 10, image: "https://picsum.photos/300/160?random=1", catId: 1, category: "Programming" },
    { id: 2, title: "UI/UX Design Basics", instructor: "Sara Hassan", price: 199, seats: 2, image: "https://picsum.photos/300/160?random=2", catId: 2, category: "Design" },
    { id: 3, title: "Digital Marketing", instructor: "Omar Khaled", price: 149, seats: 0, image: "https://picsum.photos/300/160?random=3", catId: 3, category: "Marketing" },
    { id: 4, title: "Business Strategy", instructor: "Mona Tarek", price: 349, seats: 5, image: "https://picsum.photos/300/160?random=4", catId: 4, category: "Business" },
    { id: 5, title: "Python for Beginners", instructor: "Youssef Nader", price: 249, seats: 1, image: "https://picsum.photos/300/160?random=5", catId: 1, category: "Programming" }
  ];

  register(course: ICourse): void {
    if (course.seats > 0) {
      course.seats--;
      if (!this.registeredCourses.find(c => c.id === course.id)) {
        this.registeredCourses.push(course);
      }
    }
    this.calculateTotal();
  }

  @Input('sentCatId') receivedCatId: number = 0;
  @Output() onTotalPriceChanged = new EventEmitter<number>();

  discountValue: number = 20;
  filteredCourses: ICourse[] = this.courses;
  registeredCourses: ICourse[] = [];

  ngOnChanges(): void {
    this.filterCourses();
  }

  filterCourses(): void {
    if (this.receivedCatId === 0) {
      this.filteredCourses = this.courses;
    } else {
      this.filteredCourses = this.courses.filter(c => c.catId === this.receivedCatId);
    }
  }

  calculateTotal(): void {
    const total = this.registeredCourses.reduce((sum, c) => sum + (c.price - (c.price * this.discountValue / 100)), 0);
    this.onTotalPriceChanged.emit(total);
  }
}
