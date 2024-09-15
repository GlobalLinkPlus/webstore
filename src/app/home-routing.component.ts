import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { BizService } from './services/biz.service';
import { LoginModalService } from './services/login-modal.service';
import { UserInfoService } from './services/user-info.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>
  <style>

  .show{
    display:block;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }
  .modal{
    z-index:1072;
    
    
  }
  .form-group .round-input{
        border-radius: 10px !important;
        height: 50px;
        padding-left: 20px;
        border: 1px solid grey;
    
  }
  
  .form-group{
    display: grid;
  }
  
  .login-button{
      width:100%;
      height: 50px;
      background: #f68b1e;
      border-color: grey !important;
      color: #fff;
      font-size: large;
      padding: auto;
      font-weight: 500;
      border-radius: 10px;
  
  
  }
  label{
    font-weight: 600;
  }


  .modal-backdrop {
    z-index: 1071;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display:none;
    height: 100vh;
    background-color: #000;
  }
  .fade {
    transition: opacity .15s linear;
  }
  .modal-backprop-show{
    opacity: .5;
    display:block;
  }
  .modal-backdrop.fade {
    opacity: 0;
  }

  </style>
  
  <div
  id="loginModal"
  class="modal fade"
  tabindex="-1"
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
  (click)="closeModalClicked($event)"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content" (click)="modalContentClicked($event)">
 
      <div class="modal-body">
      <div  style="padding:0px ;">
      <div class="row" style="justify-content: center;margin-top: 30px !important;">
        <div style="max-width: 500px;">
          <div class="card" style="width: 100%;border:none">
          <a class="logo" href="javascript:void(0);" style="text-align: center;">
            <img src="{{bizService.get_company_logo()}}" height="60px"/>
            </a>
            
            <div class="card-body">  
              <form [formGroup]="loginForm">          
                <div class="row" style="margin-top: 20px;">
                  <div class="form-group">
                    <label>Email Address</label>
                    <input  formControlName="email" type="email"  placeholder="Email Address" class="round-input" >
                  </div>
                </div>
                <div class="row" style="margin-top: 20px;">
                  <div class="form-group">
                    <label>Password</label>
                    <div style="width: 100%;">
                      <input formControlName="password" type="{{inputType}}" placeholder="Enter your Password"
                      class="round-input" style="width: 100%;">
                      <i *ngIf="!showPassword" class="fa fa-eye" style="cursor: pointer; margin-left: -30px;" (click)="togglePassword()"></i>
                      <i *ngIf="showPassword" class="fa fa-eye-slash" style="cursor: pointer; margin-left: -30px;" (click)="togglePassword()"></i>
                    </div>
                  </div>
                </div>
              </form>
              <div class="row" style="margin-top: 20px; display: block;">
                <span style="cursor:pointer;" ><i class="fa-regular fa-circle" [ngStyle]="{'color': bizService.get_background_color()}"></i><span style="padding-left:10px;">Remember Me</span></span>
                <span style="float: right; width: fit-content; cursor: pointer;" (click)="forgotPassword()" [ngStyle]="{'color': bizService.get_background_color()}">Forgot Password?</span>
              </div>
              <div class="row" style="margin-top: 30px; padding-left: 10px;padding-right: 10px;">
                  <button class="btn  login-button" (click)="submitLogin()" [ngStyle]="submitted?{'background-color': bizService.get_background_color()}:{'background-color': bizService.get_background_color()}" >Login</button>
              </div>
              <div class="row" style="margin-top: 20px; display: block;">
                <span >Don't have an Account</span>
                <span style="float: right; width: fit-content;" [ngStyle]="{'color': bizService.get_background_color()}">Request to Become a Customer</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>   

      </div>
    </div>
  </div>
</div>
<div  id="backprop" class="modal-backdrop fade" ></div>
  `,
})
export class HomeRoutingComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  inputType: string = 'password';
  showPassword: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    public bizService: BizService,
    private apiService: ApiService,
    private userInfoService: UserInfoService,
    private renderer: Renderer2,
    private loginModalService: LoginModalService,
    private router: Router,
  ) {

  }

  ngOnInit() {

    this.bizService.setBizId(this.route.snapshot.params.biz_id)
    this.route.data.subscribe(res => {
      console.log(res)
      this.bizService.setBizDetail(res.bizInfo[0])

    })
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      webstore: ['', Validators.required]
    });

    this.loginModalService.loginModalEmitter.subscribe(res => {
      console.log("emitted", res)
      if (res == "open") {
        this.openModal();
      } else if (res == "close") {
        this.closeModal()
      } else {

      }
    })

  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }

  openModal(): void {
    const modalElement = document.getElementById('loginModal');

    if (modalElement) {
      this.renderer.addClass(modalElement, 'show');
      // Show the modal
      document.body.style.overflow = 'hidden'; // Prevent body scrolling
      this.renderer.addClass(document.body, 'modal-open');
    }
    const backPropElement = document.getElementById('backprop');
    if (backPropElement) {
      this.renderer.addClass(backPropElement, 'modal-backprop-show');
      this.renderer.removeClass(backPropElement, 'fade');
      // Show the modal
      document.body.style.overflow = 'hidden'; // Prevent body scrolling
    }


  }

  closeModalClicked(event: Event) {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.classList.contains('modal')) {
      this.closeModal();
    }
  }

  modalContentClicked(event: Event) {
    event.stopPropagation();
  }

  closeModal(): void {
    console.log("close")

    const modalElement = document.getElementById('loginModal');
    if (modalElement) {
      this.renderer.removeClass(modalElement, 'show'); // Hide the modal
      document.body.style.overflow = ''; // Restore body scrolling
      this.renderer.removeClass(document.body, 'modal-open');
    }
    const backPropElement = document.getElementById('backprop');
    if (backPropElement) {
      this.renderer.removeClass(backPropElement, 'modal-backprop-show');
      this.renderer.addClass(backPropElement, 'fade');
      // Show the modal
      document.body.style.overflow = ''; // Prevent body scrolling
    }
  }

  forgotPassword() {
    this.router.navigateByUrl("/" + this.bizService.getBizName() + "/resetpassword/1")
    this.closeModal()
  }

  submitLogin() {
    this.loginForm.get('webstore').setValue(this.bizService.get_company_id());
    this.submitted = true;
    this.apiService.login(this.loginForm.value).subscribe(res => {
      this.submitted = false;
      if (res.channel) {
        this.bizService.set_channel(res.channel);
      }
      if (res.token) {
        this.userInfoService.saveUserInfo(res);
        this.closeModal()
      }
    }, err => {
      this.submitted = false;
    });
  }
}
