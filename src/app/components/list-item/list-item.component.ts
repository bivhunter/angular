import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Task} from "../../models/Task";
import { JsonplaceholderService } from "../../services/jsonplaceholder.service";


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  isEdit: boolean = false;

  @Input() task: Task;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() patch = new EventEmitter();

  constructor(
    public server: JsonplaceholderService
  ) { }

  ngOnInit() {
    this.server.updatingTask.subscribe(() => {
      this.isEdit = false;
    });

    this.server.cancelTask.subscribe(() => {
      this.isEdit = false;
    });
  }

  deleteTask () {
   this.delete.emit(this.task.id);
  }

  editTask() {
    const updateTask = Object.assign({}, this.task);
    this.edit.emit(updateTask);
    this.isEdit = true;
  }

  updateTask() {
   // this.task.completed = !this.task.completed;
    this.patch.emit(this.task);
  }
}
