import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Career} from "../../../model/Career";
import {Semestre} from "../../../model/Semestre";
import {Monitor} from "../../../model/Monitor";
import {MonitorService} from "../../../services/monitor.service";
import {Student} from "../../../model/Student";
import {Assing} from 'src/app/model/assing/Assing';
import {v4 as uuidv4} from "uuid";
import {AssingPost} from "../../../model/assing/AssingPost";

@Component({
  selector: 'app-assing-form',
  templateUrl: './assing-form.component.html',
  styleUrls: ['./assing-form.component.css']
})
export class AssingFormComponent implements OnInit {

  @Output('onAssing') onAssing = new EventEmitter<AssingPost>();

  @Input() career!: Career[];
  @Input() selectedCareer!: string;
  @Input() isLoadingCareer = true;
  @Input() isLoading!: boolean;

  assing!: Assing;

  monitor!: Monitor[];
  selectedMonitor!: string;
  isLoadingMonitor = true;

  semestre!: Semestre[];
  selectedSemestre!: string;


  @Input() studentNotAssing!: Student[];
  studentAssing!: Student[];

  constructor(private monitorService: MonitorService) {

    this.semestre = [
      {code: '1', name: 'Primer Semestre'},
      {code: '2', name: 'Segundo Semestre'},
      {code: '3', name: 'Tercer Semestre'},
      {code: '4', name: 'Cuarto Semestre'},
      {code: '5', name: 'Quinto Semestre'},
      {code: '6', name: 'Sexto Semestre'},
    ];
  }

  ngOnInit(): void {
    this.studentAssing = [];
  }

  getMonitor(career: string) {
    this.monitor = [];
    this.isLoadingMonitor = true;

    this.monitorService.getMonitor(career).subscribe({
      next: monitor => {
        this.isLoadingMonitor = false;
        this.monitor = monitor;
      },
      error: err => {
        this.isLoadingMonitor = true;
        console.log(err);
      },
    });
  }

  submit() {
    const assing: Student[] = this.studentAssing;
    assing.map(value => {
      const assingBuilder: AssingPost = {
        id: uuidv4(),
        tutor_id: this.selectedMonitor,
        student_id: value.id,
        semestre: Number(this.selectedSemestre),
        career: this.selectedCareer,
        status: 'A'
      };
      this.onAssing.emit(assingBuilder);
    });
  }


  clear() {
    this.studentAssing = [];
    this.selectedCareer = '';
    this.selectedMonitor = '';
    this.selectedSemestre = '';
    this.isLoading = false;
  }
}
