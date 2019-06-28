import { Component, OnInit } from '@angular/core';
import { Task } from "../../models/Task";
import { JsonplaceholderService} from "../../services/jsonplaceholder.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title: string;

  constructor(
    public server: JsonplaceholderService
  ) { }

  ngOnInit() {
  }

  addTask() {

  }

}
