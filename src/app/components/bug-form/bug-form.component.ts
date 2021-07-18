import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-form',
  templateUrl: './bug-form.component.html',
  styleUrls: ['./bug-form.component.css']
})
export class BugFormComponent implements OnInit {

  title = "Issue Summary";

  constructor() { }

  ngOnInit(): void {
  }

}
