import { Component, OnInit, Input } from '@angular/core';
import { PageLink } from '../page-link';
import { ComponentCommunicationService } from '../component-communication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // @Input() link: string;
  @Input() linksFromParent: PageLink[];
  showLogin = true;
  showLogout = false;
  constructor(private service: ComponentCommunicationService) {

  }

  ngOnInit() {
    this.service.messages.subscribe(status => {
      if (status === 'logged') {
        this.showLogout = true;
        this.showLogin = false;
      } else {
        this.showLogout = false;
        this.showLogin = true;
      }
    });
  }

}
