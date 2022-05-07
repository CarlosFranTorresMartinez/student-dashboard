import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {Career} from "../../../model/Career";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../../model/Student";
import {v4 as uuid} from "uuid";
import {StudentService} from "../../../service/student.service";
import {MessageService} from "primeng/api";
import {ListStudentComponent} from "../list-student/list-student.component";

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent {

  @Output('onSubmit') onSubmit = new EventEmitter<Student>();

  career!: Career[];
  fg: FormGroup;

  constructor(private fb: FormBuilder, private studentServices: StudentService, private messageService: MessageService) {
    this.fg = fb.group({
      id: uuid(),
      name: ['', Validators.required],
      fatherLastname: ['', Validators.required],
      motherLastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      dni: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      career: ['', Validators.required],
    });

    this.career = [
      {code: 'AS', name: 'Analisis de Sistemas'},
      {code: 'PA', name: 'Produccion Agraria'}
    ];
  }

  studentForUpdate(e: Student): void {
    this.fg = this.fb.group(
      {
        id: e.id,
        name: e.name,
        fatherLastname: e.father_lastname,
        motherLastname: e.mother_lastname,
        email: e.email,
        dni: e.dni,
        career: e.career == 'Analisis de Sistemas' ? 'AS' : 'PA',
        method: 'update'
      }
    )
  }

  submit(): void {
    const id = uuid();
    console.log(this.fg.value);
    this.onSubmit.emit({
      id: this.fg.value.id === null ? id : this.fg.value.id,
      name: this.fg.value.name,
      father_lastname: this.fg.value.fatherLastname,
      mother_lastname: this.fg.value.motherLastname,
      email: this.fg.value.email,
      dni: this.fg.value.dni,
      career: this.fg.value.career,
      status: 'A',
      method: this.fg.value.method,
    });

  }

  clear(): void {
    this.fg.reset();
  }

}
