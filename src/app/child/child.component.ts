import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
 
  @Input() name: string;
  user = '';
  constructor() {
    console.log("child constructor called");
    console.log("input property in cunstructor: "+this.name);
  }

  ngOnInit() {
    console.log("child on init called");
    console.log("input property in onInit: "+this.name);
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('Previous input: '+change.name.previousValue);
    console.log('Current input : '+change.name.currentValue);
    // throw new Error("Method not implemented.");
  }

}
