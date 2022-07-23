import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Tutor} from "../../interface/Tutor";
import {v4 as uuidv4} from "uuid";
import {MessageService} from "primeng/api";
import {TutorService} from "../../services/tutor.service";

@Component({
  selector: 'app-form-monitor',
  templateUrl: './form-monitor.component.html',
  styleUrls: ['./form-monitor.component.css'],
  providers: [TutorService, MessageService]
})
export class FormMonitorComponent {

  displayDialogMonitor: boolean = false;
  formMonitor!: FormGroup;

  constructor(private formBuilderMonitor: FormBuilder, private tutorService: TutorService, private messageService: MessageService) {
    this.createFormMonitor();
  };


  createFormMonitor() {
    this.formMonitor = this.formBuilderMonitor.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@vallegrande.edu.pe$')]],
      code: [null, [Validators.required]],
      career: [null, [Validators.required, Validators.maxLength(2)]],
    })
  }

  saveMonitor() {
    const tutor: Tutor = {
      id: uuidv4(),
      picture: '',
      code: this.formMonitor.get('code')?.value,
      name_complete: this.formMonitor.get('name')?.value,
      email: this.formMonitor.get('email')?.value,
      career: this.formMonitor.get('career')?.value,
      status: 'A',
    }

    this.tutorService.createMonitor(tutor).subscribe({
      next: (data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Tutor registrado correctamente.'
        });
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ya debes estar registrado o ya eres un estudiante.',
          detail: 'Error al registrar tutor.'
        });
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
