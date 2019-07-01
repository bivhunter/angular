import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from "../../models/Task";
import { JsonplaceholderService} from "../../services/jsonplaceholder.service";
import { FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;
  isEdit: boolean = false;
  currentTaskId: number;
  @ViewChild('form', {static: false}) form;

  constructor(
    public server: JsonplaceholderService,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.server.editingTask.subscribe((task: Task) => {
      if (task.title) {
        this.isEdit = true;
        this.title = task.title;
        this.currentTaskId = task.id;
      }
    });
  }

  editTask() {
    const updateTask = {
      id: this.currentTaskId,
      userId: 1,
      completed: false,
      title: this.title
    };

    this.server.editTask(updateTask).subscribe((task: Task) => {
      console.log("editTask", task);
      this.form.reset();
      this.isEdit = false;
      this.server.emitUpdateTask(task);

      this.flashMessage.show("Edit Success", {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    }, error => {
      this.flashMessage.show(error.message, {
        cssClass: 'alert-danger',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    });
  }

  cancelTask() {
    this.form.reset();
    this.isEdit = false;
    this.server.emitCancelTask(true);
    this.flashMessage.show('Cancel editing!', {
      cssClass: 'alert-success',
      showCloseBtn: true,
      closeOnClick: true,
      timeout: 10000
    });
  }

  addTask() {
    const newTask = {
      userId: 1,
      completed: false,
      title: this.title
    };


    this.server.addTask(newTask).subscribe( (data: Task) => {
      console.log("add data", data);
      this.form.reset();
      this.server.emitNewTask(data);
      this.flashMessage.show('Success!', {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    }, error => {
      this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          showCloseBtn: true,
          closeOnClick: true,
          timeout: 10000
        });
    });
  }

}
