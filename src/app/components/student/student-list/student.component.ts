import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../../model/Student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input()
  student: Array<Student> = [];

  columnsStudent: string[] = ['ID_STUDENT', 'FULL_NAME', 'DNI', 'EMAIL'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
