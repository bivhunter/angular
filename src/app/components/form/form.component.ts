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
  @ViewChild('form', {static: false}) form;

  constructor(
    public server: JsonplaceholderService,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
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
