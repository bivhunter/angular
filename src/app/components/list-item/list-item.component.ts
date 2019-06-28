import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Task} from "../../models/Task";
import { JsonplaceholderService } from "../../services/jsonplaceholder.service";


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() task: Task;
  @Output() delete = new EventEmitter();
  @Output() patch = new EventEmitter();

  constructor(
    public server: JsonplaceholderService
  ) { }

  ngOnInit() {
  }

  deleteTask () {
   this.delete.emit(this.task.id);
  }

  updateTask() {
   // this.task.completed = !this.task.completed;
    this.patch.emit(this.task);
  }
}
