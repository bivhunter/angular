import { Injectable } from '@angular/core';
import { Task } from "../models/Task";
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  configUrl = "https://jsonplaceholder.typicode.com/todos/";

  constructor(
    public http: HttpClient
  ) { }

  getTasks() {
    return this.http.get(this.configUrl);
  }
}
