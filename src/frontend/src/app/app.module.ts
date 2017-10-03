import { BrowserModule } from '@angular/platform-browser';
import 'hammerjs';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdButtonModule, MdRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { ApiService } from 'app/services/api.service';
import { StoreService } from 'app/services/store.service';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TodoComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    MdButtonModule,
    MdRadioModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ApiService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
