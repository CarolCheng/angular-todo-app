import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';

// Angular Material 6.2.1
import { MatTabsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import 'hammerjs';
// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlltasksComponent } from './alltasks/alltasks.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { CompletedComponent } from './completed/completed.component';
import { TaskComponent } from './task/task.component';
// Service
import { TasksService } from './services/tasks.service';
import { AddTaskComponent } from './addtask/addtask.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlltasksComponent,
    InprogressComponent,
    CompletedComponent,
    TaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatGridListModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      //  { path: 'webView',
      //    component: AppComponent,
      // children: [
      { path: 'tasks', component: AlltasksComponent },
      { path: 'inprogress', component: InprogressComponent },
      { path: 'completed', component: CompletedComponent }
      // ]
      // }
    ])
  ],
  providers: [
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
