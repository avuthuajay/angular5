import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private service: ComponentCommunicationService) { }

  ngOnInit() {
    this.signout();
  }
  signout(){
    this.service.changeMessage('logout');
    sessionStorage.removeItem('logged');
    this.router.navigate(['product']);
  }
  // validate() {
  //   this.service.changeMessage('logout');
  // }
}
