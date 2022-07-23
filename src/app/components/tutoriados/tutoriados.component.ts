import {Component, OnInit} from '@angular/core';
import {AssignService} from "../../services/assign.service";
import {Semester} from "../../interface/Semester";
import {AuthService} from "@auth0/auth0-angular";
import {StudentService} from "../../services/student.service";
import {StudentAssign} from "../../interface/StudentAssign";

@Component({
  selector: 'app-tutoriados',
  templateUrl: './tutoriados.component.html',
  styleUrls: ['./tutoriados.component.css']
})
export class TutoriadosComponent implements OnInit {

  semester: string = '1';
  semesterOptions!: Semester[];
  assingStudent!: StudentAssign[];

  constructor(private assignService: AssignService, private studentService: StudentService, private auth: AuthService) {
    auth.user$.subscribe(value => {
      this.getStudentAssingByEmailofTutorAndSemestre(value?.email, this.semester);
      this.getSemesterByEmailOfTutor(value?.email);
    });
  }

  ngOnInit(): void {
  }

  getSemesterByEmailOfTutor(email: string | undefined): Semester[] {
    this.assignService.getSemester(email).subscribe(value => this.semesterOptions = value);
    return this.semesterOptions;
  }

  getStudentAssingByEmailofTutorAndSemestre(email: string | undefined, semester: string): StudentAssign[] {
    this.studentService.listStudentAssing(email, semester).subscribe(studentAssing => this.assingStudent = studentAssing);
    return this.assingStudent;
  }

  getSemester() {
    this.auth.user$.subscribe(value => {
      this.getStudentAssingByEmailofTutorAndSemestre(value?.email, this.semester);
    })
  }

}
