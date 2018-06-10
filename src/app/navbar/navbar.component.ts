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
          path: '/tasks',
          index: 0
      }, {
          label: 'In Progress',
          path: '/inprogress',
          index: 1
      }, {
          label: 'Completed',
          path: '/completed',
          index: 2
      }
    ];
  }

  ngOnInit() {
  }

}
