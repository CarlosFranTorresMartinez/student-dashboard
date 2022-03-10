import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/Student";
import {StudentService} from "../../services/student.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackBarComponent} from "../../components/snack-bar/snack-bar.component";

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  studentList: Array<Student> = [];
  isLoading: boolean = false;

  constructor(private studentServices: StudentService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getStudent();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5 * 1000,
    });
  }

  getStudent() {
    this.isLoading = true;
    this.studentServices.getStudent()
      .subscribe(
        value => {
          this.isLoading = false;
          this.studentList = value;
        },
        error => {
          this.isLoading = true;
          this.openSnackBar();
        },
        () => {
          this.isLoading = false;
        }
      );
  }

}
