import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from "primeng/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {DividerModule} from "primeng/divider";
import {RadioButtonModule} from "primeng/radiobutton";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {ToolbarModule} from "primeng/toolbar";
import {DropdownModule} from "primeng/dropdown";
import {SelectButtonModule} from "primeng/selectbutton";
import {CalendarModule} from "primeng/calendar";
import {PrimeNGConfig} from "primeng/api";
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore
} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    DividerModule,
    RadioButtonModule,
    ToastModule,
    TableModule,
    RippleModule,
    ToolbarModule,
    DropdownModule,
    SelectButtonModule,
    CalendarModule
  ],
  providers: [TranslateService]
})
export class PrimengModule implements OnInit {

  constructor(private config: PrimeNGConfig, private translateService: TranslateService) {
  }

  ngOnInit() {
    this.config.ripple = true;
    this.translateService.setDefaultLang('es');
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
  }
}
