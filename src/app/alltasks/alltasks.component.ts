import { TasksService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from './../protocol/task';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {

  alltasks: Task[];
  bready: Boolean = false;
  todocount: number;

  constructor(private taskservice: TasksService) { }

  ngOnInit() {
    this.taskservice.getAllTasks()
      .then((info: any) => {
        this.alltasks = info;
        this.alltasks.sort(function (a, b) { return ( a.starred === b.starred) ? 0 : a.starred ? -1 : 1; });
        this.bready = true;
        this.todocount = this.alltasks.filter(
          task => task.status === 'inprogress').length;
      });
  }

}
