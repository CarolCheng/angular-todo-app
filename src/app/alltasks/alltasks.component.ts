import { TasksService } from './../services/tasks.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from './../protocol/task';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {

  @Input() selectedStatus: string;
  alltasks: Task[];
  bready: Boolean = false;
  todocount: number;
  totaltask: number;

  constructor(private taskservice: TasksService) { }

  ngOnInit() {
    this.taskservice.getAllTasks()
      .then((info: any) => {

        if (this.selectedStatus !== 'MyTasks') {
          this.alltasks = info.filter(
            task => task.status === this.selectedStatus);
        } else {
          this.alltasks = info;
        }
        this.alltasks.sort(function (a, b) { return ( a.starred === b.starred) ? 0 : a.starred ? -1 : 1; });
        this.bready = true;
        this.todocount = this.alltasks.filter(
          task => task.status === 'InProgress').length;
        this.totaltask = this.alltasks.length;
      });
  }

}
