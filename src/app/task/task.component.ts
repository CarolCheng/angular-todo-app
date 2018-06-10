import { Component, OnInit, Input } from '@angular/core';
import { Task } from './../protocol/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  bEditable: Boolean = true;

  constructor() {
  }

  ngOnInit() {
  }
  onShowEdit() {
    //console.log(opened);
    if (this.bEditable) {
      this.bEditable = false;
    }
  }
  onOpen(opened: boolean) {
     if (!this.bEditable) {
      this.bEditable = true;
     }
    //this.bEditable = !this.bEditable;
  }
}
