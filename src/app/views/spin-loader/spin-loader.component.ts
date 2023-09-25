import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BizService } from 'src/app/services/biz.service';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-spin-loader',
  templateUrl: './spin-loader.component.html',
  styleUrls: ['./spin-loader.component.scss']
})
export class SpinLoaderComponent implements OnInit {

  color="#000000"
  constructor(
    public bizService:BizService
  ) {
 this.color=this.bizService.get_background_color();
   }

  ngOnInit(): void {


  }



}
