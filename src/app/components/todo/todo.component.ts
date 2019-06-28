import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  todo: Todo = {
    id: '',
    title: "",
    complete: false,
    text: ''
  }

  @ViewChild( 'form', {static : true} ) form;

  constructor() { }

  ngOnInit() {
    //get todos
    this.todos = [
      {
        title: 'Task 1',
        text: 'My task text',
        complete: false,
        id: '1'
      },
      {
        title: 'Task 2',
        text: "My task text 2",
        complete: true,
        id: '2'
      }
    ];

  }

  addTodo() {
    console.log(this.form);
    const newTask = {
      id: this.todos.length + '1',
      title: this.todo.text,
      text: this.todo.title,
      complete: false
    }

    this.todos.unshift(newTask);
    this.form.reset();
  }

  deleteTask(id) {
    this.todos = this.todos.filter(task => task.id !== id);
  }

  identify(index) {
    return index;
  }

}
