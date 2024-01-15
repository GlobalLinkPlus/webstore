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
  submitted: boolean = false;
  displaySection: number;
  activationCode: string;
  successResponse: number = 0;
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
      confirmPassword: ['', [Validators.required]],
    });

    this.passwordForm.get('password').valueChanges.subscribe(() => {
      this.validatePassword();
    });

    this.passwordForm.get('confirmPassword').valueChanges.subscribe(() => {
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

  resetPassword() {
    if (!this.passwordForm.get('password').hasError('minlength',) &&
      !this.passwordForm.get('password').hasError('uppercase') &&
      !this.passwordForm.get('password').hasError('specialCharacter') &&
      !this.passwordForm.get('password').hasError('number') &&
      !this.passwordForm.get('confirmPassword').hasError('passwordMismatch')
    ) {
      this.nextSection();
    }
  }

  validatePassword() {
    const password = this.passwordForm.get('password').value;
    const confirmPassword = this.passwordForm.get('confirmPassword').value;

    // Reset errors
    this.passwordForm.get('password').setErrors(null);
    this.passwordForm.get('confirmPassword').setErrors(null);

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
      this.passwordForm.get('confirmPassword').setErrors({ passwordMismatch: true });
    }
  }

  submitEmail() {
    this.successResponse = 1
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
