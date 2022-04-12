import {Component, OnInit, ViewChild} from '@angular/core';
import {CareerService} from "../../services/career.service";
import {Career} from "../../model/Career";
import {StudentService} from "../../services/student.service";
import {Student} from "../../model/Student";
import {AssingFormComponent} from "../../components/assing/assing-form/assing-form.component";
import {AssingService} from 'src/app/services/assing.service';
import {MessageService} from "primeng/api";
import {AssingPost} from "../../model/assing/AssingPost";
import {MonitorAssing} from "../../model/assing/MonitorAssing";

@Component({
  selector: 'app-assing-page',
  templateUrl: './assing-page.component.html',
  styleUrls: ['./assing-page.component.css']
})
export class AssingPageComponent implements OnInit {

  @ViewChild(AssingFormComponent) assingpage!: AssingFormComponent;

  career!: Career[];
  selectedCareer!: string;
  isLoadingCareer = true;

  studentNotAssing!: Student[];
  isLoadingStudent = true;

  isLoadingForm: boolean = false;

  monitorAssing!: MonitorAssing[];
  isLoadingMonitorAssing = true;

  constructor(private careerService: CareerService,
              private studentService: StudentService,
              private assingService: AssingService,
              private messageService: MessageService) {
  }


  ngOnInit(): void {
    this.getCareer();
    this.getStundetNotAssing();
    this.getMonitorAssing();
  }

  getCareer() {
    this.isLoadingCareer = true;
    this.careerService.getCareer().subscribe({
      next: career => {
        this.isLoadingCareer = false;
        this.career = career;
      },
      error: err => {
        this.isLoadingCareer = true;
        console.log(err);
      },
    });
  }

  getStundetNotAssing() {
    this.studentNotAssing = [];
    this.isLoadingStudent = true;
    this.studentService.getStundetNotAssing().subscribe({
      next: student => {
        this.isLoadingStudent = false;
        this.studentNotAssing = student;
      },
      error: err => {
        this.isLoadingStudent = true;
        console.log(err);
      },
    });
  }

  getMonitorAssing() {
    this.monitorAssing = [];
    this.isLoadingMonitorAssing = true
    this.assingService.getMonitoAssing().subscribe({
      next: value => {
        this.isLoadingMonitorAssing = false;
        this.monitorAssing = value;
      },
      error: err => {
        this.isLoadingMonitorAssing = true;
        console.log(err)
      }
    })
  }

  onAssing(event: AssingPost) {
    this.assingService.saveAssing(event).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Asignacion exitosa',
          detail: `La asignación se realizó correctamente`
        });
        this.isLoadingForm = false;
      },
      error: err => {
        this.assingpage.clear();
        this.isLoadingForm = true;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `Hubo un error al realizar la asignación`
        });
      },
      complete: () => {
        this.assingpage.clear();
        this.getStundetNotAssing();
        this.getMonitorAssing();
      }
    });
  }
}





