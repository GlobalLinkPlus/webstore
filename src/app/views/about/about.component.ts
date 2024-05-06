import { Component, OnInit } from '@angular/core';
import { BizService } from 'src/app/services/biz.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public bizService: BizService,
  ) { }

  ngOnInit(): void {
  }

}
