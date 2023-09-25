import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {


  customer_detail={
    "address_1": "",
    "address_2": "",
    "city": "",
    "state": "",
    "postal_code": "",
    "country": "",
    "company": "",
    "id": "",
    "banking": {
        "id": "",
        "payment_type": "",
        "bank_address": "",
        "secondary_bank_address": "",
        "account_no": "",
        "routing_no": "",
        "account_type": "",
        "card_number": "",
        "expiry_month": "",
        "expiry_year": "",
        "zip_code": "",
        "cvc_code": "",
        "card_holder": "",
        "payment_terms": "",
        "custom_payment_terms": "",
        "customer": ""
    },
    "contacts": {
        "id": "",
        "first_name": "",
        "last_name": "",
        "email": "",
        "wechat": "",
        "whatsapp": "",
        "primary_language": "",
        "secondary_language": "",
        "phone": "",
        "customer": ""
    },
    "shipping": {
        "id": "",
        "address_1": "",
        "address_2": "",
        "state": "",
        "region": "",
        "dropship": "",
        "city": "",
        "preferred_carrier": "",
        "zip_code": "",
        "country": "",
        "ship_allowance": "",
        "ship_discount": "",
        "customer": ""
    },
    "logo": "",
    "location": {},
    "allowances": [{
        "id": "",
        "shipment_parameter": "",
        "preferred_carrier": "",
        "customer": ""
    }]
}

  public orders:any[] =[

  ]

  constructor(
    private apiService:ApiService,
    private userInfoService: UserInfoService
  ) { }

  ngOnInit(): void {

  
    this.apiService.getCustomerDetail(this.userInfoService.getCustomerId()).subscribe(res=>{
      this.customer_detail=res;
    },err=>{});
  }

  joinName(first_name,last_name): string{
      return first_name+" "+last_name
  }


}
