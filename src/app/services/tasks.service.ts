import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: Http) { }
  getAllTasks(): Promise<any[]> {
    return this.http.get('./assets/data.json')
      .toPromise()
      .then(response => response.json().tasks as any[]);
  }
}
