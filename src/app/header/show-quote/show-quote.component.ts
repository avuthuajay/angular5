import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-quote',
  templateUrl: './show-quote.component.html',
  styleUrls: ['./show-quote.component.css']
})
export class ShowQuoteComponent implements OnInit {

  isDisabled = true;
  age = 18;
  suggestedPolicy: string;
  constructor() { }

  ngOnInit() {
  }

  showPolicy(){
    console.log('policy details');
    this.isDisabled = true;
    if(this.age > 30){
      this.suggestedPolicy = 'Jeevan Anand';
    } else{
      this.suggestedPolicy = 'Jeevan Akashy';
    }
  }

  changeStatus(){
    this.isDisabled = false;
  }
}
