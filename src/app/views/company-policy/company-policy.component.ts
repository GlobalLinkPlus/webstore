import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';

interface PolicyDetails {
  id: string;
  title: string;
  description: string;
  text_type: string;
  bullet_points: string[];
  section_number: string;
  webstore: string;
}

@Component({
  selector: 'app-company-policy',
  templateUrl: './company-policy.component.html',
  styleUrls: ['./company-policy.component.scss']
})
export class CompanyPolicyComponent implements OnInit {

  policyDetails: PolicyDetails[] = [];

  constructor(
    private apiService: ApiService,
    private bizService: BizService
  ) { }

  ngOnInit(): void {
    this.getPolicyDetails(this.bizService.get_company_id());
  }

  getPolicyDetails(id) {
    this.apiService.getReturnPolicyDetails(id).subscribe(res => {
      if (res)
        this.policyDetails = res;
    }, err => { });
  }

}
