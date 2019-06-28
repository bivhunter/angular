import { Injectable } from '@angular/core';
import { Task } from "../models/Task";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  configUrl: string = 'https://jsonplaceholder.typicode.com/todos/';

  private taskSource = new BehaviorSubject<Task>({id: 0, title: '', userId: 0, completed: false});
  newTask = this.taskSource.asObservable();

  private taskCountSource = new BehaviorSubject(200);
  taskCount = this.taskCountSource.asObservable();

  constructor(
    public http: HttpClient
  ) { }

  emitNewTask (task: Task) {
    this.taskSource.next(task);
  }

  updateCount(length: number) {
    this.taskCountSource.next(length);
  }

  getTasks() {
    return this.http.get(this.configUrl);
  }

  patchTask(id : number, completed: boolean) {
    return this.http.patch(this.configUrl + id, {completed: !completed});
  }

  addTask(task: Task) {
    /*return this.http.post(this.configUrl, {
      title: task.title,
      completed: task.completed,
      userId: task.id
    });*/

    return this.http.post(this.configUrl, {
      body: task
    });

  }

  deleteTask(id: number) {
    console.log('delete Urls', this.configUrl + id);
    return this.http.delete(this.configUrl + 300);
  }
}
