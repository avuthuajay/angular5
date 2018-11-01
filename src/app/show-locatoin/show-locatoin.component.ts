import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-show-locatoin',
  templateUrl: './show-locatoin.component.html',
  styleUrls: ['./show-locatoin.component.css']
})
export class ShowLocatoinComponent implements OnInit {

  selectLocation:BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  ngOnInit() {
  }

  capture(val){
    this.selectLocation.next(val);
    console.log(val);
  }

}
