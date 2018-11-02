import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("life cycle component");
  }
  ngAfterViewInit(){
    console.log("ng After View Init is called");
  }
}
