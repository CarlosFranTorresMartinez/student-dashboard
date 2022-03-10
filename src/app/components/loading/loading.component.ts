import {Component, OnInit, Output} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

}
