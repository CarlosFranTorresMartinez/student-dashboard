import {Component, Input, OnInit} from '@angular/core';
import {MonitorAssing} from "../../../model/assing/MonitorAssing";

@Component({
  selector: 'app-assing-list',
  templateUrl: './assing-list.component.html',
  styleUrls: ['./assing-list.component.css']
})
export class AssingListComponent implements OnInit {
  @Input() monitorAssingList!: MonitorAssing[];

  constructor() {
  }

  ngOnInit(): void {
  }

  getCodeMonitor(code: string) {
    console.log(code)
  }

}
