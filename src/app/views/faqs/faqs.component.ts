import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';

interface FaqsDetails {
  id: string;
  title: string;
  description: string;
  section_number: string;
  webstore: string;
}

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  show_features=0;
  faqsDetails: FaqsDetails[] = [];

  constructor(
    public bizService: BizService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getFaqsDetails(this.bizService.get_company_id());
  }

  setShowFeatures(value) {
    this.show_features = value;
  }

  getFaqsDetails(id) {
    this.apiService.getFaqsDetails(id).subscribe(res => {
      this.faqsDetails = res;
    }, err => { });
  }

}
