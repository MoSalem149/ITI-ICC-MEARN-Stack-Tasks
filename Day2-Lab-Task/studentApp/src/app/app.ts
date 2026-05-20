import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './components/student/student';
import { Courses } from './components/courses/courses';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Student, Courses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentApp');
}
