import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from '../../models/course.model';
import { CurrencyPipe } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount-pipe';

@Component({
  selector: 'app-course-details',
  imports: [RouterLink, CurrencyPipe, DiscountPipe],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
})
export class CourseDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private coursesService = inject(CoursesService);

  course: ICourse | null = null;
  discountValue: number = 20;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.course = this.coursesService.getCourseById(+id);
  }
}
