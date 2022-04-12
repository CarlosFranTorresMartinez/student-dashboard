import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MessageService, PrimeNGConfig} from 'primeng/api';
import {InputTextModule} from "primeng/inputtext";
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from "primeng/card";
import {InputNumberModule} from "primeng/inputnumber";
import {ToastModule} from "primeng/toast";
import {DropdownModule} from "primeng/dropdown";
import {PickListModule} from "primeng/picklist";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    BrowserAnimationsModule,
    InputTextModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    RippleModule,
    TableModule,
    ProgressSpinnerModule,
    CardModule,
    InputNumberModule,
    ToastModule,
    DropdownModule,
    PickListModule
  ],
})
export class PrimeAngularModule implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
