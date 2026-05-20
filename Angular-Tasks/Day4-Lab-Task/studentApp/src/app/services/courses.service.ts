import { Injectable } from '@angular/core';
import { ICourse } from '../models/course.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: ICourse[] = [
    { id: 1, title: "Angular Fundamentals", instructor: "Ahmed Ali", price: 299, seats: 10, image: "https://picsum.photos/300/160?random=1", catId: 1, category: "Programming" },
    { id: 2, title: "UI/UX Design Basics", instructor: "Sara Hassan", price: 199, seats: 2, image: "https://picsum.photos/300/160?random=2", catId: 2, category: "Design" },
    { id: 3, title: "Digital Marketing", instructor: "Omar Khaled", price: 149, seats: 0, image: "https://picsum.photos/300/160?random=3", catId: 3, category: "Marketing" },
    { id: 4, title: "Business Strategy", instructor: "Mona Tarek", price: 349, seats: 5, image: "https://picsum.photos/300/160?random=4", catId: 4, category: "Business" },
    { id: 5, title: "Python for Beginners", instructor: "Youssef Nader", price: 249, seats: 1, image: "https://picsum.photos/300/160?random=5", catId: 1, category: "Programming" }
  ];

  getCoursesByCatId(catId: number): ICourse[] {
    if (catId === 0) return this.courses;
    return this.courses.filter(c => c.catId === catId);
  }

  getCourseById(id: number): ICourse | null {
    return this.courses.find(c => c.id === id) ?? null;
  }

  getAllCourses(): ICourse[] {
    return this.courses;
  }
}
