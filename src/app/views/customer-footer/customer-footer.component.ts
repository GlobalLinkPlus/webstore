import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { ContactUsModalComponent } from '../contact-us-modal/contact-us-modal.component';

@Component({
  selector: 'app-customer-footer',
  templateUrl: './customer-footer.component.html',
  styleUrls: ['./customer-footer.component.scss']
})
export class CustomerFooterComponent implements OnInit {
  categories: any[] = [];

  constructor(
    private router: Router, 
    public bizService: BizService, 
    private apiService: ApiService,
    public userInfoService: UserInfoService,
    private dialogService: DialogService
    ) { }

  ngOnInit(): void {
    this.apiService.getProductCategory('').subscribe(res => {
      if (res)
        this.categories = res.splice(0, 7);
    }, err => { });
  }

  openContactUsModal() {
    const ref = this.dialogService.open(ContactUsModalComponent, {
      header: 'Contact Us',
      width: '410px',
      modal:true,
      closable: true,
    });
  }

  changeCategory(category) {
    this.router.navigateByUrl("/" + this.bizService.getBizName() + "/products/" + category);
  }

  logout() {
    this.userInfoService.signOut();
    this.router.navigateByUrl(this.bizService.getBizId());

  }


  login() {
    this.router.navigateByUrl(this.bizService.getBizId() + "/login");
  }

}
