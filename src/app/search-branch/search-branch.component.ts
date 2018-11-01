import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';
import { ShowLocatoinComponent } from '../show-locatoin/show-locatoin.component';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {

  searchCity = '';
  branchList: string[];
  @ViewChild('locationInformation',{read: ViewContainerRef}) viewReference: ViewContainerRef;
  constructor(private service: ComponentAdderService) { }

  ngOnInit() {
  }

  onChange(val){
    this.branchList = val;
  }

  add(){
    console.log('add from search branch called');
    this.service.setViewReference(this.viewReference);
    const component = this.service.addComponent(ShowLocatoinComponent);
    const locationComonent = (<ShowLocatoinComponent> component.instance);

    locationComonent.selectLocation.subscribe(value => {
      this.searchCity = value;
      if(value.length > 0){
        this.remove();
      }
    });
  }

  remove(){
    console.log('remove from search branch called');
    this.service.remove();
  }
}
