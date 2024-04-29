import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  rightHeaderLink;
  CreateAccountForm: FormGroup;

  constructor(
    public bizService: BizService,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
  ) {
    this.CreateAccountForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
    this.checkRightHeaderLink();
  }

  checkLeftHeaderLink() {
    if (this.bizService.get_left_link() && this.bizService.get_left_link() !== "null") {
      return true;
    } else {
      return false;
    }
  }

  checkRightHeaderLink() {
    if (this.bizService.get_right_link() && this.bizService.get_right_link() !== "null") {
      this.rightHeaderLink = true;
    } else {
      this.rightHeaderLink = false;
    }
  }

  createAccount() {
    if(this.CreateAccountForm.valid){
      this.apiService.resetPassword(this.CreateAccountForm.value).subscribe(res => {
        if(res){
          console.log(res)
        }
      }, err =>{
        console.log(err)
      })
    }
  }

}
