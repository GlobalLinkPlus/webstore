import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  @ViewChild('alert') alertComponent!: AlertComponent;
  contactUsForm: FormGroup;
  options: google.maps.MapOptions = {
    center: {lat: 40, lng: -20},
    zoom: 4
  };

  constructor(
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
        first_name: this.contactUsForm.get('firstName').value,
        last_name: this.contactUsForm.get('lastName').value,
        email_from: this.contactUsForm.get('email').value,
        phone: this.contactUsForm.get('phone').value,
        email_content: this.contactUsForm.get('message').value,
        webstore: this.bizService.get_company_id()
      }
      this.apiService.contactUs(data).subscribe(res => {
        if (res) {
          this.alertComponent.showAlert('message sent successfully', 'success');
        }
      }, err => {
        this.alertComponent.showAlert('failed to send message', 'error');
      })
    }
  }

}
