import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person/person';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  // names: [{name: string}] = [{ name: 'Mahesh'}, { name: 'Aldrin'}, { name: 'Fintan'}, { name: 'mahesh chandran'}];

  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
