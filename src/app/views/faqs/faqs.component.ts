import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  show_features=1;

  constructor() { }

  ngOnInit(): void {
  }

  setShowFeatures(value) {
    this.show_features = value;
  }

}
