import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../../../model/Student";

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {

  @Input()
  student!: Student[];

  @Output('changeStatus')
  changeStatus: any = new EventEmitter<Object>();

  getValue(e: Event) {
    return (e.target as HTMLTextAreaElement).value;
  }

  onChangeStatus(e: string) {
    const id = e;
    this.changeStatus.emit(id)
  }
}
