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
        status: "Solved",
        bugTitle:"Unresponsive UI",
        content:"The UI is very unresponsive, please check on it ASAP!",
        completed:false
      }
    ]
  }

  toggleResolved (id:number) {
    this.bugInfo.map((v , i) =>{
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

}
