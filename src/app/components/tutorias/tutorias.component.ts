import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {AuthService} from "@auth0/auth0-angular";
import {AssignService} from "../../services/assign.service";
import {Semester} from "../../interface/Semester";
import {StudentAssign} from "../../interface/StudentAssign";
import {Compromise} from "../../interface/Compromise";

@Component({
  selector: 'app-tutorias',
  templateUrl: './tutorias.component.html',
  styleUrls: ['./tutorias.component.css']
})
export class TutoriasComponent implements OnInit {

  sourceSemester!: Semester[];
  targetSemester!: Semester;

  sourceStudent!: StudentAssign[];
  targetStudent!: StudentAssign;

  dateInitial: Date | undefined;
  dateFinal: Date | undefined;

  compromiseArray: Compromise[] = [];

  ngOnInit(): void {
  }

  constructor(private assignService: AssignService, private studentService: StudentService, private auth: AuthService) {
    auth.user$.subscribe(auth => {
      assignService.getSemesterAcademyByEmailOfTutor(auth?.email).subscribe(sa => {
        this.getSemesterByEmailOfTutor(auth?.email, sa[0].semesterAcademy);
      })
    })
  }

  getSemesterByEmailOfTutor(email: string | undefined, semesterAcademy: string | undefined): Semester[] {
    this.assignService.getSemester(email, semesterAcademy).subscribe(value => this.sourceSemester = value);
    return this.sourceSemester;
  }

  studentBySemester() {
    this.auth.user$.subscribe(auth => {
      this.getStudentBySemester(auth?.email);
    })
  }


  getStudentBySemester(email: string | undefined): StudentAssign[] {
    this.studentService.listStudentAssing(email, this.targetSemester.label).subscribe(student => this.sourceStudent = student)
    return this.sourceStudent
  }

  btnIncrement() {
    this.compromiseArray.push({value: ""});
  }

  btnDecrement(i: number) {
    this.compromiseArray.splice(i, 1);
  }

}
