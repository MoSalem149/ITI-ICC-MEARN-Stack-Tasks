import { Component } from '@angular/core';
import { StudentComponent } from './components/student/student';
import { CoursesComponent } from './components/courses/courses';
import { OrderComponent } from './components/order/order';

@Component({
  selector: 'app-root',
  imports: [StudentComponent, CoursesComponent, OrderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }
