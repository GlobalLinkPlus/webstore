import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { MessageService } from 'primeng/api';

interface AboutUsDetails {
  id: string;
  title: string;
  description: string;
  image_url: string;
  section_number: string;
  webstore: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  aboutUsDetails: AboutUsDetails[] = [];

  constructor(
    public bizService: BizService,
    private apiService: ApiService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getAboutUsDetails(this.bizService.get_company_id());
  }

  getAboutUsDetails(id) {
    this.apiService.getAboutUsDetails(id).subscribe(res => {
      this.aboutUsDetails = res;
    }, err => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to load About Us details' });
    });
  }

}
