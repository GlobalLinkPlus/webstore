import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BizService } from 'src/app/services/biz.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

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

  constructor(private messageService: MessageService,
    public ref: DynamicDialogRef,
    public bizService: BizService) { }

  ngOnInit(): void {
  }

  submitForm() {
    // Perform form submission logic here (e.g., send data to backend)
    // Simulate form submission success
    const success = true; // Change this based on your actual success/error conditions

    if (success) {
      this.showSuccessAlert();
      this.ref.close();
    } else {
      this.ref.close();
      this.showErrorAlert();
    }
  }

  showSuccessAlert() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message sent successfully' });
  }

  showErrorAlert() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message' });
  }

}
