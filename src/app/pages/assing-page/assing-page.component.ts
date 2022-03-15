import {Component, OnInit} from '@angular/core';
import {Assing} from "../../model/Assing";
import {AssingService} from "../../services/assing.service";
import {SnackBarComponent} from "../../components/snack-bar/snack-bar.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-assing-page',
  templateUrl: './assing-page.component.html',
  styleUrls: ['./assing-page.component.css']
})
export class AssingPageComponent implements OnInit {

  isLoading: boolean = false;
  assingList: Array<Assing> = [];

  constructor(private assingServices: AssingService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getAssing();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5 * 1000,
    });
  }

  getAssing() {
    this.isLoading = true;
    this.assingServices.getAssing()
      .subscribe(
        {
          next: value => {
            this.isLoading = false;
            this.assingList = value;
          },
          error: err => {
            this.isLoading = true;
            this.openSnackBar();
          },
          complete: () => {
            this.isLoading = false
          }
        }
      )
  }
}
