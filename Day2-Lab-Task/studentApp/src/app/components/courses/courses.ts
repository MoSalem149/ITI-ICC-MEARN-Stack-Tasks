import { Component } from '@angular/core';
import { ICourse } from '../../models/course.model';
import { ICategory } from '../../models/category.model';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisableAfterClick } from '../../directives/disable-after-click';

@Component({
  selector: 'app-courses',
  imports: [NgClass, FormsModule, DisableAfterClick],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  selectedCatId: number = 0;

  categories: ICategory[] = [
    { id: 1, name: "Programming" },
    { id: 2, name: "Design" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Business" }
  ];

  courses: ICourse[] = [
    { id: 1, title: "Angular Fundamentals", instructor: "Ahmed Ali", price: 299, seats: 10, image: "https://picsum.photos/200?random=1", catId: 1, category: "Programming" },
    { id: 2, title: "UI/UX Design Basics", instructor: "Sara Hassan", price: 199, seats: 2, image: "https://picsum.photos/200?random=2", catId: 2, category: "Design" },
    { id: 3, title: "Digital Marketing", instructor: "Omar Khaled", price: 149, seats: 0, image: "https://picsum.photos/200?random=3", catId: 3, category: "Marketing" },
    { id: 4, title: "Business Strategy", instructor: "Mona Tarek", price: 349, seats: 5, image: "https://picsum.photos/200?random=4", catId: 4, category: "Business" },
    { id: 5, title: "Python for Beginners", instructor: "Youssef Nader", price: 249, seats: 1, image: "https://picsum.photos/200?random=5", catId: 1, category: "Programming" }
  ];

  register(course: ICourse) {
    if (course.seats > 0) {
      course.seats--;
    }
  }
}
