import {Component, OnInit, ViewChild} from '@angular/core';
import {MessageService} from "primeng/api";
import {StudentService} from "../../../service/student.service";
import {Student} from "../../../model/Student";
import {FormStudentComponent} from "../form-student/form-student.component";
import {ListStudentComponent} from "../list-student/list-student.component";

@Component({
  selector: 'app-page-student',
  templateUrl: './page-student.component.html',
  styleUrls: ['./page-student.component.css']
})
export class PageStudentComponent implements OnInit {

  student!: Student;
  listStudent!: Student[];
  @ViewChild(FormStudentComponent) formStudentComponent!: FormStudentComponent;

  constructor(private studentServices: StudentService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getStudent();
  }

  onSubmit(e: Student) {
    if (e.method === "update") {
      this.updateStudent(e);
    } else {
      this.saveStudent(e);
    }
  }

  saveStudent(e: Student) {
    this.studentServices.saveStudent(e).subscribe({
      next: value => {
        this.messageService.add({
          severity: 'success',
          summary: value.message
        })
      },
      error: err => {
        this.messageService.add({
          severity: 'warn',
          summary: err.error.message
        })
      },
      complete: () => {
        this.getStudent();
        this.formStudentComponent.clear();
      }
    })
  }

  getDataForStudent(e: Student) {
    this.formStudentComponent.studentForUpdate(e);
  }


  updateStudent(e: Student) {
    this.studentServices.updateStudent(e).subscribe({
      next: value => {
        this.messageService.add({
          severity: 'success',
          summary: value.message
        })
      },
      error: err => {
        this.messageService.add({
          severity: 'warn',
          summary: err.error.message
        })
      },
      complete: () => {
        this.getStudent();
        this.formStudentComponent.clear();
      }
    })
  }

  getStudent() {
    this.studentServices.getStudent().subscribe({
      next: value => this.listStudent = value,
      error: err => console.error(err)
    })
  }

  changeStatus(id: string) {
    this.studentServices.changeStatus(id).subscribe({
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

}
