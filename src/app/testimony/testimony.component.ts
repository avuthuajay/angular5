import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRetailCustomerFeedBack():string{
    return 'Reatail customer feedback received';
  }

  getCorpCustomerFeedBack(): string{
    return 'Corporate customer feedback received';
  }

}
