import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BizService } from 'src/app/services/biz.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contact-us-modal',
  templateUrl: './contact-us-modal.component.html',
  providers: [MessageService]
})
export class ContactUsModalComponent implements OnInit {
  name: string;
  email: string;
  phone: string;
  message: string;
  contactUsForm: FormGroup;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    public ref: DynamicDialogRef,
    public bizService: BizService,
    private apiService: ApiService
  ) {
    this.contactUsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', []],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.contactUsForm.markAsUntouched();
  }

  submitForm() {

    if (this.contactUsForm.valid) {
      this.apiService.contactUs(this.contactUsForm.value).subscribe(res => {
        if (res) {
          this.showSuccessAlert();
          this.ref.close();
        }
      }, err => {
        this.ref.close();
        this.showErrorAlert();
      })
    }
  }

  showSuccessAlert() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent successfully' });
  }

  showErrorAlert() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message' });
  }

}
