import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup;
  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    public bizService: BizService,
    private apiService: ApiService
  ) {
    this.contactUsForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submitForm() {

    if (this.contactUsForm.valid) {
      const data = {
        name: this.contactUsForm.get('firstName').value + ' ' + this.contactUsForm.get('lastName').value,
        email: this.contactUsForm.get('email').value,
        phone: this.contactUsForm.get('phone').value,
        message: this.contactUsForm.get('message').value
      }
      this.apiService.contactUs(data).subscribe(res => {
        if (res) {
          this.showSuccessAlert();
        }
      }, err => {
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
