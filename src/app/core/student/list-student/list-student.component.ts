import {Component, EventEmitter, Input, Output, ViewChild, ViewChildren} from '@angular/core';
import {Student} from "../../../model/Student";
import {StudentService} from "../../../service/student.service";
import {FormStudentComponent} from "../form-student/form-student.component";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {

  @Output('getDataStudentForUpdate') getDataStudentForUpdate = new EventEmitter<Student>();
  @Input() studentList!: Student[];
  @Output('changeStatus') changeStatus: any = new EventEmitter<Object>();

  getValue(e: Event) {
    return (e.target as HTMLTextAreaElement).value;
  }

  onChangeStatus(e: string) {
    this.changeStatus.emit(e);
  }

  getData(e: Student) {
    this.getDataStudentForUpdate.emit(e);
  }


}
