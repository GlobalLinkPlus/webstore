import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  inputType: string = 'password';
  showPassword: boolean = false;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userInfoService: UserInfoService,
    public bizService: BizService,
    private location: Location
  ) { }

  

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      webstore: ['', Validators.required]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }
  
  submitLogin() {
    this.loginForm.get('webstore').setValue(this.bizService.get_company_id());
    this.submitted = true;
    this.apiService.login(this.loginForm.value).subscribe(async res => {
      this.submitted = false;
      if (res.token) {
        this.userInfoService.saveUserInfo(res);
        
          this.router.navigate([`/${this.bizService.getBizId()}`]);

      }
    }, err => {
      this.submitted = false;
    });
  }

}
