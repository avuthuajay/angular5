import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { PolicyDetail } from '../policy-detail';

@Component({
  selector: 'app-showpolicydetails',
  templateUrl: './showpolicydetails.component.html',
  styleUrls: ['./showpolicydetails.component.css']
})
export class ShowpolicydetailsComponent implements OnInit {

  searchName = '';
  policyList: PolicyDetail[] = [];
  policyData: PolicyDetail = {
    id: 0,
    policyHolderName: '',
    maturityDate: new Date(),
    policyAmount: 0
  };
  buttonText = 'Add';
  page: number;

  @ViewChild('f') form: any;
  indexPositon: number;
  toggleForm = false;
  constructor(private serive: InsuranceAPIService) { }

  ngOnInit() {
    this.serive.findPolicy().subscribe(data => this.policyList = data)
  }

  submit(){
    if(this.buttonText === 'Add'){
      this.serive.addPolicy(this.policyData).subscribe(response => {
        this.policyList.push(response);
        this.form.reset();
      });
    } else {
      this.serive.updatePolicy(this.policyData).subscribe(response => {
        this.policyList[this.indexPositon] = response;
        this.form.reset();
      });
    }

    console.log(this.policyData);
  }

  update(policy){
    this.indexPositon = this.policyList.indexOf(policy);
    this.buttonText = 'update';
  }

  showForm(){
    this.toggleForm = true;
  }

  remove(policy){
    console.log('Remove Method called');
    const indexPositon = this.policyList.indexOf(policy);
    this.serive.removePolicy(policy).subscribe(response => {
      this.policyList.splice(indexPositon,1);
    });
  }

}
