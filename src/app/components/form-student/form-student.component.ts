import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../interface/Student";
import {v4 as uuidv4} from 'uuid';
import {StudentService} from "../../services/student.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css'],
  providers: [StudentService, MessageService]
})
export class FormStudentComponent {

  displayDialogStudent: boolean = false;
  formStudent!: FormGroup;

  constructor(private formBuilderStudent: FormBuilder, private studentService: StudentService, private messageService: MessageService) {
    this.createFormStudent();
  };


  createFormStudent() {
    this.formStudent = this.formBuilderStudent.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@vallegrande.edu.pe$')]],
      career: [null, [Validators.required, Validators.maxLength(2)]],
    })
  }

  saveStudent() {
    const student: Student = {
      id: uuidv4(),
      name_complete: this.formStudent.get('name')?.value,
      email: this.formStudent.get('email')?.value,
      career: this.formStudent.get('career')?.value,
      status: 'A',
    }

    this.studentService.createStudent(student).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Estudiante registrado correctamente.'
        });
      },
      error: (err) => {
        this.messageService.add({severity: 'error', summary: 'Ya debes estar registrado o ya eres un profesor.', detail: 'Error al registrar estudiante.'});
        this.formStudent.reset();
      },
      complete: () => {
        this.closeDialogStudent();
      },
    });
  }


  openDialogStudent(): void {
    this.displayDialogStudent = true;
  }

  closeDialogStudent(): void {
    this.displayDialogStudent = false;
    this.formStudent.reset();
  }

  validateFormStudent(controlName: string): boolean | undefined {
    return this.formStudent.get(controlName)?.invalid && this.formStudent.get(controlName)?.touched;
  }
}


