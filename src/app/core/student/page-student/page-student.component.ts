import {Component, OnInit, ViewChild} from '@angular/core';
import {Student} from "../../../model/Student";
import {StudentService} from "../../../services/student.service";
import {MessageService} from "primeng/api";
import {FormStudentComponent} from "../form-student/form-student.component";

@Component({
  selector: 'app-page-student',
  templateUrl: './page-student.component.html',
  styleUrls: ['./page-student.component.css']
})
export class PageStudentComponent implements OnInit {

  @ViewChild(FormStudentComponent) studentForm!: FormStudentComponent;

  studentList: Array<Student> = [];
  isLoadingList: boolean = false;
  isLoadingForm: boolean = false;
  status!: number;

  constructor(private studentService: StudentService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getStudent();
  }

  handleInput(e: Event) {
    return (e.target as HTMLInputElement).value;
  }

  changeStatus(e: Event) {
    const value = this.handleInput(e);
    this.studentService.changeStatus(value).subscribe({
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
