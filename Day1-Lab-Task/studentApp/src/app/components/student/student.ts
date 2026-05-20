import { Component } from '@angular/core';
import { Student } from '../../models/student.model'

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class StudentComponent {
  students: Student[] = [
    {
      id: 1,
      name: "Mohamed",
      age: 23,
      photoUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      name: "Wael",
      age: 23,
      photoUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 3,
      name: "Salem",
      age: 23,
      photoUrl: "https://randomuser.me/api/portraits/men/1.jpg"
    }
  ]
}
