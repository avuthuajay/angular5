import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myHeading: string;
  logo: string;
  // linkText='Login';
  links:PageLink[];

  constructor() {
    this.links = [
      {linkText:'Home', linkRef:'home', linkStyle:'nav-link'},
      {linkText:'Products', linkRef:'products', linkStyle:'nav-link'},
      {linkText:'History', linkRef:'history', linkStyle:'nav-link'},
      {linkText:'Advisors', linkRef:'advisors', linkStyle:'nav-link'},
      {linkText:'Quote', linkRef:'quote', linkStyle:'nav-link'},
      {linkText:'Branches', linkRef:'branches', linkStyle:'nav-link'}
    ];
    this.myHeading = 'Ajay Insurance';
    this.logo = './assets/images/logo.jpg';
  }

  ngOnInit() {
  }

}
