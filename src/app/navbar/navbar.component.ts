import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tabLinks: any[];

  constructor(private router: Router) {
    this.tabLinks = [
      {
          label: 'My Tasks',
          value: 'MyTasks',
          index: 0
      }, {
          label: 'In Progress',
          value: 'InProgress',
          index: 1
      }, {
          label: 'Completed',
          value: 'Completed',
          index: 2
      }
    ];
  }

  ngOnInit() {
  }

}
