import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { Policy } from '../policy';
import { TestimonyComponent } from '../testimony/testimony.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {

  @ViewChildren('section') sectionList: QueryList<any>;
  @ViewChild(TestimonyComponent) compRef: TestimonyComponent;
  popularPolicyList: Policy[];
  feedback1: string;
  feedback2: string;
  constructor(private ref: ChangeDetectorRef ) {
    this.popularPolicyList = [
      { policyName: 'Policy 1', description: 'This is a first policy This is a first policy This is a first policy This is a first policy' },
      { policyName: 'Policy 2', description: 'This is a second policy This is a second policy This is a second policy' },
      { policyName: 'Policy 3', description: 'This is a third policy This is a third policy This is a third policy This is a third policy' }];
  }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    this.feedback1 = this.compRef.getCorpCustomerFeedBack();
    this.feedback2 = this.compRef.getRetailCustomerFeedBack();
    this.ref.detectChanges();
    console.log(this.feedback1);
    console.log(this.sectionList);
  }

}
