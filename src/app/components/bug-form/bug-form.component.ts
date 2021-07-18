import { Component, OnInit } from '@angular/core';
import { BugInfo } from 'src/app/models/BugInfo';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css']
})
export class BugFormComponent implements OnInit {

  bugInfo: BugInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.bugInfo = [
      {
        name:"Steve Njuguna",
        bugTitle:"Unresponsive UI",
        content:"The UI is very unresponsive, please check on it ASAP!",
        completed:false
      }
    ]
  }

}
