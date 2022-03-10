import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Student} from "../../../model/Student";
import {v4 as uuidv4} from 'uuid';
import {StudentService} from "../../../services/student.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent {
  form: FormGroup;


  constructor(private fb: FormBuilder,
              private studentServices: StudentService,
              private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      father_lastname: ['', Validators.required],
      mother_lastname: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  submit() {
    const uuid = uuidv4();

    const student: Student = {
      ID_STUDENT: uuid,
      NAME: this.form.value.name,
      FATHER_LASTNAME: this.form.value.father_lastname,
      MOTHER_LASTNAME: this.form.value.mother_lastname,
      DNI: this.form.value.dni,
      EMAIL: this.form.value.email
    }

    this.studentServices.saveStudent(student)
      .subscribe(value => this.studentServices.getStudent(), error => console.log(error));

    this.router.navigate(['/student/'])
      .catch(reason => console.log(reason));
  }
}
