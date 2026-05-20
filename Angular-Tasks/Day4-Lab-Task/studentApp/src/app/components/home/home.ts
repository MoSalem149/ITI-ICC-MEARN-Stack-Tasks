import { Component } from '@angular/core';
import { StudentComponent } from '../student/student';

@Component({
  selector: 'app-home',
  imports: [StudentComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
