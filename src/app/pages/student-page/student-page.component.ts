import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from 'src/app/model/Student';
import {StudentService} from "../../services/student.service";
import {MessageService} from "primeng/api";
import {StudentFormComponent} from "../../components/student/student-form/student-form.component";

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  @ViewChild(StudentFormComponent) studentForm!: StudentFormComponent;

  studentList: Array<Student> = [];
  isLoadingList: boolean = false;
  isLoadingForm: boolean = false;
  status!: number;

  constructor(private studentService: StudentService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getStudent();
  }

  changeStatus(id: string) {
    this.studentService.changeStatus(id).subscribe({
      next: value => {
        this.messageService.add({
          severity: 'success',
          summary: 'Se elimino el alunmo'
        });
      },
      complete: () => {
        this.getStudent();
      }
    });
  }

  save(e: Student) {
    this.isLoadingForm = true;
    this.studentService.saveStudent(e).subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Registro exitoso',
          detail: `El alunmo  ${res.name} con dni ${res.dni} ha sido registrado correctamente.`
        });
        this.isLoadingForm = false;
      },
      error: (err) => {
        this.isLoadingForm = false;
        if (err.status == 400) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Registro duplicado',
            detail: `El alunmo  ${err.error.name} con dni ${err.error.dni} ya ha sido registrado.`
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error al registrar',
            detail: `El alunmo  ${err.error.name} con dni ${err.error.dni} no ha sido registrado.`
          });
        }
      },
      complete: () => {
        this.studentForm.clear();
        this.getStudent();
      }
    });
  }

  getStudent() {
    this.isLoadingList = true;
    this.studentService.getStudent().subscribe({
      next: value => {
        this.status = 1;
        this.isLoadingList = false;
        this.studentList = value;
      },
      error: (err) => {
        this.status = err.status;
        this.isLoadingList = false;
      },
      complete: () => {
        this.isLoadingList = false;
      }
    });
  }

}
