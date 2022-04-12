import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Student} from "../../../model/Student";
import {AssingPost} from "../../../model/assing/AssingPost";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  @Input()
  student!: Student[];

  @Input()
  status!: number;

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
