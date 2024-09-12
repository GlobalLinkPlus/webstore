import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';
import { Location } from '@angular/common';

export class PasswordValidator {
  static hasMinimumLength(password: string): boolean {
    return password.length >= 8;
  }

  static hasUpperCase(password: string): boolean {
    return /[A-Z]/.test(password);
  }

  static hasSpecialCharacter(password: string): boolean {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  }

  static hasNumber(password: string): boolean {
    return /\d/.test(password);
  }
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  loginForm: FormGroup;
  passwordForm: FormGroup;
  validateEmailForm: FormGroup;
  submitted: boolean = false;
  displaySection: number;
  activationCode: string;
  successResponse: number = 0;
  inputType: string = 'password';
  showPassword: boolean = false;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private userInfoService: UserInfoService,
    public bizService: BizService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]],
      activation_token: ['', [Validators.required]]
    });

    this.validateEmailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })

    this.passwordForm.get('password').valueChanges.subscribe(() => {
      this.validatePassword();
    });

    this.passwordForm.get('confirm_password').valueChanges.subscribe(() => {
      this.validatePassword();
    });

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.displaySection = params.section_no ? +params.section_no : 1;
        this.activationCode = params.activation_code;
      }
    )
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }

  resetPassword() {
    this.passwordForm.get('activation_token').setValue(this.activationCode);
    if(this.passwordForm.valid){
      this.apiService.resetPassword(this.passwordForm.value).subscribe(res => {
        if(res){
          console.log(res)
          this.nextSection();
        }
      }, err =>{
        console.log(err)
      })
    }
  }

  validatePassword() {
    const password = this.passwordForm.get('password').value;
    const confirmPassword = this.passwordForm.get('confirm_password').value;

    // Reset errors
    this.passwordForm.get('password').setErrors(null);
    this.passwordForm.get('confirm_password').setErrors(null);

    // Check rules and set errors accordingly
    if (!PasswordValidator.hasMinimumLength(password)) {
      this.passwordForm.get('password').setErrors({ minlength: true });
    }
    if (!PasswordValidator.hasUpperCase(password)) {
      this.passwordForm.get('password').setErrors({ uppercase: true });
    }
    if (!PasswordValidator.hasSpecialCharacter(password)) {
      this.passwordForm.get('password').setErrors({ specialCharacter: true });
    }
    if (!PasswordValidator.hasNumber(password)) {
      this.passwordForm.get('password').setErrors({ number: true });
    }
    if (password !== confirmPassword) {
      this.passwordForm.get('confirm_password').setErrors({ passwordMismatch: true });
    }
  }

  submitEmail() {
    console.log(this.validateEmailForm.value)
    if(this.validateEmailForm.valid){
      const data = {
        email: this.validateEmailForm.value.email,
        webstore_id: this.bizService.get_company_id()
      }
      this.apiService.validateCustomerEmail(data).subscribe(res => {
        if(res){
          console.log(res)
          this.successResponse = 1;
        }
      }, err =>{
        console.log(err)
        this.successResponse = 2
      })
    }
  }

  nextSection() {
    if (this.displaySection < 3)
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
