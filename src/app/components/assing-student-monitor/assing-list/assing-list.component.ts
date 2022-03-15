import {Component, Input, OnInit} from '@angular/core';
import {Assing} from "../../../model/Assing";

@Component({
  selector: 'app-assing-list',
  templateUrl: './assing-list.component.html',
  styleUrls: ['./assing-list.component.css']
})
export class AssingListComponent implements OnInit {

  @Input()
  assingList: Array<Assing> = [];

  columnsAssing: string[] = ['TUTOR_NAME', 'TUTOR_EMAIL', 'CAREES', 'STUDENT_NAME', 'STUDENT_EMAIL', 'SEMESTRE'];

  constructor() {
  }

  ngOnInit(): void {
  }


}
