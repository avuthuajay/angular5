import { Component, OnInit } from '@angular/core';
import { InsuranceAdvisor } from '../insurance-advisor';
import { InsuranceAPIService } from '../insurance-api.service';

@Component({
  selector: 'app-show-advisors',
  templateUrl: './show-advisors.component.html',
  styleUrls: ['./show-advisors.component.css']
})
export class ShowAdvisorsComponent implements OnInit {

  advisorList: InsuranceAdvisor[];
  constructor(private service: InsuranceAPIService) { }

  ngOnInit() {
    this.service.findAllAdvisors().subscribe(data => this.advisorList = data, err => console.error());
  }

}
