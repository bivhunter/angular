import { Component, OnInit } from '@angular/core';

import { JsonplaceholderService} from "../../services/jsonplaceholder.service";
import { Task } from "../../models/Task";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[];

  constructor(
    public server: JsonplaceholderService,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    //console.log(this.server.getTasks());
   this.server.getTasks().subscribe(data => {
     if (data) {
       this.tasks = [].concat(data);
     }
   }, error =>{
     this.flashMessage.show(error.message, {
       cssClass: 'alert-danger',
       showCloseBtn: true,
       closeOnClick: true,
       timeout: 10000
     });
   });

   this.server.newTask.subscribe( (data: Task) => {
     if (data['body']) {
       const  newTask = Object.assign({}, data['body'], {id: data.id});
       this.tasks.unshift(newTask);
       this.server.updateCount(this.tasks.length);
     }
    });
  }

  identify(index) {
    return index;
  }

  patchTask(task) {
    /*let task : Task;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === id) {
        task = this.tasks[i];
        break;
      }
    }
    */

    this.server.patchTask(task.id, task.completed).subscribe( data => {
      task.completed = !task.completed;
    });
  }

  deleteTask (id) {
    this.server.deleteTask(id).subscribe(data => {
      this.flashMessage.show("Delete success", {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
      this.tasks = this.tasks.filter( task => {
        return task.id !== id;
      });
      this.server.updateCount(this.tasks.length);
    }, error => {
      this.flashMessage.show(error.message, {
        cssClass:  'alert-denger',
        showCloseBtn: true,
        closeOnClick: true,
        timeout: 10000
      });
    });
  }
}
