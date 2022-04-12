import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from "../../../model/Student";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {


  @Output('onSubmit') onSubmit = new EventEmitter<Student>();
  @Output('onCancel') onCancel = new EventEmitter<void>();

  @Input() isLoading!: boolean;

  submitted!: boolean;
  student!: Student;

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      fatherLastname: ['', Validators.required],
      motherLastname: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      dni: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    })
  }

  submit(): void {
    const uuid = uuidv4();
    this.onSubmit.emit({
      id: uuid,
      name: this.form.value.name.trim(),
      fatherLastname: this.form.value.fatherLastname.toUpperCase().trim(),
      motherLastname: this.form.value.motherLastname.toUpperCase().trim(),
      email: this.form.value.email.trim(),
      dni: this.form.value.dni.trim(),
      status: 'A'
    });
  }

  clear(): void {
    this.form.reset();
    this.isLoading = false;
    this.submitted = false;
  }

}
