import {Component, OnInit} from '@angular/core';
import {Student} from "../../interface/Student";
import {StudentService} from "../../services/student.service";
import {Semester} from "../../interface/Semester";
import {AuthService} from "@auth0/auth0-angular";
import {Assign} from "../../interface/Assign";
import {v4 as uuidv4} from 'uuid';
import {TutorService} from "../../services/tutor.service";
import {AssignService} from "../../services/assign.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css'],
  providers: [StudentService, TutorService, AssignService, MessageService]
})
export class AssignComponent implements OnInit {

  sourceStudent!: Student[];
  targetStudent!: Student[];

  sourceSemester!: Semester[];
  targetSemester!: Semester;

  semesterAcademy!: string;

  constructor(private monitorService: TutorService,
              private studentService: StudentService,
              private assignService: AssignService,
              private messageService: MessageService,
              private auth: AuthService) {
    this.sourceSemester = [
      {code: '1', name: '1'},
      {code: '2', name: '2'},
      {code: '3', name: '3'},
      {code: '4', name: '4'},
      {code: '5', name: '5'},
      {code: '6', name: '6'},
    ];
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      this.monitorService.validateMonitor(user?.email).subscribe(data => {
        this.getSemesterAcademy(data.career);
        this.listStudentNotAssing(data.career);
      })
    })
  }

  listStudentNotAssing(career: string | undefined) {
    this.studentService.listStudentNotAssing(career).subscribe(data => {
      this.sourceStudent = data;
    });

    this.targetStudent = [];
  }

  selectedStudents() {
    const semester: string | undefined = this.targetSemester.name;

    this.auth.user$.subscribe(user => {
      this.monitorService.validateMonitor(user?.email).subscribe(tutor => {
        this.targetStudent.map(value => {

            const assign: Assign = {
              id: uuidv4(),
              tutor: tutor.id,
              semester_academy: this.semesterAcademy,
              student: value.id,
              career: tutor.career,
              semester: this.semesterAcademy + "_S" + semester,
              status: 'A',
            }

            this.assignService.createAssing(assign).subscribe({
              next: (data) => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: 'Asignacion correta.'
                });
              },
              error: (err) => {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Ya debes estar registrado o ya eres un profesor.',
                  detail: 'Error al asignar.'
                });
              },
              complete: () => {
                this.listStudentNotAssing(tutor.career);
              },
            });
          }
        );
      });
    });
  }

  getSemesterAcademy(career: string | undefined): string {
    this.assignService.getSemesterAcademy(career).subscribe(sa => this.semesterAcademy = sa.semesterAcademy);
    return this.semesterAcademy;
  }

}



