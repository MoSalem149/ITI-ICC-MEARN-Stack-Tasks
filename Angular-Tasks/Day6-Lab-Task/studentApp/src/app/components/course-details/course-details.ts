import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from '../../models/course.model';
import { CurrencyPipe } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course-details',
  imports: [RouterLink, CurrencyPipe, DiscountPipe],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetailsComponent implements OnInit, OnDestroy {
  private activatedRoute = inject(ActivatedRoute);
  private coursesService = inject(CoursesService);

  course: ICourse | null = null;
  discountValue: number = 20;

  private courseSub: Subscription | null = null;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.courseSub = this.coursesService.getCourseByID(id).subscribe((res) => {
      this.course = res;
    });
  }

  ngOnDestroy(): void {
    this.courseSub?.unsubscribe();
  }
}
