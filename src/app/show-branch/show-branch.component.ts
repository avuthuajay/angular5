import { Component, OnInit, Input, EventEmitter, Output, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ShowBranchComponent implements OnInit {

  @Input() cityName: string;
  @Output() branches: EventEmitter<string[]> = new EventEmitter<string[]>();
  constructor() { }

  ngOnInit() {
  }
  sendBranches() {
    if (this.cityName === 'Hyderabad') {
      this.branches.emit(['Miyapur', 'Gachibowli', 'Alkapur'])
    } else if(this.cityName === 'Chennai') {
      this.branches.emit(['Anna Nagar', 'T Nagar', 'Amma Nagar'])
    }else if(this.cityName === 'Vijayawada') {
      this.branches.emit(['Nunna', 'Ajitsing Nagar', 'Bangla'])
    }
  }
}
