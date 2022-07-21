import {Component, OnInit} from '@angular/core';
import {Student} from "../../interface/Student";
import {StudentService} from "../../services/student.service";
import {Semester} from "../../interface/Semester";
import {AuthService} from "@auth0/auth0-angular";
import {Assing} from "../../interface/Assing";
import {v4 as uuidv4} from 'uuid';
import {MonitorService} from "../../services/monitor.service";
import {AssingService} from "../../services/assing.service";
import {MessageService} from "primeng/api";
import {Monitor} from "../../interface/Monitor";

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css'],
  providers: [StudentService, MonitorService, AssingService, MessageService]
})
export class AssignComponent implements OnInit {

  sourceStudent!: Student[];
  targetStudent!: Student[];

  sourceSemester!: Semester[];
  targetSemester!: Semester;

  constructor(private monitorService: MonitorService,
              private studentService: StudentService,
              private assignService: AssingService,
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
    this.listStudentNotAssing();
  }

  listStudentNotAssing() {
    this.studentService.listStudentNotAssing().subscribe(data => {
      this.sourceStudent = data;
    });

    this.targetStudent = [];
  }

  selectedStudents() {
    this.auth.user$.subscribe(user => {
      this.monitorService.getDataMonitorByEmail(user?.email).subscribe(data => {
        const monitor: Monitor ={
          _id: data._id,
          picture: data.picture,
          name: data.name,
          email: data.email,
          career: data.career,
          status: data.status,
        }
        const students: Student[] = this.targetStudent;
        const semester: string = this.targetSemester.name;


        const assign: Assing = {
          _id: uuidv4(),
          monitor: monitor,
          career: data.career,
          semestre: semester,
          studentList: students,
          status: 'A',
        }
        console.log(assign);

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
            this.listStudentNotAssing();
          },
        });
      });
    });
  }

}



