import { Component } from "@angular/core";
import  { User} from "../../models/User";

@Component ({
  selector: 'app-myfirstcomponent',
  templateUrl: './myfirstcomponent.component.html',
  styleUrls: ['./myfirstcomponent.component.css']
})

export class MyFirstComponentComponent {
  name: string = 'Denis';
  user: User = {
    name: 'Denis',
    age: 29
  };

  users: User[] = [
    {
      name: 'Denis',
      age: 29
    },
    {
      name: 'Ivan',
      age: 30
    }
  ];

  show: boolean = false;

  imageUrl: string = 'http://lorempixel.com/400/200';

  disable: boolean = true;

  constructor() {
    console.log(this.users);
    setTimeout(()=> {
      this.userNameChanges ('+')
    }, 1000);

    setTimeout(() => this.showToggle(), 2000 );
    setTimeout(() => this.addUser(), 4000 )
  }

  userNameChanges(symbol: string) {
    this.user.name = this.user.name.toUpperCase() + symbol;
    return this.user;
  }

  showToggle() {
    this.show = !this.show;
  }

  addUser() {
    this.users.push({name: 'Default user', age: 18});
  }
}
