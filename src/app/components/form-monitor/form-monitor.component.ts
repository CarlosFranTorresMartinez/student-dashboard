import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Monitor} from "../../interface/Monitor";
import {v4 as uuidv4} from "uuid";
import {MessageService} from "primeng/api";
import {MonitorService} from "../../services/monitor.service";

@Component({
  selector: 'app-form-monitor',
  templateUrl: './form-monitor.component.html',
  styleUrls: ['./form-monitor.component.css'],
  providers: [MonitorService, MessageService]
})
export class FormMonitorComponent {

  displayDialogMonitor: boolean = false;
  formMonitor!: FormGroup;

  constructor(private formBuilderMonitor: FormBuilder, private monitorService: MonitorService, private messageService: MessageService) {
    this.createFormMonitor();
  };


  createFormMonitor() {
    this.formMonitor = this.formBuilderMonitor.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@vallegrande.edu.pe$')]],
      career: [null, [Validators.required, Validators.maxLength(2)]],
    })
  }

  saveMonitor() {
    const monitor: Monitor = {
      _id: uuidv4(),
      picture: '',
      name: this.formMonitor.get('name')?.value,
      email: this.formMonitor.get('email')?.value,
      career: this.formMonitor.get('career')?.value,
      status: 'A',
    }

    this.monitorService.createMonitor(monitor).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Monitor registrado correctamente.'
        });
      },
      error: (err) => {
        this.messageService.add({severity: 'error', summary: 'Ya debes estar registrado o ya eres un estudiante.', detail: 'Error al registrar monitor.'});
        this.formMonitor.reset();
      },
      complete: () => {
        this.closeDialogMonitor();
      },
    });
  }


  openDialogMonitor(): void {
    this.displayDialogMonitor = true;
  }

  closeDialogMonitor(): void {
    this.displayDialogMonitor = false;
    this.formMonitor.reset();
  }

  validateFormMonitor(controlName: string): boolean | undefined {
    return this.formMonitor.get(controlName)?.invalid && this.formMonitor.get(controlName)?.touched;
  }
}
