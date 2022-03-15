import {Component, OnInit} from '@angular/core';
import {Career} from 'src/app/model/Career';
import {CareerService} from "../../../services/career.service";
import {Tutor} from "../../../model/Tutor";
import {TutorService} from "../../../services/tutor.service";
import {StudentService} from "../../../services/student.service";
import {Student} from 'src/app/model/Student';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {v4 as uuidv4} from "uuid";
import {AssingBuilder} from 'src/app/model/AssingBuilder';
import {AssingService} from "../../../services/assing.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-assing-from',
  templateUrl: './assing-from.component.html',
  styleUrls: ['./assing-from.component.css']
})
export class AssingFromComponent implements OnInit {

  careerList!: Career[];
  tutorList!: Tutor[];
  studentList!: Student[];
  isLoadingCareer: boolean = true;
  isLoadingTutor: boolean = true;
  isLoadingStudent: boolean = true;

  form!: FormGroup;

  constructor(private careerSerives: CareerService,
              private tutorServices: TutorService,
              private studentServices: StudentService,
              private assingServices: AssingService,
              private fb: FormBuilder,
              private router: Router) {
    this.form = fb.group({
      tutor: ['', Validators.required],
      student: ['', Validators.required],
      career: ['', Validators.required],
      semestre: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCareer();
    this.getStudent();
  }

  submit() {
    const uuid = uuidv4();
    const assingBuilder: AssingBuilder = {
      ID_ASSIGMENT: uuid,
      SEMESTRE: this.form.value.semestre,
      CAREER: this.form.value.career,
      STUDENT: this.form.value.student,
      TUTOR: this.form.value.tutor,
      STATUS: 'A'
    }

    this.assingServices.saveAssing(assingBuilder)
      .subscribe({
        next: value => {
          this.assingServices.getAssing()
        },
        error: err => console.log(err),
        complete: () => {
          this.router.navigate(['/assing/'])
            .catch(reason => console.log(reason))
        }
      });
  }


  getCareer() {
    this.careerSerives.getCareer()
      .subscribe({
        next: value => {
          this.isLoadingCareer = false;
          this.careerList = value;
        },
        error: err => {
          this.isLoadingCareer = true;
        },
        complete: () => {
          this.isLoadingCareer = false;
        }
      })
  }

  getTutor(career
             :
             string
  ) {
    this.isLoadingTutor = true;
    this.tutorList = [];

    this.tutorServices.getTutor(career)
      .subscribe({
        next: value => {
          this.isLoadingTutor = false;
          this.tutorList = value;
        },
        error: err => {
          this.isLoadingTutor = true;
        },
        complete: () => {
          this.isLoadingTutor = false;
        }
      })
  }

  getStudent() {
    this.studentServices.getStudent()
      .subscribe({
        next: value => {
          this.isLoadingStudent = false;
          this.studentList = value;
        },
        error: err => {
          this.isLoadingStudent = true;
        },
        complete: () => {
          this.isLoadingStudent = false;
        }
      })
  }

}
