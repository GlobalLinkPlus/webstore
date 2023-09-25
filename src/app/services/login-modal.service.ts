import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {
  loginModalEmitter: EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  open(){
    console.log("emmmitng")
    this.loginModalEmitter.emit("open");
  }
  close(){
    this.loginModalEmitter.emit("close");
  }
 
}