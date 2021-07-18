import { Component, OnInit } from '@angular/core';
import { bugInfo } from 'src/app/models/BugInfo';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css']
})
export class BugFormComponent implements OnInit {
  
  public bugInfo:bugInfo[] = [];

  inputName:string = "";
  inputBugTitle:string = "";
  inputBugInfo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.bugInfo = []
  }

  addBugIssue() {
    this.bugInfo.push({
      name: this.inputName,
      bugTitle: this.inputBugTitle,
      content: this.inputBugInfo,
      completed:false
    });

    this.inputName = "";
    this.inputBugTitle = "";
    this.inputBugInfo = "";
  }

  toggleResolved (id:number) {
    this.bugInfo.map((v , i) =>{
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }

  deleteIssue(id:number){
    this.bugInfo = this.bugInfo.filter((v ,i) => i != id);
  }

}
