import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { MyFirstComponentComponent } from "./components/myfirstcomponent/myfirstcomponent.component";
//import { TodoComponent } from './components/todo/todo.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { JsonplaceholderService} from "./services/jsonplaceholder.service";
import { HttpClientModule } from "@angular/common/http";
import { FlashMessagesModule} from "angular2-flash-messages";
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
  //  MyFirstComponentComponent,
   // TodoComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
    ListItemComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [JsonplaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
