import {Component, OnInit} from '@angular/core';
import {AssignService} from "../../services/assign.service";
import {Semester} from "../../interface/Semester";
import {AuthService} from "@auth0/auth0-angular";
import {StudentService} from "../../services/student.service";
import {StudentAssign} from "../../interface/StudentAssign";
import {SemesterAcademy} from "../../interface/SemesterAcademy";

@Component({
  selector: 'app-tutoriados',
  templateUrl: './tutoriados.component.html',
  styleUrls: ['./tutoriados.component.css']
})
export class TutoriadosComponent implements OnInit {

  semesterOptions!: Semester[];
  semester!: string;

  assignStudent!: StudentAssign[];

  sourceSemesterAcademy!: SemesterAcademy[];
  targetSemesterAcademy: SemesterAcademy = {
    semesterAcademy: ""
  };
  semesterAcademy!: string;

  constructor(private assignService: AssignService, private studentService: StudentService, private auth: AuthService) {
    this.getSemester();
    this.getStudentBySemester();
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(value => {
      this.getSemesterAcademyByEmailOfTutor(value?.email);
    });
  }

  getSemester() {
    this.auth.user$.subscribe(user => {
      this.getSemesterByEmailOfTutor(user?.email, this.targetSemesterAcademy.semesterAcademy);
    })
  }

  getStudentBySemester() {
    this.auth.user$.subscribe(value => {
      this.getStudentAssingByEmailofTutorAndSemestre(value?.email, this.semester);
    })
  }

  getSemesterAcademyByEmailOfTutor(email: string | undefined): SemesterAcademy[] {
    this.assignService.getSemesterAcademyByEmailOfTutor(email).subscribe(value => this.sourceSemesterAcademy = value)
    return this.sourceSemesterAcademy;
  }

  getSemesterByEmailOfTutor(email: string | undefined, semesterAcademy: string | undefined): Semester[] {
    this.assignService.getSemester(email, semesterAcademy).subscribe(value => this.semesterOptions = value);
    return this.semesterOptions;
  }

  getStudentAssingByEmailofTutorAndSemestre(email: string | undefined, semester: string): StudentAssign[] {
    this.studentService.listStudentAssing(email, semester).subscribe(studentAssing => this.assignStudent = studentAssing);
    return this.assignStudent;
  }

}
