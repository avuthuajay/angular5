import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentCommunicationService {

  messages: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() { }

  changeMessage(latestMessage) {
    this.messages.next(latestMessage);
  }
}
