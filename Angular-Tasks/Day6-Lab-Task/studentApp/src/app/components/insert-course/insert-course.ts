import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { CoursesService } from '../../services/courses.service';
import { ICategory } from '../../models/category.model';
import { ICourse } from '../../models/course.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-insert-course',
  imports: [FormsModule],
  templateUrl: './insert-course.html',
  styleUrl: './insert-course.css',
})
export class InsertCourseComponent implements OnInit, OnDestroy {
  private categoriesService = inject(CategoriesService);
  private coursesService = inject(CoursesService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  categories = signal<ICategory[]>([]);
  course: ICourse = {} as ICourse;
  courseId: string | null = null;
  successMessage: string = '';

  private categoriesSub: Subscription | null = null;
  private courseSub: Subscription | null = null;
  private submitSub: Subscription | null = null;

  ngOnInit(): void {
    this.courseId = this.activatedRoute.snapshot.params['id'] ?? null;

    this.categoriesSub = this.categoriesService.getAllCategories().subscribe((res) => {
      this.categories.set(res);
    });

    if (this.courseId) {
      this.courseSub = this.coursesService.getCourseByID(this.courseId).subscribe((res) => {
        this.course = res;
      });
    }
  }

  onSubmit(): void {
    if (this.courseId) {
      this.submitSub = this.coursesService.updateCourse(this.courseId, this.course).subscribe({
        next: () => {
          this.successMessage = 'Course updated successfully!';
          setTimeout(() => this.router.navigate(['/courses']), 1000);
        },
        error: (err) => console.error(err)
      });
    } else {
      this.submitSub = this.coursesService.addCourse(this.course).subscribe({
        next: () => {
          this.successMessage = 'Course added successfully!';
          setTimeout(() => this.router.navigate(['/courses']), 1000);
        },
        error: (err) => console.error(err)
      });
    }
  }

  ngOnDestroy(): void {
    this.categoriesSub?.unsubscribe();
    this.courseSub?.unsubscribe();
    this.submitSub?.unsubscribe();
  }
}
