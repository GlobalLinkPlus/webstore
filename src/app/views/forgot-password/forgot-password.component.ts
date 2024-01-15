import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  displaySection: number;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userInfoService: UserInfoService,
    public bizService: BizService,
    private location: Location,
    private route: ActivatedRoute
  ) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=>{
        this.displaySection = +params.section_no;
      }
    )
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  nextSection() {
    if(this.displaySection < 3)
    this.displaySection++;
  }

  submitLogin() {
    this.submitted = true;
    this.apiService.login(this.loginForm.value).subscribe(res => {
      this.submitted = false;
      if (res.token) {
        this.userInfoService.saveUserInfo(res);
        // this.router.navigateByUrl(this.bizService.getBizId())
        this.location.back();

      }
    }, err => {
      this.submitted = false;
    });
  }

}
