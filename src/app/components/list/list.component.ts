import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService} from "../../services/jsonplaceholder.service";
import { Task } from "../../models/Task";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tasks: Task[];

  constructor(
    public server: JsonplaceholderService
  ) { }

  ngOnInit() {
    //console.log(this.server.getTasks());
   this.server.getTasks().subscribe(data => {
     if (data) {
       this.tasks = [].concat(data);
     }
   }, error =>{
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
      this.tasks = this.tasks.filter( task => {
        return task.id !== id;
      });
    });
  }
}
