import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../../model/Student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input()
  student!: Student[];

  @Input()
  status!: number;

  constructor() {
  }

  ngOnInit(): void {

  }

}
